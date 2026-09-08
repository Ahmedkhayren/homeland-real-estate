# Homeland Real Estate

A modern, responsive real estate property platform built with Next.js, React, and TypeScript.

Homeland is a portfolio project designed to demonstrate property browsing, dynamic property pages, agent profiles, responsive UI development, and production deployment.

🌐 **Live Demo:** https://homeland-real-estate-sage.vercel.app/

## Overview

Homeland provides a clean real estate browsing experience for users looking for properties, agents, and property-related services.

The project focuses on modern presentation, reusable components, responsive layouts, and dynamic content pages built with Next.js.

## Features

- Responsive desktop, tablet, and mobile layouts
- Property listings
- Individual property detail pages
- Real estate agent directory
- Individual agent profile pages
- Property listing form/interface
- Services page
- About page
- Contact page
- Dynamic routes
- Static generation for property and agent pages
- Reusable React components
- Production deployment on Vercel

## Tech Stack

- Next.js
- React
- TypeScript
- Modern CSS
- Vercel
- Git & GitHub

## Application Routes

The project includes:

- `/` — Homepage
- `/properties` — Property listings
- `/properties/[slug]` — Property details
- `/agents` — Agent directory
- `/agents/[slug]` — Agent profiles
- `/list-property` — Property listing page
- `/services` — Services
- `/about` — About
- `/contact` — Contact

## Dynamic Content

Homeland uses dynamic routes for property and agent pages.

Examples:

```text
/properties/modern-family-house
/properties/skyline-loft-apartment
/agents/james-wilson
/agents/sarah-johnson
```

Next.js static generation is used for these dynamic pages to provide fast page loading and production-ready routing.

## Local Development

Clone the repository:

```bash
git clone https://github.com/Ahmedkhayren/homeland-real-estate.git
cd homeland-real-estate
```

Install dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Open:

```text
http://localhost:3000
```

## Production Build

Create an optimized production build:

```bash
npm run build
```

The project has been successfully tested with:

- Production Next.js build
- TypeScript checks
- ESLint
- Dependency security audit

## Deployment

Homeland is deployed with Vercel.

**Live Site:**  
https://homeland-real-estate-sage.vercel.app/

## Project Purpose

Homeland was created as a portfolio project to demonstrate:

- Next.js and React development
- TypeScript
- Dynamic routing
- Static generation
- Responsive real estate interfaces
- Property-focused UI development
- Reusable component architecture
- Production deployment
- Git and GitHub workflows

## Security & Quality

Before public release, the project was checked for:

- Accidentally committed environment files
- Secret or credential files
- Dependency vulnerabilities
- Production build errors
- TypeScript errors
- ESLint errors

The current dependency audit reports no known vulnerabilities.

## Author

**Ahmed Yasin**

Full-Stack Web Developer focused on Next.js, React, TypeScript, SaaS applications, and modern responsive websites.

**Upwork:**  
https://www.upwork.com/freelancers/~01200b5066e1768082

## License

This project is intended for portfolio and demonstration purposes.
