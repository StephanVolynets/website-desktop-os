"use client";

import { createContext, useContext, useState } from "react";

interface WindowPosition {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
}

interface Window {
  id: string;
  title: string;
  content: React.ReactNode;
  x: number;
  y: number;
  width: number | string;
  height: number | string;
  focused: boolean;
  minimized: boolean;
  prevPosition?: WindowPosition;
}

interface WindowsContextType {
  windows: Window[];
  openWindow: (window: Partial<Window>) => void;
  closeWindow: (id: string) => void;
  focusWindow: (id: string) => void;
  updateWindow: (id: string, updates: Partial<Window>) => void;
}

const WindowsContext = createContext<WindowsContextType | null>(null);

export function WindowsProvider({ children }: { children: React.ReactNode }) {
  const [windows, setWindows] = useState<Window[]>([]);

  const openWindow = (window: Partial<Window>) => {
    setWindows((prev) => [
      ...prev.map((w) => ({ ...w, focused: false })),
      { 
        id: window.id || Math.random().toString(),
        title: window.title || "Window",
        content: window.content || null,
        x: window.x || 100,
        y: window.y || 100,
        width: window.width || 600,
        height: window.height || 400,
        focused: true,
        minimized: false,
      },
    ]);
  };

  const closeWindow = (id: string) => {
    setWindows((prev) => prev.filter((w) => w.id !== id));
  };

  const focusWindow = (id: string) => {
    setWindows((prev) =>
      prev.map((w) => ({
        ...w,
        focused: w.id === id,
        minimized: w.id === id ? false : w.minimized,
      }))
    );
  };

  const updateWindow = (id: string, updates: Partial<Window>) => {
    setWindows((prev) =>
      prev.map((w) => (w.id === id ? { ...w, ...updates } : w))
    );
  };

  return (
    <WindowsContext.Provider
      value={{ windows, openWindow, closeWindow, focusWindow, updateWindow }}
    >
      {children}
    </WindowsContext.Provider>
  );
}

export const useWindows = () => {
  const context = useContext(WindowsContext);
  if (!context) {
    throw new Error("useWindows must be used within a WindowsProvider");
  }
  return context;
};