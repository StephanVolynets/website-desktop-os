"use client";

import { Maximize2, Minimize2, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WindowControlsProps {
  onMinimize: () => void;
  onMaximize: () => void;
  onClose: () => void;
  isMaximized: boolean;
}

export function WindowControls({ onMinimize, onMaximize, onClose, isMaximized }: WindowControlsProps) {
  return (
    <div className="flex items-center space-x-1">
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-none hover:bg-background/20 hover:text-foreground focus-visible:ring-0"
        onClick={onMinimize}
      >
        <Minimize2 className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-none hover:bg-background/20 hover:text-foreground focus-visible:ring-0"
        onClick={onMaximize}
      >
        <Maximize2 className="h-3 w-3" />
      </Button>
      <Button
        variant="ghost"
        size="icon"
        className="h-6 w-6 rounded-none hover:bg-destructive hover:text-destructive-foreground focus-visible:ring-0"
        onClick={onClose}
      >
        <X className="h-3 w-3" />
      </Button>
    </div>
  );
}