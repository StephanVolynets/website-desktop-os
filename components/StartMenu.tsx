"use client";

import { useWindows } from "@/contexts/WindowsContext";
import { Button } from "@/components/ui/button";
import { FileText, Terminal, Calculator, Image, Settings } from "lucide-react";

export default function StartMenu({ onClose }) {
  const { openWindow } = useWindows();

  const apps = [
    { id: "notepad", title: "Notepad", icon: FileText },
    { id: "terminal", title: "Terminal", icon: Terminal },
    { id: "calculator", title: "Calculator", icon: Calculator },
    { id: "imageViewer", title: "Images", icon: Image },
    { id: "settings", title: "Settings", icon: Settings },
  ];

  const handleAppClick = (app) => {
    openWindow({
      id: app.id,
      title: app.title,
      content: `Content for ${app.title}`,
      x: 100,
      y: 100,
      width: 600,
      height: 400,
    });
    onClose();
  };

  return (
    <div className="absolute bottom-12 left-0 w-64 bg-card rounded-lg shadow-lg p-4">
      <div className="space-y-2">
        {apps.map((app) => (
          <Button
            key={app.id}
            variant="ghost"
            className="w-full justify-start"
            onClick={() => handleAppClick(app)}
          >
            <app.icon className="h-5 w-5 mr-2" />
            {app.title}
          </Button>
        ))}
      </div>
    </div>
  );
}