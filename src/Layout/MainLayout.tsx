import { Outlet } from "next/link";
import { Navbar } from "@/components/NavLink";

interface MainLayoutProps {
  cartCount: number;
}

export default function MainLayout({ cartCount }: MainLayoutProps) {
  return (
    <>
      <Navbar cartCount={cartCount} />
      <Outlet />
    </>
  );
}
