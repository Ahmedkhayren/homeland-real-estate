"use client";

import { FormEvent, useState } from "react";

type FieldProps = {
  label: string;
  name: string;
  type?: string;
  placeholder?: string;
  required?: boolean;
  children?: React.ReactNode;
};

function Field({ label, name, type = "text", placeholder, required = true, children }: FieldProps) {
  return <label className="block"><span className="label">{label}{required && <span className="ml-0.5 text-[#C99545]">*</span>}</span>{children ?? <input className="input" name={name} type={type} placeholder={placeholder} required={required} />}</label>;
}

function FormStatus({ title, description }: { title: string; description?: string }) {
  return <div role="status" className="mt-4 border-l-2 border-[#C99545] bg-[#FDF9F3] p-3"><p className="text-sm font-bold text-[#071A2F]">{title}</p>{description && <p className="mt-1 text-xs leading-5 text-slate-600">{description}</p>}</div>;
}

export function ContactForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  };

  return <form onSubmit={submit} className="border border-slate-200 bg-white p-6 sm:p-8">
    <h2 className="font-display text-2xl font-bold text-[#071A2F]">Send a message</h2>
    <div className="mt-6 grid gap-4 sm:grid-cols-2">
      <Field label="Full Name" name="name" placeholder="Your name" />
      <Field label="Email Address" name="email" type="email" placeholder="you@example.com" />
      <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" required={false} />
      <Field label="Subject" name="subject" placeholder="How can we help?" />
    </div>
    <div className="mt-4"><Field label="Message" name="message"><textarea className="input min-h-32 resize-y" name="message" placeholder="Tell us a little about what you are looking for" required /></Field></div>
    <button className="btn-primary mt-5 w-full" type="submit">Send Message</button>
    <p className="mt-3 text-center text-[11px] text-slate-400">Portfolio demo — messages are not delivered.</p>
    {sent && <FormStatus title="Message received" description="This demonstration form does not send real messages." />}
  </form>;
}

export function ListPropertyForm() {
  const [sent, setSent] = useState(false);
  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!event.currentTarget.checkValidity()) return;
    setSent(true);
    event.currentTarget.reset();
  };

  return <form onSubmit={submit} className="border border-slate-200 bg-white p-6 sm:p-8">
    <div className="grid gap-4 sm:grid-cols-2">
      <Field label="Full Name" name="name" placeholder="Your name" />
      <Field label="Email" name="email" type="email" placeholder="you@example.com" />
      <Field label="Phone" name="phone" type="tel" placeholder="Your phone number" />
      <Field label="Property Address" name="address" placeholder="Street address" />
      <Field label="City" name="city" placeholder="City" />
      <Field label="Property Type" name="type"><select className="input" name="type" required><option value="">Select a type</option><option>House</option><option>Apartment</option><option>Villa</option><option>Townhouse</option><option>Commercial</option></select></Field>
      <Field label="Listing Goal" name="goal"><select className="input" name="goal" required><option value="">Select a goal</option><option>Sell</option><option>Rent</option></select></Field>
      <Field label="Expected Price" name="price" placeholder="e.g. $750,000" />
      <Field label="Bedrooms" name="bedrooms"><select className="input" name="bedrooms" required><option value="">Select</option>{[1, 2, 3, 4, 5, 6].map((number) => <option key={number}>{number}{number === 6 ? "+" : ""}</option>)}</select></Field>
      <Field label="Bathrooms" name="bathrooms"><select className="input" name="bathrooms" required><option value="">Select</option>{[1, 2, 3, 4, 5].map((number) => <option key={number}>{number}{number === 5 ? "+" : ""}</option>)}</select></Field>
      <Field label="Approximate Area" name="area" placeholder="e.g. 2,100 ft²" />
    </div>
    <div className="mt-4"><Field label="Property Description" name="description" required={false}><textarea className="input min-h-32 resize-y" name="description" placeholder="Share a few details about your property" /></Field></div>
    <button className="btn-primary mt-6 w-full" type="submit">Request Listing Review</button>
    {sent && <FormStatus title="Listing request received" />}
  </form>;
}
