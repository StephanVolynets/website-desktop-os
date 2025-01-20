"use client";

import { useWindows } from "@/contexts/WindowsContext";
import Window from "@/components/Window";
import { FileText, Terminal, Calculator, Image } from "lucide-react";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import GridLayout from "react-grid-layout";
import "react-grid-layout/css/styles.css";
import "react-resizable/css/styles.css";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

interface AppIcon {
  id: string;
  title: string;
  icon: any;
  x: number;
  y: number;
}

export default function Desktop() {
  const { windows, openWindow } = useWindows();
  const [layout, setLayout] = useState<any[]>([]);
  const [width, setWidth] = useState(0);

  const apps: AppIcon[] = [
    { id: "notepad", title: "Notepad", icon: FileText, x: 0, y: 0 },
    { id: "terminal", title: "Terminal", icon: Terminal, x: 1, y: 0 },
    { id: "calculator", title: "Calculator", icon: Calculator, x: 2, y: 0 },
    { id: "imageViewer", title: "Images", icon: Image, x: 3, y: 0 },
  ];

  useEffect(() => {
    // Initialize layout from localStorage or default positions
    const savedLayout = localStorage.getItem('desktopLayout');
    const initialLayout = savedLayout ? JSON.parse(savedLayout) : apps.map((app, i) => ({
      i: app.id,
      x: app.x,
      y: app.y,
      w: 1,
      h: 1,
      static: false
    }));
    setLayout(initialLayout);
    
    // Set initial width
    setWidth(window.innerWidth);

    // Handle window resize
    const handleResize = () => setWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleLayoutChange = (newLayout: any[]) => {
    setLayout(newLayout);
    localStorage.setItem('desktopLayout', JSON.stringify(newLayout));
  };

  const handleDoubleClick = (appId: string) => {
    const app = apps.find(a => a.id === appId);
    if (app) {
      openWindow({
        id: app.id,
        title: app.title,
        content: `Content for ${app.title}`,
        x: 100,
        y: 100,
        width: 600,
        height: 400,
      });
    }
  };

  return (
    <div className="flex-1 relative overflow-hidden">
      <motion.div 
        variants={container}
        initial="hidden"
        animate="show"
        className="h-full w-full absolute top-0 left-0"
      >
        <GridLayout
          className="layout"
          layout={layout}
          cols={12}
          rowHeight={100}
          width={width}
          onLayoutChange={handleLayoutChange}
          margin={[20, 20]}
          isResizable={false}
          draggableHandle=".drag-handle"
          compactType={null}
        >
          {apps.map((app) => (
            <div key={app.id} className="relative">
              <motion.div
                variants={item}
                className="drag-handle cursor-move"
                onDoubleClick={() => handleDoubleClick(app.id)}
              >
                <div className="h-24 w-24 flex flex-col items-center justify-center space-y-2 bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-all duration-200 rounded-xl border border-white/10">
                  <app.icon className="h-8 w-8 text-white/90" />
                  <span className="text-xs text-white/90 font-medium">{app.title}</span>
                </div>
              </motion.div>
            </div>
          ))}
        </GridLayout>
      </motion.div>
      
      {windows.map((window) => (
        <Window key={window.id} {...window} />
      ))}
    </div>
  );
}