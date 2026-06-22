# CineMatch | Smart Movie Recommendation & Watchlist Portal

CineMatch is a premium, client-side web application designed to help users bypass the endless scrolling of streaming catalogs and find the perfect movie instantly. By evaluating a user's current mood, preferred genre styles, ideal pacing, and era in real-time, the app uses a custom preference-matching algorithm to supply highly accurate recommendations.

---

## 🚀 Live Demo & Development

This project is configured as a modern npm package bundled with **Vite** for fast, optimized hot-module reloading and production compilation.

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) installed on your system.

### Running Locally
1. Clone or open the project folder in your terminal:
   ```bash
   cd "d:/Tcs Project"
   ```
2. Install the necessary development dependencies:
   ```bash
   npm install
   ```
3. Start the Vite local development server:
   ```bash
   npm run dev
   ```
4. Open the browser and visit the local port (usually `http://localhost:5173/`).

---

## 🛠️ Technology Stack

* **Structure**: Semantic HTML5 with SEO-optimized micro-data, meta description cards, and JSON-LD structured schema.
* **Styles**: Custom Vanilla CSS3 using custom properties (design tokens), glassmorphism, responsive flex/grid layouts, and sleek keyframe micro-animations.
* **Logic**: Vanilla ES6+ Javascript using clean modular organization, state management, and strict DOM element caching.
* **Bundler & Dev Server**: Vite (version 5).
* **Assets & Fonts**: Google Fonts (Inter, Outfit), FontAwesome icons, and curated images.

---

## 📦 Key Architecture & Features

### 1. Interactive Smart Finder (AI-Guided Quiz)
An intuitive, step-by-step interactive questionnaire mapping user mood, genre style, runtime availability, and preferred era.
* **The Matching Engine**: 
  Calculates dynamic similarity scores (up to 100%) against a 33-movie database based on weighted criteria:
  * **Mood Match**: 35% weight
  * **Genre Match**: 30% weight
  * **Runtime/Pace Match**: 20% weight
  * **Era Match**: 15% weight
* Returns the top 3 recommendations accompanied by dynamic natural-language reasoning explaining why the movies matched.

### 2. Search & Catalog Browser
A comprehensive search, filter, and sorting system utilizing instant client-side query matching:
* **Elastic Search**: Match query inputs against title, director, cast, or genres.
* **Quick Filters**: Dynamically filter catalog movies by specific genres in one click.
* **Sorting**: Organize cards by Rating (highest to lowest), Release Year (newest/oldest), or Alphabetical order.

### 3. Movie Details Modal & Simulated Teaser Player
An immersive, customized modal presenting extensive data points about chosen films.
* **Simulated Video Player**: Custom-built media player mockup simulating a real trailer streams. Includes:
  * Play / Pause button
  * Sound mute / unmute selector
  * Progress timeline bar with hover-scrubbing capabilities
  * Audio equalizer visualizer bars that bounce while the video is playing

### 4. Interactive Drawer Watchlist
* Save or remove movies from a custom personal watchlist.
* State persists between page visits using local storage (`localStorage`).
* Includes a simulated cloud database synchronization interface with toast notifications.

### 5. Client Authentication Modal
* Sleek tabbed container toggling between "Sign In" and "Create Account".
* Includes password visibility toggles (eye-slash / eye icons).
* Generates client-side user sessions and displays initials inside a circular navigation avatar.

---

## 📁 File Structure

```text
├── node_modules/           # Node packages (Vite development server)
├── app.js                  # App state, DB constants, DOM cache, & controller logic
├── index.html              # Main HTML structures, layouts, and modals
├── package.json            # Scripts and Vite configuration dependencies
├── style.css               # Global variables, themes, layouts, & transitions
└── README.md               # Project documentation (this file)
```
