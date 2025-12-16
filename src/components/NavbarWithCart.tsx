'use client';

import { Navbar } from "@/components/NavLink";
import { useCart } from "@/hooks/useCart";

export function NavbarWithCart() {
  const { totalItems } = useCart();
  return <Navbar cartCount={totalItems} />;
}

