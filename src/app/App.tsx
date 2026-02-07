import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigation } from "@/app/components/Navigation";
import { Footer } from "@/app/components/Footer";
import Home from "@/app/pages/Home";
import Shop from "@/app/pages/Shop";
import Research from "@/app/pages/Research";
import About from "@/app/pages/About";
import Article from "@/app/pages/Article";

export default function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen font-sans text-foreground bg-background">
        <Navigation />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/shop" element={<Shop />} />
            <Route path="/shop/:slug" element={<Article />} />
            
            <Route path="/research" element={<Research />} />
            <Route path="/research/:category/:subslug" element={<Article />} />
            <Route path="/research/:slug" element={<Article />} />
            
            <Route path="/about" element={<About />} />
            {/* Catch all for nested routes in research/shop to just show main page or specific logic */}
            <Route path="/shop/*" element={<Shop />} />
            <Route path="/research/*" element={<Research />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}
