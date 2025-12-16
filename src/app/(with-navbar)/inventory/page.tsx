import type { Metadata } from "next";
import InventoryClient from "@/pages/Inventory";

export const metadata: Metadata = {
  title: "Technical Inventory Archive | APS",
  description:
    "Browse APS industrial generators, control logic, and power distribution assets in the technical archive.",
  alternates: {
    canonical: "/inventory",
  },
};

export default function InventoryPage() {
  return <InventoryClient />;
}

