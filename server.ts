// @ts-ignore
// Virtual entry point for the app
import * as remixBuild from 'virtual:remix/server-build';
import {createRequestHandler as createRemixRequestHandler} from '@netlify/remix-runtime';
import {createHydrogenAppLoadContext} from '@netlify/remix-edge-adapter';
import type {Context} from '@netlify/edge-functions';
import {
  cartGetIdDefault,
  cartSetIdDefault,
  createCartHandler,
  createStorefrontClient,
  storefrontRedirect,
  createCustomerAccountClient,
} from '@shopify/hydrogen';
import {getStorefrontHeaders} from '@shopify/remix-oxygen';

import {AppSession} from '~/lib/session.server';
import {getLocaleFromRequest} from '~/lib/utils';

async function createAppLoadContext(
  request: Request,
  env: Env,
  executionContext: ExecutionContext,
) {
  if (!env?.SESSION_SECRET) {
    throw new Error('SESSION_SECRET environment variable is not set');
  }

  const waitUntil = executionContext.waitUntil.bind(executionContext);
  const [cache, session] = await Promise.all([
    caches.open('hydrogen'),
    AppSession.init(request, [env.SESSION_SECRET]),
  ]);

  const {storefront} = createStorefrontClient({
    cache,
    waitUntil,
    i18n: getLocaleFromRequest(request),
    publicStorefrontToken: env.PUBLIC_STOREFRONT_API_TOKEN,
    privateStorefrontToken: env.PRIVATE_STOREFRONT_API_TOKEN,
    storeDomain: env.PUBLIC_STORE_DOMAIN,
    storefrontId: env.PUBLIC_STOREFRONT_ID,
    storefrontHeaders: getStorefrontHeaders(request),
  });

  const customerAccount = createCustomerAccountClient({
    waitUntil,
    request,
    session,
    customerAccountId: env.PUBLIC_CUSTOMER_ACCOUNT_API_CLIENT_ID,
    shopId: env.SHOP_ID,
  });

  const cart = createCartHandler({
    storefront,
    customerAccount,
    getCartId: cartGetIdDefault(request.headers),
    setCartId: cartSetIdDefault(),
  });

  return {session, waitUntil, storefront, customerAccount, cart, env};
}

const remixHandler = createRemixRequestHandler(remixBuild, process.env.NODE_ENV);

export default async (request: Request, context: Context) => {
  try {
    const loadContext = await createHydrogenAppLoadContext(
      request,
      context,
      createAppLoadContext,
    );

    const response = await remixHandler(request, loadContext);

    if (loadContext.session.isPending) {
      response.headers.set('Set-Cookie', await loadContext.session.commit());
    }

    if (response.status === 404) {
      return storefrontRedirect({
        request,
        response,
        storefront: loadContext.storefront,
      });
    }

    return response;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error(error);
    return new Response('An unexpected error occurred', {status: 500});
  }
};

export const config = {
  path: '/*',
};
