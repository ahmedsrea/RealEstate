import { Outlet } from "react-router-dom";
import Layout from "./Layout";

export default function Dashboard() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-gray-100">
      <Layout>
        <Outlet />
      </Layout>
    </div>
  );
}
