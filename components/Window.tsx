"use client";

import { motion, useDragControls } from "framer-motion";
import { useState, useRef, useEffect } from "react";
import { useWindows } from "@/contexts/WindowsContext";
import { cn } from "@/lib/utils";
import { WindowTitleBar } from "./window/WindowTitleBar";

interface WindowPosition {
  x: number;
  y: number;
  width: number | string;
  height: number | string;
}

export default function Window({ id, title, content, x, y, width, height, focused, minimized }) {
  const { closeWindow, focusWindow, updateWindow } = useWindows();
  const [isMaximized, setIsMaximized] = useState(false);
  const [prevPosition, setPrevPosition] = useState<WindowPosition | null>(null);
  const controls = useDragControls();
  const constraintsRef = useRef(null);

  const handleMaximize = () => {
    if (!isMaximized) {
      setPrevPosition({ x, y, width, height });
      updateWindow(id, {
        x: 0,
        y: 0,
        width: "100%",
        height: "calc(100vh - 48px)",
      });
    } else if (prevPosition) {
      updateWindow(id, prevPosition);
    }
    setIsMaximized(!isMaximized);
  };

  const handleMinimize = () => {
    updateWindow(id, { minimized: true });
  };

  useEffect(() => {
    if (minimized) {
      updateWindow(id, { 
        minimized: true,
        prevPosition: { x, y, width, height }
      });
    }
  }, [minimized]);

  if (minimized) return null;

  return (
    <motion.div
      ref={constraintsRef}
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        x,
        y,
        width: isMaximized ? "100%" : width,
        height: isMaximized ? "calc(100vh - 48px)" : height,
      }}
      transition={{ 
        duration: 0.2,
        type: "spring",
        stiffness: 300,
        damping: 30
      }}
      drag={!isMaximized}
      dragControls={controls}
      dragMomentum={false}
      dragListener={false}
      dragConstraints={{
        left: 0,
        top: 0,
        right: window.innerWidth - (typeof width === 'number' ? width : 600),
        bottom: window.innerHeight - (typeof height === 'number' ? height : 400),
      }}
      dragElastic={0}
      className={cn(
        "absolute bg-background/95 backdrop-blur rounded-lg shadow-lg overflow-hidden border border-border",
        focused ? "z-10" : "z-0"
      )}
      onClick={() => !focused && focusWindow(id)}
    >
      <WindowTitleBar
        title={title}
        isMaximized={isMaximized}
        onMinimize={handleMinimize}
        onMaximize={handleMaximize}
        onClose={() => closeWindow(id)}
        onPointerDown={(e) => {
          e.preventDefault();
          controls.start(e);
        }}
      />
      <div className="p-4 overflow-auto">{content}</div>
    </motion.div>
  );
}