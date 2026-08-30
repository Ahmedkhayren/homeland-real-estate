import type { Metadata } from "next";
import Image from "next/image";
import { Check, Compass, MessageCircleMore, ScanSearch, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About HomeLand",
  description: "Clear property guidance for buyers, renters, owners, and investors.",
};

const values = [
  [MessageCircleMore, "Clear Communication", "Practical guidance and helpful next steps at every stage."],
  [Compass, "Local Knowledge", "Context that makes neighborhoods, locations, and options easier to compare."],
  [ScanSearch, "Thoughtful Property Selection", "A considered approach to finding spaces that suit your priorities."],
  [Users, "Client-Focused Service", "Personal support for buyers, renters, owners, and investors."],
];

export default function AboutPage() {
  return <main>
    <section className="bg-[#071A2F] text-white">
      <div className="container-page py-12 sm:py-16">
        <p className="eyebrow !text-[#E6BE7C]">Our approach</p>
        <h1 className="font-display mt-3 max-w-2xl text-4xl font-bold sm:text-5xl">About HomeLand</h1>
        <p className="mt-5 max-w-xl text-sm leading-7 text-slate-300 sm:text-base">Clear property guidance for buyers, renters, owners, and investors.</p>
      </div>
    </section>

    <section className="container-page grid gap-10 py-14 sm:py-20 lg:grid-cols-2 lg:items-center">
      <div>
        <p className="eyebrow">Designed around your next move</p>
        <h2 className="font-display mt-3 text-3xl font-bold text-[#071A2F] sm:text-4xl">Property guidance built around clarity.</h2>
        <p className="prose-copy mt-5">Finding or listing a property involves many decisions. HomeLand brings property information, viewing coordination, and clear next steps into one straightforward experience.</p>
        <p className="prose-copy mt-4">Whether you&apos;re comparing homes, exploring a rental, preparing a property for market, or considering an investment, our approach keeps the important details easy to understand.</p>
        <ul className="mt-6 space-y-3 text-sm text-slate-600">
          {["Clear property information", "Straightforward communication", "Thoughtful property selection"].map((item) => <li key={item} className="flex gap-2"><Check size={17} className="text-[#C99545]" />{item}</li>)}
        </ul>
      </div>
      <div className="relative aspect-[1.07] overflow-hidden">
        <Image src="/images/properties/photo-1600607687920-4e2a09cf159d.jpg" alt="Calm modern living space" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" />
      </div>
    </section>

    <section className="bg-white">
      <div className="container-page py-14 sm:py-20">
        <p className="eyebrow">What guides the experience</p>
        <div className="mt-8 grid gap-7 md:grid-cols-2 lg:grid-cols-4">
          {values.map(([Icon, title, copy]) => {
            const Lucide = Icon as typeof Check;
            return <article key={title as string}><Lucide size={25} className="text-[#C99545]" /><h2 className="mt-4 text-sm font-bold text-[#071A2F]">{title as string}</h2><p className="mt-2 text-sm leading-6 text-slate-500">{copy as string}</p></article>;
          })}
        </div>
      </div>
    </section>

    <section className="bg-[#071A2F] text-white">
      <div className="container-page grid gap-6 py-14 sm:grid-cols-[1fr_auto] sm:items-center">
        <div><p className="eyebrow !text-[#E6BE7C]">A more thoughtful search</p><h2 className="font-display mt-3 text-3xl font-bold">Confidence begins with a clear next step.</h2></div>
        <p className="max-w-md text-sm leading-6 text-slate-300">Explore property details, compare the options that matter, and connect with a specialist when you&apos;re ready.</p>
      </div>
    </section>
  </main>;
}
