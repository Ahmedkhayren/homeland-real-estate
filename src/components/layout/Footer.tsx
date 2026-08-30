import Link from "next/link";
import { AtSign, Camera, Mail, MapPin, Phone, ThumbsUp } from "lucide-react";
import { Brand } from "./Header";

export function Footer() {
  const quick = [["Home", "/"], ["Properties", "/properties"], ["Services", "/services"], ["Agents", "/agents"], ["About", "/about"], ["Contact", "/contact"]];
  return <footer className="bg-[#04111F] text-white">
    <div className="container-page grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1.25fr]">
      <div>
        <div className="[&_*]:text-white"><Brand /></div>
        <p className="mt-5 max-w-xs text-sm leading-6 text-slate-400">Thoughtful property search and clear guidance for your next move.</p>
        <div className="mt-5 flex gap-3">{[[AtSign, "LinkedIn"], [Camera, "Instagram"], [ThumbsUp, "Facebook"]].map(([Icon, label]) => { const SocialIcon = Icon as typeof AtSign; return <a href="#" key={label as string} aria-label={`${label} link`} className="grid size-8 place-items-center border border-slate-700 text-slate-300 transition hover:border-[#C99545] hover:text-[#C99545]"><SocialIcon size={15} /></a>; })}</div>
      </div>
      <FooterColumn title="Quick Links" items={quick} />
      <FooterColumn title="Property Types" items={[["Houses", "/properties?type=House"], ["Apartments", "/properties?type=Apartment"], ["Villas", "/properties?type=Villa"], ["Townhouses", "/properties?type=Townhouse"], ["Commercial", "/properties?type=Commercial"]]} />
      <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-white">Contact</h3><ul className="mt-5 space-y-3 text-sm text-slate-400"><li className="flex gap-2"><Phone size={15} className="shrink-0 text-[#C99545]" />+1 (555) 123-4567</li><li className="flex gap-2"><Mail size={15} className="shrink-0 text-[#C99545]" />info@homelandrealestate.com</li><li className="flex gap-2"><MapPin size={15} className="shrink-0 text-[#C99545]" />1728 Estate Avenue,<br />New York, NY 10001</li></ul></div>
    </div>
    <div className="border-t border-slate-800"><div className="container-page flex flex-col gap-3 py-5 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between"><div><p>© 2026 HomeLand Real Estate — Portfolio Demo</p><p className="mt-1 text-slate-600">Portfolio demonstration — property listings and contact details are sample content.</p></div><span className="flex gap-5"><a href="#">Privacy</a><a href="#">Terms</a></span></div></div>
  </footer>;
}

function FooterColumn({ title, items }: { title: string; items: string[][] }) {
  return <div><h3 className="text-xs font-bold uppercase tracking-[.15em] text-white">{title}</h3><ul className="mt-5 space-y-2.5">{items.map(([label, href]) => <li key={label}><Link href={href} className="text-sm text-slate-400 transition hover:text-[#C99545]">{label}</Link></li>)}</ul></div>;
}
