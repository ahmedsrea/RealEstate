import { ReactNode } from "react";
import Sidebar from "./Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  return (
    <div className="w-full mx-auto flex flex-row">
      <Sidebar />
      {children}
    </div>
  );
}
