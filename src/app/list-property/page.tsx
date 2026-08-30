import type { Metadata } from "next";
import { FileSearch, Home, MessageSquareText } from "lucide-react";
import { ListPropertyForm } from "@/components/forms/DemoForms";

export const metadata: Metadata = { title: "List Your Property", description: "Start a property listing enquiry with HomeLand Real Estate." };

const steps = [
  [Home, "Tell us about your property", "Share the essentials so we can understand the space and its potential."],
  [FileSearch, "Set your listing goal", "Choose whether you would like to sell or rent your property."],
  [MessageSquareText, "Request a review", "We'll use your details to begin a more focused property conversation."],
];

export default function ListPropertyPage() {
  return <main>
    <section className="bg-[#071A2F] text-white"><div className="container-page py-14 sm:py-20"><p className="eyebrow !text-[#E6BE7C]">For property owners</p><h1 className="font-display mt-3 text-4xl font-bold sm:text-5xl">List Your Property</h1><p className="mt-5 max-w-xl text-sm leading-7 text-slate-300">Share a few details about your home, rental, or commercial space to start a clear property conversation.</p></div></section>
    <section className="container-page grid gap-10 py-12 sm:py-16 lg:grid-cols-[.75fr_1.25fr]">
      <div><h2 className="font-display text-3xl font-bold text-[#071A2F]">A clear first conversation.</h2><p className="prose-copy mt-4">The more we understand about your property and your goals, the more useful the next step can be.</p><div className="mt-8 space-y-6">{steps.map(([Icon, title, copy]) => { const Lucide = Icon as typeof Home; return <div className="flex gap-3" key={title as string}><Lucide size={20} className="mt-1 shrink-0 text-[#C99545]" /><div><h3 className="text-sm font-bold text-[#071A2F]">{title as string}</h3><p className="mt-1 text-sm leading-6 text-slate-500">{copy as string}</p></div></div>; })}</div></div>
      <ListPropertyForm />
    </section>
  </main>;
}
