import { Navbar } from "@/layout/Navbar";
import { Hero } from "@/sections/Hero";
import { About } from "@/sections/About";
import { Projects } from "@/sections/Projects";
import { Experience } from "@/sections/Experience";
import { Contact } from "@/sections/Contact";
import { Footer } from "./layout/Footer";
import { Routes, Route } from "react-router-dom";
import Collections from "./page/Collections";
import Product from './page/Product'





function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Projects />
      <Experience />
      <Contact />
    </>
  );
}

function App() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/collections" element={<Collections />} />
        <Route path='/product/:productId' element={<Product/>} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
