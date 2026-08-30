import type { Metadata } from "next";
import { AgentCard } from "@/components/agent/AgentCard";
import { agents } from "@/data/agents";
export const metadata: Metadata = { title: "Our Agents", description: "Meet the HomeLand specialists helping clients understand listings and plan their next move." };
export default function AgentsPage() { return <main><section className="border-b border-slate-200 bg-white"><div className="container-page py-14 sm:py-20"><p className="eyebrow">The HomeLand team</p><h1 className="font-display mt-3 text-4xl font-bold text-[#071A2F] sm:text-5xl">Our Agents</h1><p className="prose-copy mt-5 max-w-2xl">Meet the property specialists helping clients understand listings, compare options, and plan their next move.</p></div></section><section className="container-page py-12 sm:py-16"><div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">{agents.map((agent, index) => <AgentCard key={agent.id} agent={agent} eager={index === 0} />)}</div></section></main>; }
