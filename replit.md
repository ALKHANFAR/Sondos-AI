# Overview

This is a multi-page AI voice agent SaaS application built with React, TypeScript, and Vite. The application provides AI-powered phone call automation services for businesses, allowing them to handle customer support, appointment booking, lead qualification, and sales calls through intelligent voice agents. The platform features a modern web interface with multi-language support (8 languages including RTL for Arabic), comprehensive pricing plans, industry-specific solutions, and a white-label offering for partners.

# User Preferences

Preferred communication style: Simple, everyday language.

# System Architecture

## Frontend Architecture

- **React 18** with TypeScript for type safety and modern component development
- **Vite** as the build tool for fast development and optimized production builds
- **Wouter** for client-side routing instead of React Router for lightweight navigation
- **TailwindCSS** with custom design system using CSS variables for theming
- **Shadcn/ui** components with Radix UI primitives for accessible, customizable UI components
- **TanStack Query** (React Query) for server state management and API caching

## Styling and Design System

- Custom color palette with primary red (#ff453e) and secondary purple themes
- CSS variables for consistent theming across light/dark modes
- Responsive design with mobile-first approach using Tailwind's grid and flexbox utilities
- Custom shadows, gradients, and blur effects for modern visual appeal
- SVG-based icons and illustrations instead of external images for performance

## Internationalization (i18n)

- Multi-language support for 8 locales: English, Arabic, Spanish, French, German, Turkish, Chinese, Portuguese
- Custom i18n implementation with locale detection and storage in localStorage
- RTL (Right-to-Left) support specifically for Arabic language
- Dynamic font loading with Google Fonts for different language families

## Component Architecture

- Modular component structure with separation of concerns
- Reusable UI components (Button, Badge, Container, Section) for consistency
- Feature-specific components (Hero, DemoCallForm, PricingTable, etc.)
- Custom hooks for language management and mobile detection
- Layout component for consistent header/footer structure

## State Management

- React hooks (useState, useEffect) for local component state
- Custom useLanguage hook for global language state with localStorage persistence
- TanStack Query for server state and API response caching
- Toast notifications using custom toast hook and Radix UI primitives

## Backend Architecture

- **Express.js** server with TypeScript for API endpoints
- **Drizzle ORM** with PostgreSQL dialect for database operations
- **Neon Database** serverless PostgreSQL for cloud database hosting
- Modular route handling with separation of concerns
- In-memory storage implementation for development (MemStorage class)

## Database Design

- User management with username/password authentication schema
- PostgreSQL with UUID primary keys for scalability
- Drizzle schema definitions with Zod validation for type safety
- Migration system using Drizzle Kit for database version control

## Development Workflow

- Hot module replacement (HMR) with Vite for fast development
- TypeScript strict mode for enhanced type checking
- ESM (ES Modules) throughout the application for modern JavaScript
- Path aliases for clean imports (@/, @shared/, @assets/)

## Performance Optimizations

- Code splitting with dynamic imports for better initial load times
- Lazy loading of non-critical components
- Optimized font loading with preconnect hints
- SVG sprites and inline SVGs for minimal HTTP requests
- CSS-in-JS avoided in favor of utility-first CSS for better performance

# External Dependencies

## Core Framework Dependencies

- **React 18** - Frontend framework for component-based UI development
- **Vite** - Build tool and development server for fast builds and HMR
- **TypeScript** - Static type checking for enhanced developer experience
- **Express.js** - Node.js web framework for API server

## UI and Styling

- **TailwindCSS** - Utility-first CSS framework for rapid UI development
- **Radix UI** - Unstyled, accessible UI primitives (@radix-ui/react-\*)
- **Lucide React** - Modern icon library with consistent SVG icons
- **class-variance-authority** - Utility for creating variant-based component APIs
- **clsx** - Utility for constructing className strings conditionally

## Database and ORM

- **Drizzle ORM** - TypeScript ORM for PostgreSQL with excellent type safety
- **Neon Database Serverless** - Cloud-native PostgreSQL database (@neondatabase/serverless)
- **Drizzle Zod** - Schema validation integration between Drizzle and Zod
- **connect-pg-simple** - PostgreSQL session store for Express sessions

## State Management and API

- **TanStack React Query** - Server state management and data fetching
- **React Hook Form** - Performant forms with minimal re-renders
- **@hookform/resolvers** - Validation resolvers for React Hook Form

## Development Tools

- **Wouter** - Minimalist routing library for React applications
- **date-fns** - Modern date utility library for JavaScript
- **nanoid** - Tiny, secure URL-friendly unique string ID generator

## Fonts and Typography

- **Google Fonts** - Inter for Latin scripts, Cairo/Tajawal for Arabic text
- Custom font loading optimization with preconnect and display=swap

## Build and Deployment

- **esbuild** - Fast JavaScript bundler for production server builds
- **PostCSS** - CSS processing with autoprefixer for vendor prefixes
- **tsx** - TypeScript execution for development server

## Quality and Performance

- **Zod** - Runtime type validation for API responses and forms
- **@jridgewell/trace-mapping** - Source map utilities for debugging
- Service worker ready for offline functionality (PWA capabilities)
