# Mini RPG Game

A modern 8-bit styled tile-based RPG movement engine built with React, TypeScript, and Styled-Components.

## 🚀 Features

- **Responsive Grid Engine**: The map and character scale proportionally across all screen sizes (Desktop, Tablet, Mobile).
- **Sprite Animation System**: Real-time sprite direction switching (Up, Down, Left, Right) based on movement.
- **Hybrid Controls**:
  - **Keyboard**: Full support for Arrow keys and WASD.
  - **Virtual D-Pad**: A modern 8-bit styled on-screen controller for mobile and touch devices.
- **Collision Detection**: Tile-based validation system that prevents movement into restricted areas.
- **Retro Aesthetics**: Custom styled-components providing a "classic handheld console" feel with polished borders and box-shadows.

## 🛠️ Built With

- **React 19**: Modern UI component architecture.
- **TypeScript**: Robust type safety for movement logic and side-mapping.
- **Styled-Components**: Fully scoped and dynamic CSS-in-JS.
- **Lucide Icons**: High-quality icons for the mobile controller.

## 📦 Project Structure

```bash
src/
├── components/
│   ├── Character/       # Character rendering and Sprite logic
│   ├── Controller/      # Mobile D-Pad UI
│   └── hooks/           # Custom hook for movement state (useCharacter)
├── data/
│   └── mapSpots.ts      # Grid-based map collision data
├── types/
│   └── CharacterSides.ts# Type definitions for movement directions
├── App.tsx              # Main game layout and keyboard listeners
└── App.styles.ts        # Global layout and Map styling
```

## 🏁 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v16 or higher recommended)
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/YujiSeto/mini-rpg-game.git
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm start
   ```

The game will be available at `http://localhost:3000`.

## 🕹️ How to Play

- **On Desktop**: Use the **Arrow Keys** or **W, A, S, D** to move the character. You can also click the on-screen D-Pad.
- **On Mobile**: Use the on-screen **D-Pad** (Directional Pad) to move the character. The layout will adapt automatically to your screen size.
