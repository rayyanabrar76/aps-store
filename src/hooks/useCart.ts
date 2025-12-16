'use client';

import { useState, useEffect, useCallback } from 'react';
import { CartItem } from '@/types/store';

const CART_KEY = 'aps_cart';

export function useCart() {
  const [cart, setCart] = useState<CartItem[]>([]);

  useEffect(() => {
    const stored = localStorage.getItem(CART_KEY);
    if (stored) {
      try {
        setCart(JSON.parse(stored));
      } catch {
        setCart([]);
      }
    }
  }, []);

  const saveCart = useCallback((items: CartItem[]) => {
    localStorage.setItem(CART_KEY, JSON.stringify(items));
    setCart(items);
  }, []);

  const addToCart = useCallback((item: Omit<CartItem, 'qty'>) => {
    setCart(prev => {
      const existing = prev.find(i => i.productId === item.productId);
      let updated: CartItem[];
      if (existing) {
        updated = prev.map(i => 
          i.productId === item.productId 
            ? { ...i, qty: i.qty + 1 } 
            : i
        );
      } else {
        updated = [...prev, { ...item, qty: 1 }];
      }
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const updateQty = useCallback((productId: string, delta: number) => {
    setCart(prev => {
      const updated = prev
        .map(item => 
          item.productId === productId 
            ? { ...item, qty: item.qty + delta } 
            : item
        )
        .filter(item => item.qty > 0);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const removeItem = useCallback((productId: string) => {
    setCart(prev => {
      const updated = prev.filter(item => item.productId !== productId);
      localStorage.setItem(CART_KEY, JSON.stringify(updated));
      return updated;
    });
  }, []);

  const clearCart = useCallback(() => {
    localStorage.removeItem(CART_KEY);
    setCart([]);
  }, []);

  const totalItems = cart.reduce((sum, item) => sum + item.qty, 0);
  const totalPrice = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return {
    cart,
    addToCart,
    updateQty,
    removeItem,
    clearCart,
    totalItems,
    totalPrice
  };
}
