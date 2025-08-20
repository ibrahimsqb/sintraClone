# Sintra AI Clone

A React TypeScript clone of the Sintra.ai website with Tailwind CSS styling.

## Features

- **Tailwind CSS**: Modern utility-first CSS framework for styling
- **Responsive Design**: Mobile-first responsive layout
- **Interactive Components**: 
  - Header with mobile navigation
  - Hero section with video background
  - Lore section with Lottie animations
  - Helpers section with Swiper slider
- **Smooth Scrolling**: GSAP-powered smooth scrolling between sections

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS
- Swiper (for carousel/slider)
- Lottie Web (for animations)
- GSAP (for smooth scrolling)

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/
│   ├── Header.tsx          # Navigation header with mobile menu
│   ├── HomeHero.tsx        # Hero section with video background
│   ├── HomeLore.tsx        # Lore section with image and Lottie
│   ├── HomeHelpers.tsx     # Helpers section with Swiper slider
│   └── ScrollManager.tsx   # GSAP smooth scrolling functionality
├── assets/
│   └── LoreBot.jpg         # Lore section image
├── App.tsx                 # Main app component
├── index.css              # Tailwind CSS and custom styles
└── main.tsx               # App entry point
```

## Tailwind CSS Configuration

The project uses Tailwind CSS with custom configuration:

- **Custom Colors**: sintra-dark, sintra-light, sintra-gray, sintra-blue
- **Custom Font Sizes**: 7xl, 8xl for large headings
- **Custom Spacing**: Additional spacing utilities
- **Responsive Design**: Mobile-first approach with breakpoints

## Component Styling

All components have been converted from custom CSS classes to Tailwind utility classes:

- **Header**: Fixed positioning, transparent background, mobile hamburger menu
- **HomeHero**: Full-screen video background with overlay and centered content
- **HomeLore**: Dark background with image and Lottie animation overlay
- **HomeHelpers**: Slider with navigation arrows and gradient curtains

## Dependencies

- `tailwindcss`: CSS framework
- `swiper`: Touch slider with hardware accelerated transitions
- `lottie-web`: Lottie animation player
- `gsap`: Professional animation library for smooth scrolling

## Development

The project uses Vite for fast development and building. All styling is handled through Tailwind CSS utility classes, making it easy to modify and maintain.
