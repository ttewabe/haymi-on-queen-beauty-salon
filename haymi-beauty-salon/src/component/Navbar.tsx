import React from 'react';

const Navbar: React.FC = () => {
  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="bg-white shadow p-4 fixed w-full z-50">
      <ul className="flex justify-center gap-6">
        <li className="cursor-pointer" onClick={() => scrollToSection('home')}>Home</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('services')}>Services</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('about')}>About</li>
        <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;