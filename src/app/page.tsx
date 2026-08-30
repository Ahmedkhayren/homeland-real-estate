import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Hero } from "@/components/home/Hero";
import { WhyAndSupport } from "@/components/home/ClientSupport";
import { PropertyCard } from "@/components/property/PropertyCard";
import { properties } from "@/data/properties";

export const metadata: Metadata = { title: "HomeLand Real Estate | Find Your Perfect Home", description: "Browse homes, apartments, rentals, and investment properties with HomeLand Real Estate." };

export default function HomePage() { const featured = properties.filter((property) => property.featured); return <main><Hero /><section className="container-page py-14 sm:py-20"><div className="flex flex-wrap items-end justify-between gap-4"><div><p className="eyebrow">Selected listings</p><h2 className="font-display mt-2 text-3xl font-bold text-[#071A2F]">Featured Properties</h2><p className="mt-3 text-sm text-slate-500">Explore a selection of homes and spaces chosen for modern living.</p></div><Link href="/properties" className="inline-flex items-center gap-2 text-xs font-bold text-[#C99545] hover:text-[#071A2F]">View All Properties <ArrowRight size={15} /></Link></div><div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{featured.map((property, index) => <PropertyCard key={property.id} property={property} eager={index === 0} />)}</div></section><WhyAndSupport /></main>; }
