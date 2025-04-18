import "./Home.css";
import { useState, useEffect } from 'react';
import { heroQuotes } from "../Content"; // Assuming content.js is lowercase (best practice)

function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % heroQuotes.length);
    }, 3000); // Change every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="page">
      <section className="hero-section">
        <div className="hero-content">
          <h1>{heroQuotes[currentIndex].heading}</h1>
          <h3 className="subheading">{heroQuotes[currentIndex].subheading}</h3>
        </div>
      </section>
    </div>
  );
}

export default Home;
