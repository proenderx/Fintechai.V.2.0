
# FinTech AI Agent

FinTech AI Agent is a modern, full-stack web application built with Next.js, React, Tailwind CSS, and Firebase. It helps users—including gig workers, exporters, and students—make smarter financial decisions through three main AI-driven modules:

## Modules

1. **Export Advisor**
	- Find the best countries to export goods after trade restrictions or tariffs.
	- Simulates alternative markets and suggests countries with low taxes and good trading relations with India.
	- Input: Product type, current export destination, product price.
	- Output: Recommended countries with simulated profit margins.

2. **Investment & Market Insights**
	- Live trading chart (TradingView widget).
	- Simulated technical indicators (RSI, Bollinger Bands).
	- Daily AI/logic market insights (simulated).
	- Investment calculator for profit/loss simulation.

3. **Personal Money Management**
	- Input your role and recurring expenses (rent, bills, EMI, groceries, etc.).
	- Dynamic expense list.
	- Simulated AI suggestions for savings and better allocation.

## Features

- Firebase Authentication (login/signup)
- Dashboard with navigation cards for each module
- Responsive, modern UI (white, grey, purple theme)
- Clean, expandable codebase
- All AI/logic is simulated for demo purposes

## Getting Started

1. Install dependencies:
	```bash
	npm install
	```
2. Run the development server:
	```bash
	npm run dev
	```
3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Folder Structure

- `/app` — Next.js App Router pages and components
- `/app/components` — Reusable UI components
- `/public` — Static assets

## Customization

You can expand each module, connect to real APIs, or enhance the UI as needed. Firebase integration is ready for Auth and Firestore.

---
This project was generated and scaffolded automatically for rapid prototyping and demonstration purposes.
