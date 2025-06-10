import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Shop from "./components/Shop";
import Categories from "./components/Categories";
import Deals from "./components/Deals";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/home";


function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/categories" element={<Categories />} />
          <Route path="/deals" element={<Deals />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </>
    </Suspense>
  );
}

export default App;
