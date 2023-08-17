import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Compounds from "./components/compounds/Compounds";
import Home from "./components/Home";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/compounds" element={<Compounds />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
