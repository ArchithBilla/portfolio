import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import './App.css';
import Error from '../src/components/ErrorPage'



function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Error/>
        
        {/* <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes> */}

        <Footer />
      </div>
    </Router>
  );
}

export default App;
