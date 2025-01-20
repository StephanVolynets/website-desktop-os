"use client";

import { useState, useEffect } from "react";
import { useWindows } from "@/contexts/WindowsContext";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import StartMenu from "./StartMenu";
import { ClientTime } from "./ClientTime";

export default function Taskbar() {
  const { windows, focusWindow } = useWindows();
  const [showStartMenu, setShowStartMenu] = useState(false);

  return (
    <div className="h-12 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-t flex items-center px-2 justify-between">
      <div className="flex items-center space-x-2">
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setShowStartMenu(!showStartMenu)}
        >
          <Menu className="h-5 w-5" />
        </Button>
        
        <div className="flex space-x-1">
          {windows.map((window) => (
            <Button
              key={window.id}
              variant={window.focused ? "secondary" : "ghost"}
              className="h-8"
              onClick={() => focusWindow(window.id)}
            >
              {window.title}
            </Button>
          ))}
        </div>
      </div>

      <ClientTime />

      {showStartMenu && <StartMenu onClose={() => setShowStartMenu(false)} />}
    </div>
  );
}