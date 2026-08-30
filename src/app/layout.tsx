import type { Metadata } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

export const metadata: Metadata = {
  title: { default: "HomeLand Real Estate | Find Your Perfect Home", template: "%s | HomeLand Real Estate" },
  description: "Browse homes, apartments, rentals, and investment properties with HomeLand Real Estate.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><body><Header />{children}<Footer /></body></html>;
}
