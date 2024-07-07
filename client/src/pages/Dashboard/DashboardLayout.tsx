import Sidebar from "./Sidebar";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-gray-100">
      <div className="w-full mx-auto flex flex-row">
        <Sidebar />
        <Outlet />
      </div>
    </div>
  );
}
