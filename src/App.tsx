import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./pages/Compounds/Compounds";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Show from "./pages/Show/Show";
import ForSale from "./pages/For-sale/ForSale";
import Blog from "./pages/Blog/Blog";
import Blogs from "./pages/Blog/Blogs";
import NotFound from "./components/NotFound";
import Developers from "./pages/developers/Developers";
import DevPage from "./pages/developers/DevPage";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import NewProduct from "./pages/Dashboard/Products/NewProduct";
import AddBlog from "./pages/Dashboard/Blogs/NewBlog";
import WrappedManageProducts from "./pages/Dashboard/Products/WrappedManageProducts";
import EditProduct from "./pages/Dashboard/Products/EditProduct";
import NewDeveloper from "./pages/Dashboard/Developers/NewDeveloper";
import WrappedManageDevelopers from "./pages/Dashboard/Developers/WrappedManageDevelopers";
import WrappedManageBlogs from "./pages/Dashboard/Blogs/WrappedManageBlogs";
import Login from "./pages/Dashboard/Login";
import RequireAuth from "./pages/Dashboard/RequireAuth";
import PersistLogin from "./pages/Dashboard/PersistLogin";
import DashboardLayout from "./pages/Dashboard/DashboardLayout";
import Users from "./pages/Dashboard/Users";

function App() {
  return (
    <>
      <Router>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Show />} />
          <Route path="/compounds" element={<Compounds />} />
          <Route path="/search" element={<Compounds />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Routes */}
          <Route element={<PersistLogin />}>
            <Route element={<RequireAuth />}>
              <Route path="/dashboard/*" element={<DashboardLayout />}>
                <Route index element={<Dashboard />} />
                <Route path="products" element={<WrappedManageProducts />}>
                  <Route path="edit" element={<EditProduct />} />
                </Route>
                <Route path="add-product" element={<NewProduct />} />
                <Route path="blogs" element={<WrappedManageBlogs />} />
                <Route path="add-blog" element={<AddBlog />} />
                <Route
                  path="developers"
                  element={<WrappedManageDevelopers />}
                />
                <Route path="add-dev" element={<NewDeveloper />} />
                <Route path="users" element={<Users />} />
              </Route>
            </Route>
          </Route>

          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/developers" element={<Developers />} />
          <Route path="/developers/:slug" element={<DevPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
