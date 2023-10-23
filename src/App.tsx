import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./pages/Compounds/Compounds";
import Home from "./pages/Home/Home";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";
import Show from "./pages/Show/Show";
import ForSale from "./pages/For-sale/ForSale";
import Blog from "./pages/Blog/Blog";
import NewBlog from "./pages/Blog/NewBlog";
import Blogs from "./pages/Blog/Blogs";
import NotFound from "./components/NotFound";
import Developers from "./pages/developers/Developers";
import DevPage from "./pages/developers/DevPage";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/:slug" element={<Show />} />
          <Route path="/compounds" element={<Compounds />} />
          <Route path="/search" element={<Compounds />} />
          <Route path="/new" element={<AddItem />} />
          <Route path="/for-sale" element={<ForSale />} />
          <Route path="/blog" element={<Blogs />} />
          <Route path="/blog/:slug" element={<Blog />} />
          <Route path="/blog/new" element={<NewBlog />} />
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
