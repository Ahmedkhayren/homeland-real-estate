import type { Metadata } from "next";
import { Suspense } from "react";
import { PropertyExplorer } from "@/components/property/PropertyExplorer";
export const metadata: Metadata = { title: "Properties", description: "Browse HomeLand's selection of homes, rentals, and commercial spaces." };
export default function PropertiesPage() { return <main><Suspense fallback={<div className="container-page py-20 text-sm text-slate-500">Loading properties…</div>}><PropertyExplorer /></Suspense></main>; }
