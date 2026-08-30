export type ListingType = "For Sale" | "For Rent";
export type PropertyType = "House" | "Apartment" | "Villa" | "Townhouse" | "Commercial";

export type Property = {
  id: string;
  slug: string;
  title: string;
  location: string;
  city: string;
  propertyType: PropertyType;
  listingType: ListingType;
  price: number;
  priceLabel: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  yearBuilt: number;
  parking: number;
  description: string;
  features: string[];
  images: string[];
  featured: boolean;
  agentId: string;
  createdAt: string;
};
