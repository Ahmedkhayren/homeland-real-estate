"use client";

import Image from "next/image";
import Link from "next/link";
import { Bath, BedDouble, Heart, Home, Maximize, MapPin } from "lucide-react";
import { useEffect, useState } from "react";
import { Property } from "@/types/property";

export function PropertyCard({ property, eager = false }: { property: Property; eager?: boolean }) {
  const [saved, setSaved] = useState(false);
  const [imageUnavailable, setImageUnavailable] = useState(false);

  useEffect(() => {
    const key = "homeland-favorites";
    const updateSaved = () => {
      const favorites = JSON.parse(window.localStorage.getItem(key) ?? "[]") as string[];
      setSaved(favorites.includes(property.id));
    };
    updateSaved();
    window.addEventListener("storage", updateSaved);
    window.addEventListener("homeland-favorites-changed", updateSaved);
    return () => {
      window.removeEventListener("storage", updateSaved);
      window.removeEventListener("homeland-favorites-changed", updateSaved);
    };
  }, [property.id]);

  const toggleSaved = () => {
    const key = "homeland-favorites";
    const favorites = JSON.parse(window.localStorage.getItem(key) ?? "[]") as string[];
    const next = favorites.includes(property.id) ? favorites.filter((id) => id !== property.id) : [...favorites, property.id];
    window.localStorage.setItem(key, JSON.stringify(next));
    setSaved(next.includes(property.id));
    window.dispatchEvent(new Event("homeland-favorites-changed"));
  };

  return <article className="group overflow-hidden rounded-md border border-slate-200 bg-white shadow-[0_2px_10px_rgb(15_23_42/.03)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_12px_28px_rgb(15_23_42/.1)]"><Link href={`/properties/${property.slug}`} className="block"><div className="relative aspect-[1.5] overflow-hidden">{imageUnavailable ? <ImageFallback title={property.title} /> : <Image loading={eager ? "eager" : "lazy"} onError={() => setImageUnavailable(true)} src={property.images[0]} alt={property.title} fill sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw" className="object-cover transition duration-500 group-hover:scale-105" />}<span className={`absolute left-3 top-3 rounded-sm px-2.5 py-1 text-[10px] font-bold text-white ${property.listingType === "For Rent" ? "bg-[#C99545]" : "bg-[#071A2F]"}`}>{property.listingType}</span></div></Link><div className="relative p-4"><button onClick={toggleSaved} type="button" aria-label={saved ? "Remove from saved properties" : "Save property"} aria-pressed={saved} className="absolute -top-9 right-3 grid size-7 place-items-center rounded-full bg-white text-[#071A2F] shadow-sm"><Heart size={15} className={saved ? "fill-[#C99545] text-[#C99545]" : ""} /></button><Link href={`/properties/${property.slug}`} className="block"><p className="text-base font-extrabold text-[#071A2F]">{property.priceLabel}</p><h3 className="mt-2 text-sm font-bold text-slate-800 transition group-hover:text-[#C99545]">{property.title}</h3><p className="mt-1 flex items-center gap-1 text-[11px] text-slate-500"><MapPin size={12} />{property.location}, {property.city}</p><div className="mt-4 flex border-t border-slate-100 pt-3 text-[11px] text-slate-500"><span className="flex items-center gap-1 pr-3"><BedDouble size={13} />{property.bedrooms || "—"} Beds</span><span className="flex items-center gap-1 border-l border-slate-200 px-3"><Bath size={13} />{property.bathrooms} Baths</span><span className="flex items-center gap-1 border-l border-slate-200 pl-3"><Maximize size={13} />{property.area.toLocaleString()} ft²</span></div></Link></div></article>;
}

function ImageFallback({ title }: { title: string }) {
  return <div className="absolute inset-0 grid place-items-center bg-[#EAF0F5] text-center text-[#071A2F]" role="img" aria-label={`${title} image unavailable`}><span><Home className="mx-auto text-[#C99545]" size={24} /><span className="mt-2 block text-[10px] font-bold uppercase tracking-[.12em]">Property image</span></span></div>;
}
