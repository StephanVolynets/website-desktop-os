# Interactive Desktop Project

## Overview
This project is a modern, interactive desktop-like experience designed for web browsers. It features drag-and-drop functionality, selection boxes, customizable gradients, context-sensitive menus, and window management. The project has been heavily inspired by Dustin Brett's daedalOS, leveraging modern web technologies to create a fluid and dynamic user interface.

---

## Features

### **Core Functionality**:
- **Draggable Icons and Windows**: Fully customizable and draggable UI elements with layered z-index management for priority handling.
- **Selection Box**: Highlight and select multiple icons with a drag-and-select interaction.
- **Dynamic Context Menus**: Context-sensitive right-click menus tailored to files, folders, and desktop environments.
- **Customizable Background**: Gradients and wallpapers for a personalized desktop appearance.
- **Window Management**:
  - Open, close, and minimize windows.
  - Persistent window states.
  - Focus handling to bring specific windows to the foreground.

### **Calculator Integration** (Planned):
- Basic arithmetic and advanced mathematical functions.
- Precision handling with libraries like Math.js or Decimal.js.

---

## Technologies Used

### **Frontend**:
- **React**: For building UI components and state management.
- **Framer Motion**: Smooth animations for interactions and transitions.
- **Next.js**: Server-side rendering and optimized development workflow.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### **State Management**:
- **React Context API**: Managing window states and global interactions.
- **Custom Hooks**:
  - `useGrid` for draggable and resizable grids.
  - `useSelection` for managing selection logic.

### **Utilities**:
- **Sonner**: Notifications for user interactions (e.g., "This window is already running").
- **Math.js** (Planned): For advanced calculator functionality.

---

## Setup

### **Prerequisites**:
- Node.js (v16+ recommended)
- npm or Yarn

### **Installation**:
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/interactive-desktop.git
   ```
2. Navigate to the project directory:
   ```bash
   cd interactive-desktop
   ```
3. Install dependencies:
   ```bash
   npm install
   ```
4. Start the development server:
   ```bash
   npm run dev
   ```

---

## File Structure

```
interactive-desktop/
├── components/
│   ├── DesktopGrid.tsx         # Main desktop grid logic
│   ├── DesktopIcon.tsx         # Individual icon components
│   ├── Window.tsx              # Window component logic
│   ├── SelectionBox.tsx        # Selection box rendering
├── contexts/
│   ├── WindowsContext.tsx      # Window state management
├── hooks/
│   ├── useGrid.ts              # Draggable grid logic
│   ├── useSelection.ts         # Selection box logic
├── lib/
│   ├── selection.ts            # Selection utilities
├── public/
│   ├── icons/                  # Icons for files and folders
│   ├── wallpapers/             # Default wallpapers
├── styles/
│   ├── globals.css             # Global styles and resets
├── pages/
│   ├── index.tsx               # Main entry point
├── README.md                   # Project overview
└── package.json                # Dependencies and scripts
```

---

## Contributions
Contributions are welcome! Feel free to fork the project and submit a pull request. For major changes, please open an issue first to discuss your ideas.

---

## Credits
This project was heavily inspired by [Dustin Brett's daedalOS](https://github.com/DustinBrett/daedalOS), which served as a foundation for many of the concepts and features implemented here.

---

## License
This project is open-source and available under the [MIT License](LICENSE).
