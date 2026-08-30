"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, Phone, X, Home } from "lucide-react";
import { useState } from "react";

const links = [
  ["Home", "/"], ["Properties", "/properties"], ["Services", "/services"], ["Agents", "/agents"], ["About", "/about"], ["Contact", "/contact"],
] as const;

export function Brand() {
  return <Link href="/" className="flex items-center gap-2 text-[#071A2F]" aria-label="HomeLand Real Estate home">
    <span className="grid size-9 place-items-center border border-[#C99545]/50 bg-[#FDF9F3] text-[#C99545]"><Home size={20} strokeWidth={1.8} /></span>
    <span className="leading-none"><span className="block font-display text-lg font-bold tracking-tight">HomeLand</span><span className="mt-1 block text-[8px] font-bold tracking-[.22em] text-slate-500">REAL ESTATE</span></span>
  </Link>;
}

export function Header() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const close = () => setOpen(false);
  return <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/95 backdrop-blur">
    <div className="container-page flex h-[4.8rem] items-center justify-between gap-6">
      <Brand />
      <nav className="hidden items-center gap-5 lg:flex" aria-label="Main navigation">
        {links.map(([label, href]) => <Link key={href} href={href} className={`text-[.72rem] font-semibold transition hover:text-[#C99545] ${pathname === href ? "text-[#C99545]" : "text-slate-700"}`}>{label}</Link>)}
      </nav>
      <div className="hidden items-center gap-4 lg:flex"><a href="tel:+15551234567" className="flex items-center gap-1.5 text-[.7rem] font-semibold text-slate-600 hover:text-[#C99545]"><Phone size={13} /> +1 (555) 123-4567</a><Link href="/list-property" className="btn-primary !px-3.5 !py-2.5">List Your Property</Link></div>
      <button type="button" onClick={() => setOpen(!open)} aria-label={open ? "Close navigation" : "Open navigation"} aria-expanded={open} className="grid size-10 place-items-center border border-slate-200 text-[#071A2F] lg:hidden">{open ? <X /> : <Menu />}</button>
    </div>
    {open && <div className="border-t border-slate-100 bg-white lg:hidden"><nav className="container-page flex flex-col py-3" aria-label="Mobile navigation">{links.map(([label, href]) => <Link onClick={close} key={href} href={href} className={`border-b border-slate-100 py-3 text-sm font-semibold ${pathname === href ? "text-[#C99545]" : "text-[#071A2F]"}`}>{label}</Link>)}<Link onClick={close} href="/list-property" className="btn-primary mt-4">List Your Property</Link></nav></div>}
  </header>;
}
