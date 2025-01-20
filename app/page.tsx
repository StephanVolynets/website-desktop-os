"use client";

import Desktop from "@/components/Desktop";
import Taskbar from "@/components/Taskbar";
import { WindowsProvider } from "@/contexts/WindowsContext";
import { ThemeProvider } from "next-themes";
import { Background } from "@/components/Background";

export default function Home() {
  return (
    <ThemeProvider attribute="class">
      <WindowsProvider>
        <div className="h-screen w-screen overflow-hidden flex flex-col">
          <Background />
          <Desktop />
          <Taskbar />
        </div>
      </WindowsProvider>
    </ThemeProvider>
  );
}