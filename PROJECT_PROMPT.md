# Cosmic Voyage - Project Explanation Prompt

## Project Overview
I'm working on "Cosmic Voyage," an interactive educational website that takes users on a journey through our solar system with a nostalgic Windows 98 aesthetic. The project combines space education with retro computing nostalgia.

## Tech Stack
- **Frontend**: HTML5, CSS3, Vanilla JavaScript
- **Styling**: Custom CSS + 98.css library for Windows 98 UI components
- **Assets**: GIF animations, PNG images, custom fonts (Pixelify Sans, VT323)
- **No frameworks**: Pure vanilla web technologies

## Project Structure
```
/
├── index.html          # Entry/landing page
├── main.html          # Main solar system journey
├── entry.css          # Landing page styles
├── cosmic.css         # Main application styles
├── script.js          # JavaScript functionality
├── config.yml         # Configuration file
└── Assets/            # Images, GIFs, icons
```

## Key Features

### 1. Entry Page (index.html)
- Animated space background with layered effects
- Single "Enter" button leading to main experience
- Multiple background layers: stars, nebula, shooting stars

### 2. Main Experience (main.html)
- **Windows 98 Desktop Simulation**: First section recreates desktop with icons
- **Horizontal Solar System Journey**: Each planet has its own section
- **Interactive Elements**: Clickable info windows, modal dialogs
- **Educational Content**: Detailed information about each celestial body

### 3. Windows 98 UI Elements
- Authentic taskbar with Start button and system tray
- Modal windows with title bars and control buttons
- Desktop icons that open themed dialogs
- Minimizable/maximizable information panels

### 4. Planetary Sections
Each planet section includes:
- Animated GIF of the planet
- Collapsible information window with:
  - Discovery history
  - Physical characteristics
  - Notable features
  - Fun facts
  - "Explore More" links

## Technical Implementation

### CSS Architecture (cosmic.css)
- Multiple background layers for space effects
- Windows 98 UI recreation (buttons, windows, panels)
- Responsive flexbox layout
- Custom cursor (space glove)
- Section-specific styling for each planet

### JavaScript Functionality
- `toggleWindow(windowId)`: Minimize/maximize windows
- `openModal(modalId)`: Show modal dialogs
- `closeModal(modalId)`: Hide modal dialogs
- Page navigation and transitions

### Visual Design
- **Color Scheme**: Deep space colors (purples, blues) with bright accents
- **Animations**: Rotating planets, twinkling stars, shooting stars
- **Typography**: Retro pixel fonts for authentic feel
- **Layout**: Horizontal scrolling journey through solar system

## User Flow
1. **Entry Page**: Animated landing with "Enter" button
2. **Desktop**: Windows 98 desktop with interactive icons
3. **Solar Journey**: Scroll horizontally through planets
4. **Exploration**: Click planet info windows to learn
5. **Navigation**: Use taskbar or continue scrolling

## Current Challenges/Areas for Improvement
- File organization and asset management
- Performance optimization for animations
- Mobile responsiveness
- Cross-browser compatibility
- Code modularity and maintainability

## Educational Content
Each planet includes comprehensive information about:
- Discovery details (who, when, where)
- Physical properties (mass, density, volume, etc.)
- Unique characteristics and features
- Interesting facts and trivia
- Links to additional resources

## Special Features
- **Asteroid Belt Section**: Unique layout with corner animations
- **Custom Cursor**: Space-themed pointer throughout
- **Authentic Windows 98 Styling**: Pixel-perfect recreation
- **Layered Animations**: Multiple background effects for depth
- **Interactive Desktop**: Functional Windows 98 desktop simulation

When helping me with this project, please consider:
- The retro Windows 98 aesthetic should be maintained
- Educational content accuracy is important
- Performance with multiple GIF animations
- Code organization and maintainability
- Cross-browser compatibility
- Mobile responsiveness while keeping the desktop feel

The project aims to be both nostalgic and educational, creating an engaging way to learn about our solar system through familiar retro computing interfaces.