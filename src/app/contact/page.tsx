import type { Metadata } from "next";
import { Clock3, Mail, MapPin, Phone } from "lucide-react";
import { ContactForm } from "@/components/forms/DemoForms";

export const metadata: Metadata = { title: "Contact", description: "Contact HomeLand Real Estate to discuss a property or plan a viewing." };

export default function ContactPage() {
  return <main>
    <section className="container-page py-14 sm:py-20">
      <div className="grid gap-10 lg:grid-cols-[.85fr_1.15fr]">
        <div>
          <p className="eyebrow">Get in touch</p>
          <h1 className="font-display mt-3 text-4xl font-bold text-[#071A2F] sm:text-5xl">Let&apos;s talk property.</h1>
          <p className="prose-copy mt-5">Have a question about a property or want to plan a viewing? Send us a message and we&apos;ll help you understand the next step.</p>
          <div className="mt-8 space-y-5 text-sm text-slate-600">
            <Info icon={Phone} title="Phone" text="+1 (555) 123-4567" />
            <Info icon={Mail} title="Email" text="info@homelandrealestate.com" />
            <Info icon={MapPin} title="Office" text="1728 Estate Avenue, New York, NY 10001" />
            <Info icon={Clock3} title="Hours" text="Mon–Fri · 9:00 AM–5:30 PM" />
          </div>
        </div>
        <ContactForm />
      </div>
    </section>
    <OfficeMap />
  </main>;
}

function Info({ icon: Icon, title, text }: { icon: typeof Phone; title: string; text: string }) {
  return <div className="flex gap-3"><Icon size={19} className="mt-0.5 shrink-0 text-[#C99545]" /><div><strong className="block text-xs text-[#071A2F]">{title}</strong><span className="mt-1 block leading-5">{text}</span></div></div>;
}

function OfficeMap() {
  return <section className="border-y border-slate-200 bg-white py-12 sm:py-16">
    <div className="container-page grid gap-8 lg:grid-cols-[.72fr_1.28fr] lg:items-center">
      <div><p className="eyebrow">Our location</p><h2 className="font-display mt-3 text-3xl font-bold text-[#071A2F]">Visit our office</h2><p className="mt-4 text-sm leading-6 text-slate-500">New York, NY<br />1728 Estate Avenue</p></div>
      <div className="relative min-h-72 overflow-hidden border border-slate-200 bg-[#EEF2F3] sm:min-h-80">
        <div className="absolute inset-0 opacity-70 [background-image:linear-gradient(#d5dde1_1px,transparent_1px),linear-gradient(90deg,#d5dde1_1px,transparent_1px)] [background-size:42px_42px]" />
        <div className="absolute -left-10 top-16 h-9 w-[120%] -rotate-6 border-y border-white bg-[#f8fafb] shadow-sm" />
        <div className="absolute -left-10 bottom-20 h-12 w-[120%] rotate-12 border-y border-white bg-[#f8fafb] shadow-sm" />
        <div className="absolute left-[28%] top-[-10%] h-[120%] w-9 rotate-[18deg] border-x border-white bg-[#f8fafb] shadow-sm" />
        <div className="absolute left-1/2 top-1/2 z-10 -translate-x-1/2 -translate-y-1/2 text-center">
          <span className="grid size-12 place-items-center rounded-full bg-[#071A2F] text-white shadow-[0_8px_20px_rgb(7_26_47/.25)]"><MapPin size={23} /></span>
          <div className="mt-3 whitespace-nowrap border border-[#C99545]/30 bg-white px-3 py-2 text-left shadow-sm"><strong className="block text-xs text-[#071A2F]">HomeLand Real Estate</strong><span className="mt-0.5 block text-[10px] text-slate-500">1728 Estate Avenue</span></div>
        </div>
        <span className="absolute bottom-5 left-5 text-[10px] font-bold uppercase tracking-[.14em] text-slate-400">New York · Midtown</span>
      </div>
    </div>
  </section>;
}
