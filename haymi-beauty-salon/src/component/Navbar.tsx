import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow p-4 fixed w-full z-50">
      <ul className="flex justify-center gap-6">
        <li className="cursor-pointer" onClick={() => scrollToSection('top')}>
          <img
            style={{ width: '50px', height: '50px' }}
            src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
            alt="Haymi Beauty Salon Logo"
          />
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('home')}>
          Home
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('services')}>
          Services
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('portfolio')}>
          <img
            src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d2f39894a77d8b8563db49a_Logo_Condensed_Web.png"
            alt="Haymi Beauty Salon Logo"
          />
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('about')}>
          About
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>
          Contact
        </li>
        <li className="cursor-pointer" onClick={() => scrollToSection('book')}>
          <img
            style={{ width: '50px', height: '50px' }}
            src="https://uploads-ssl.webflow.com/5d13857a4859bb32ead897a3/5d163e91e4cfbb4aa08691f3_Curl%20Right.svg"
            alt="Haymi Beauty Salon Logo"
          />
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
