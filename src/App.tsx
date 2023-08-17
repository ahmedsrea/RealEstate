import { BrowserRouter as Router } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import Landing from "./components/landing/Landing";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Landing />
      </Router>
    </>
  );
}

export default App;
