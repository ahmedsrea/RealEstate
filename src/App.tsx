import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./pages/Compounds/Compounds";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import Show from "./components/Show";
import ForSale from "./pages/For-sale/ForSale";
import Blog from "./pages/Blog/Blog";
import NewBlog from "./pages/Blog/NewBlog";
import Blogs from "./pages/Blog/Blogs";

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
          <Route path="/:slug" element={<Show />} />
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
