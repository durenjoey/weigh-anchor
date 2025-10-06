# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
- `npm run dev` - Start development server with Turbopack
- `npm run build` - Build for production  
- `npm start` - Run production server
- `npm run lint` - Run ESLint

## High-Level Architecture

This is a Next.js 15 application with App Router showcasing professional services for remote construction and engineering projects.

### Key Architectural Decisions

1. **App Router Structure**: Pages live in `src/app/` using Next.js App Router conventions. Each page imports a shared `Header` component for consistent navigation.

2. **Component Organization**: 
   - shadcn/ui components in `src/components/ui/` follow the library's patterns
   - Custom components like `Header.tsx` and `MapboxMap.tsx` are in `src/components/`
   - Client components must be marked with `"use client"`

3. **Data Architecture**: Project data is centralized in `src/data/projects.ts` with helper functions for filtering and aggregation. No external data fetching or state management libraries are used.

4. **Styling System**: 
   - Tailwind CSS v4 with CSS variables for theming (no tailwind.config.js in v4)
   - Mission Control aesthetic with technical/military theming
   - Custom animations (pulse-glow, crosshair) defined in globals.css
   - Grid pattern background applied via root layout
   - Theme colors defined in `src/app/globals.css` using oklch color space

5. **Type Safety**: TypeScript in strict mode with path alias `@/*` for imports from `src/`

### Critical Files to Understand

- `src/app/layout.tsx` - Root layout with global styles, fonts (Geist Mono, Rajdhani, Orbitron), and grid pattern
- `src/app/globals.css` - Tailwind v4 theme configuration with Mission Control color palette and animations
- `src/components/Header.tsx` - Navigation component used across all pages with active state handling
- `src/data/projects.ts` - Central data store with 110+ projects and helper functions

### Development Patterns

When modifying this codebase:
- Use existing shadcn/ui components from `src/components/ui/` rather than creating new ones
- Follow the established color system (electric blue, signal orange, arctic white, deep charcoal)
- Maintain the technical/mission control aesthetic in new features
- Use TypeScript interfaces for all component props
- Keep client-side logic minimal - mark components with `"use client"` only when necessary
- Use Mapbox GL for map functionality via react-map-gl wrapper