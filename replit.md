# FinTech AI Agent

## Overview

FinTech AI Agent is a Next.js-based financial intelligence platform designed to help users make smarter financial decisions through AI-driven insights. The application serves three primary user segments: gig workers, exporters, and students, providing them with tools for export analysis, market insights, and personal money management.

The platform consists of three core modules:
1. **Export Advisor** - Analyzes alternative export markets and provides country recommendations
2. **Investment & Market Insights** - Displays live trading charts with technical indicators and profit calculators
3. **Personal Money Management** - Tracks expenses and provides personalized savings recommendations

## User Preferences

Preferred communication style: Simple, everyday language.

## System Architecture

### Frontend Architecture

**Framework:** Next.js 15.5.4 with React 19
- Uses the Pages Router architecture (not App Router)
- Client-side rendering for authenticated pages with route protection
- Path aliasing configured via `jsconfig.json` using `@/*` for `/src/*` imports

**Styling System:**
- Tailwind CSS 4.1.14 as the primary styling framework
- PostCSS with Autoprefixer for cross-browser compatibility
- Custom gradient color scheme: white, grey, and purple palette
- Purple primary color scale (50-900) for brand consistency
- Global CSS utilities for reusable components (cards, buttons)

**Component Structure:**
- Layout wrapper component that handles navigation and authentication UI
- Shared components stored in `/src/components/`
- Page-level components in `/src/pages/` following Next.js conventions
- Dynamic imports used for client-only components (TradingChart)

**Data Visualization:**
- Recharts library for financial charts and trading visualizations
- LineChart component with custom styling matching the purple theme
- Responsive container implementation for mobile compatibility

### Authentication & Authorization

**Firebase Authentication:**
- Email/password authentication flow
- Context API-based auth state management (`AuthContext`)
- Protected routes using client-side auth checks in `useEffect` hooks
- Automatic redirection: unauthenticated users → login, authenticated users → dashboard
- Firebase Auth state persistence handled via `onAuthStateChanged` listener

**Route Protection Pattern:**
```javascript
useEffect(() => {
  if (!loading && !user) {
    router.push('/login');
  }
}, [user, loading, router]);
```

### Data Management

**State Management:**
- React Context API for global authentication state
- Local component state (useState) for module-specific data
- No external state management library (Redux, Zustand, etc.)

**Data Storage:**
- Firebase Firestore configured but not actively used in current implementation
- Simulated/mock data for all three modules (no live API integrations yet)
- Static country data, market indicators, and financial calculations stored in component state

**Data Flow:**
- User input → Local state update → Simulated processing → Display results
- No persistent storage of user financial data currently implemented

### Module Implementation Patterns

**Export Advisor:**
- Static country database with tax rates, trade relations, and profit margins
- Sorting algorithm to rank countries by estimated profit
- Simulated "AI analysis" with setTimeout to mimic processing time

**Market Insights:**
- Hardcoded technical indicators (RSI, Bollinger Bands)
- Static chart data with date/price/volume
- Profit calculator using historical price comparison
- No real-time data feeds or actual market APIs

**Money Management:**
- Dynamic expense list with add/remove functionality
- Client-side financial calculations (total expenses, savings rate, surplus)
- Rule-based advice generation without actual AI/ML models

### Responsive Design Strategy

- Mobile-first approach using Tailwind's responsive utilities
- Breakpoints: sm (640px), md (768px), lg (1024px)
- Gradient backgrounds and card-based layouts
- Hover effects and transitions for interactive elements

## External Dependencies

### Core Framework Dependencies
- **Next.js (^15.5.4):** React framework with file-based routing, SSR/SSG capabilities
- **React (^19.2.0) & React DOM (^19.2.0):** UI library and DOM rendering

### Firebase Services
- **Firebase (^12.4.0):** Backend-as-a-Service platform
  - **Firebase Auth:** User authentication (email/password)
  - **Firebase Firestore:** NoSQL database (configured but not utilized)
  - Configuration uses environment variables with fallback demo values

### Styling & UI
- **Tailwind CSS (^4.1.14):** Utility-first CSS framework
- **@tailwindcss/postcss (^4.1.14):** PostCSS plugin for Tailwind
- **Autoprefixer (^10.4.21):** CSS vendor prefixing
- **PostCSS (^8.5.6):** CSS transformation tool

### Data Visualization
- **Recharts (^3.2.1):** React charting library for financial data visualization

### Development Tools
- **@types/node (^22.13.11):** TypeScript definitions for Node.js APIs

### Environment Configuration
Firebase requires the following environment variables (with demo fallbacks):
- `NEXT_PUBLIC_FIREBASE_API_KEY`
- `NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`
- `NEXT_PUBLIC_FIREBASE_PROJECT_ID`
- `NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`
- `NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID`
- `NEXT_PUBLIC_FIREBASE_APP_ID`

### Notable Architectural Decisions

**Why Pages Router over App Router:**
- Project uses Next.js Pages Router despite Next.js 15 supporting App Router
- Simpler authentication flow with Context API
- More mature ecosystem for the chosen dependencies

**Why Mock Data:**
- Proof of concept implementation without live API costs
- Allows frontend development without backend dependencies
- Placeholder for future AI/ML service integration

**Why Firebase:**
- Rapid development with minimal backend configuration
- Built-in authentication and database
- Scalable infrastructure for future growth

**Design Trade-offs:**
- No server-side rendering for authenticated pages (client-side protection only)
- No data persistence for user calculations and analyses
- Simulated AI insights instead of actual machine learning models