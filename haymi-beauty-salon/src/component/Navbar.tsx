import React from 'react';
import logo from '../assets/logo1.jpg';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white shadow-lg z-50">
      <div className="max-w-7xl mx-auto  px-6 py-3">
        <ul className="flex items-center justify-center gap-8 text-sm font-semibold tracking-wide uppercase">
          {/* Left Curl */}
          <li className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('top')}>
            <img
              src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
              alt="Decor Left"
              className="h-12 w-12 rounded-full"
            />
          </li>

          {/* Navigation Links */}
          <li
            className="cursor-pointer text-xl hover:text-yellow-600 transition"
            onClick={() => scrollToSection('home')}
          >
            Home
          </li>
          <li
            className="cursor-pointer text-xl hover:text-yellow-600 transition"
            onClick={() => scrollToSection('services')}
          >
            Services
          </li>

          {/* Center Logo */}
          <li
            className="cursor-pointer hover:text-yellow-600 transition"
            onClick={() => scrollToSection('portfolio')}
          >
            <img
              src={logo}
              alt="Haymi Beauty Logo"
              className="h-20 w-20 rounded-full  hover:scale-105 transition"
            />
          </li>

          <li
            className="cursor-pointer text-xl hover:text-yellow-600 transition"
            onClick={() => scrollToSection('about')}
          >
            About
          </li>
          <li
            className="cursor-pointer text-xl hover:text-yellow-600 transition"
            onClick={() => scrollToSection('contact')}
          >
            Contact
          </li>

          {/* Right Curl */}
          <li className="cursor-pointer hover:opacity-80" onClick={() => scrollToSection('book')}>
            <img
              src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
              alt="Decor Right"
              className="h-12 w-12 rounded-full hover:scale-105 transition"
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
