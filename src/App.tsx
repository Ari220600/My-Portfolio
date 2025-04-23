import React, { useEffect, useState } from "react";
import Header from "./components/Layout/Header";
import Hero from "./components/Sections/Hero";
import About from "./components/Sections/About";
import Projects from "./components/Sections/Projects";
import Contact from "./components/Sections/Contact";
import Preloader from "./components/Layout/Preloader";

function App() {
  useEffect(() => {
    const cursor = document.createElement("div");
    cursor.className = "custom-cursor";
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + "px";
      cursor.style.top = e.clientY + "px";
    };

    window.addEventListener("mousemove", moveCursor);

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      document.body.removeChild(cursor);
    };
  }, []);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulating loading process (you can replace it with actual loading logic if needed)
    setTimeout(() => {
      setIsLoading(false); // Set to false after 3 seconds (you can customize it)
    }, 4000); // Adjust time as per your preference
  }, []);

  return (
    <div className="bg-black min-h-screen text-white">
      {isLoading ? (
        <Preloader /> // Show preloader while loading
      ) : (
        <>
          <Header />
          <main>
            <Hero />
            <About />
            <Projects />
            <Contact />
          </main>
        </>
      )}
    </div>
  );
}

export default App;
