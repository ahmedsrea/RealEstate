import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import ManageProducts from "./Products/ManageProducts";
import ManageBlogs from "./Blogs/ManageBlogs";

export default function Dashboard() {
  return (
    <div className="w-full absolute top-0 left-0 z-50 bg-gray-200">
      <Layout>
        <Routes>
          <Route path="products" element={<ManageProducts />} />
          <Route path="blogs" element={<ManageBlogs />} />
        </Routes>
      </Layout>
    </div>
  );
}
