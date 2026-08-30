import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, BarChart3, Building2, KeyRound, Landmark, SearchCheck, Settings2 } from "lucide-react";

export const metadata: Metadata = { title: "Our Services", description: "Practical property services for buyers, renters, owners, and investors." };

const services = [
  [KeyRound, "Buy a Property", "Find a home with a clear view of the details, location, and features that matter most."],
  [Building2, "Sell a Property", "Present your property thoughtfully and receive guidance on preparing it for market."],
  [Landmark, "Rent a Property", "Explore rental homes and apartments that fit your preferred area, space, and lifestyle."],
  [Settings2, "Property Management", "Keep day-to-day property care, tenant needs, and maintenance coordination on track."],
  [SearchCheck, "Investment Guidance", "Compare potential opportunities with practical property and location information."],
  [BarChart3, "Market Research", "Use current market context to make more informed property decisions."],
];

export default function ServicesPage() {
  return <main>
    <section className="bg-white"><div className="container-page py-14 text-center sm:py-20"><p className="eyebrow">What we do</p><h1 className="font-display mt-3 text-4xl font-bold text-[#071A2F] sm:text-5xl">Our Services</h1><p className="prose-copy mx-auto mt-5 max-w-xl">Practical property services for buyers, renters, owners, and investors.</p></div></section>
    <section className="container-page py-12 sm:py-16"><div className="grid gap-px overflow-hidden border border-slate-200 bg-slate-200 md:grid-cols-2 lg:grid-cols-3">{services.map(([Icon, title, copy]) => { const Lucide = Icon as typeof KeyRound; return <article className="bg-white p-7" key={title as string}><Lucide size={24} className="text-[#C99545]" /><h2 className="mt-5 text-base font-bold text-[#071A2F]">{title as string}</h2><p className="mt-3 text-sm leading-6 text-slate-500">{copy as string}</p></article>; })}</div></section>
    <section className="bg-[#071A2F] py-14 text-white sm:py-20"><div className="container-page grid gap-10 lg:grid-cols-[.7fr_1.3fr]"><div><p className="eyebrow !text-[#E6BE7C]">A clear process</p><h2 className="font-display mt-3 text-3xl font-bold">From search to next step.</h2></div><ol className="grid gap-6 sm:grid-cols-2">{["Tell us what you need", "Explore suitable properties", "Schedule viewings", "Move forward with confidence"].map((step, index) => <li key={step} className="border-t border-slate-600 pt-4"><span className="font-display text-2xl text-[#C99545]">0{index + 1}</span><p className="mt-2 text-sm font-bold">{step}</p></li>)}</ol></div></section>
    <section className="container-page py-16 text-center"><h2 className="font-display text-3xl font-bold text-[#071A2F]">Start exploring thoughtfully.</h2><Link href="/properties" className="btn-primary mt-6">Explore Properties <ArrowRight size={15} /></Link></section>
  </main>;
}
