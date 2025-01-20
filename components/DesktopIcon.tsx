"use client";

import { useWindows } from "@/contexts/WindowsContext";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

export default function DesktopIcon({ id, title, icon: Icon }) {
  const { openWindow } = useWindows();

  const handleDoubleClick = () => {
    openWindow({
      id,
      title,
      content: `Content for ${title}`,
      x: 100,
      y: 100,
      width: 600,
      height: 400,
    });
  };

  return (
    <motion.div
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
    >
      <Button
        variant="ghost"
        className="h-24 w-24 flex flex-col items-center justify-center space-y-2 bg-background/10 backdrop-blur-sm hover:bg-background/20 transition-all duration-200 rounded-xl border border-white/10"
        onDoubleClick={handleDoubleClick}
      >
        <Icon className="h-8 w-8 text-white/90" />
        <span className="text-xs text-white/90 font-medium">{title}</span>
      </Button>
    </motion.div>
  );
}