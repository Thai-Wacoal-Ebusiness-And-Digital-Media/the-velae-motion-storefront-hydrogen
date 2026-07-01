import {createContext, useContext, useEffect, useMemo} from 'react';
import {CartForm} from '@shopify/hydrogen';
import {useCartFetchers} from '~/hooks/useCartFetchers';
import {useDrawer} from '~/components/Drawer';

type CartUIContextValue = {
  isCartOpen: boolean;
  openCart: () => void;
  closeCart: () => void;
};

const CartUIContext = createContext<CartUIContextValue | null>(null);

/**
 * Shares cart-drawer open state across the header (Header.tsx) and any
 * route-specific chrome that bypasses it (MotionHero on the homepage).
 * Also auto-opens the drawer on add-to-cart, regardless of route.
 */
export function CartUIProvider({children}: {children: React.ReactNode}) {
  const {
    isOpen: isCartOpen,
    openDrawer: openCart,
    closeDrawer: closeCart,
  } = useDrawer();

  const addToCartFetchers = useCartFetchers(CartForm.ACTIONS.LinesAdd);

  useEffect(() => {
    if (isCartOpen || !addToCartFetchers.length) return;
    openCart();
  }, [addToCartFetchers, isCartOpen, openCart]);

  const value = useMemo(
    () => ({isCartOpen, openCart, closeCart}),
    [isCartOpen, openCart, closeCart],
  );

  return (
    <CartUIContext.Provider value={value}>{children}</CartUIContext.Provider>
  );
}

export function useCartUI() {
  const ctx = useContext(CartUIContext);
  if (!ctx) {
    throw new Error('useCartUI must be used within a CartUIProvider');
  }
  return ctx;
}
