import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { getProperty, properties } from "@/data/properties";
import { getAgent } from "@/data/agents";
import { PropertyDetail } from "@/components/property/PropertyDetail";

export function generateStaticParams() { return properties.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> { const property = getProperty((await params).slug); return { title: property ? property.title : "Property not found", description: property?.description }; }
export default async function PropertyPage({ params }: { params: Promise<{ slug: string }> }) { const property = getProperty((await params).slug); if (!property) notFound(); const agent = getAgent(property.agentId); if (!agent) notFound(); const related = properties.filter((candidate) => candidate.id !== property.id && (candidate.propertyType === property.propertyType || candidate.listingType === property.listingType)).slice(0, 3); return <PropertyDetail property={property} agent={agent} related={related} />; }
