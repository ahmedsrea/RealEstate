import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./pages/Compounds/Compounds";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import Show from "./pages/Show/Show";
import ForSale from "./pages/For-sale/ForSale";
import Blog from "./pages/Blog/Blog";
import NewBlog from "./pages/Blog/NewBlog";
import Blogs from "./pages/Blog/Blogs";
import ManageBlogs from "./pages/Dashboard/Blogs/ManageBlogs";
import NotFound from "./components/NotFound";
import Developers from "./pages/developers/Developers";
import DevPage from "./pages/developers/DevPage";
import ScrollToTop from "./components/ScrollToTop";
import Dashboard from "./pages/Dashboard/Dashboard";
import ManageProducts from "./pages/Dashboard/Products/ManageProducts";
import NewProduct from "./pages/Dashboard/Products/NewProduct";
import AddBlog from "./pages/Dashboard/Blogs/NewBlog";

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
          <Route path="/dashboard/*" element={<Dashboard />}>
            <Route path="products" element={<ManageProducts />} />
            <Route path="add-product" element={<NewProduct />} />
            <Route path="blogs" element={<ManageBlogs />} />
            <Route path="add-blog" element={<AddBlog />} />
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
