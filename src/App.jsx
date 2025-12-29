import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import Home from "./pages/Home";
import Shop from "./pages/Shop";
import Mac from "./pages/Mac";

function App() {
  return (
    <>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/mac" element={<Mac />} />
      </Routes>

      
    </>
  );
}

export default App;
