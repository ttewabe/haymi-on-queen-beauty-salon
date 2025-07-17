import React from 'react';
import './App.css';
import Navbar from './component/Navbar';
import Home from './sections/Home';
import Services from './sections/Services';
import About from './sections/About';
import Contact from './sections/Contact';
import Footer from './component/Footer';

const App: React.FC = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-16">
        <section id="home"><Home /></section>
        <section id="services"><Services /></section>
        <section id="about"><About /></section>
        <section id="contact"><Contact /></section>
      </main>
      <Footer />
    </div>
  );
};

export default App;