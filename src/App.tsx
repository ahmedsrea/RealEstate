import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./components/compounds/Compounds";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import Item from "./components/Item";
import ForSale from "./components/for-sale/ForSale";
import Blog from "./components/blog/Blog";
import NewBlog from "./components/blog/NewBlog";
import Blogs from "./components/blog/Blogs";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compounds" element={<Compounds />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/add-item" element={<AddItem />} />
          <Route path="/:slug" element={<Item />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/blog/new" element={<NewBlog />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
