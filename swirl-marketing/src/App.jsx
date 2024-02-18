import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom'; // Import BrowserRouter and Routes
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import About from './Components/About';
import Services from './Components/Services';
import Contactus from './Components/Contactus';
import Partner from './Components/Partner';
import Login from './Components/Login';
import SignUp from './Components/SignUp';
import Footer from './Components/Footer';




function App() {
  return (
    <BrowserRouter> {/* Wrap everything with BrowserRouter */}
        <Navbar />
        <Routes> {/* Use Routes instead of div */}
          <Route path="/" element={<Home />} /> {/* Use element prop to specify the component */}
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/partner" element={<Partner />} />
          <Route path="/contact" element={<Contactus />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />

        </Routes>
        <Footer/>
    </BrowserRouter>
  );
}

export default App;
