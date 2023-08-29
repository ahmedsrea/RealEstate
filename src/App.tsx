import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./components/compounds/Compounds";
import Home from "./components/home/Home";
import Footer from "./components/Footer";
import AddItem from "./components/AddItem";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compounds" element={<Compounds />} />
          <Route path="/add-item" element={<AddItem />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
