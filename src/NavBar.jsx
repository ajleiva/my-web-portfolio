import React from 'react';
import './NavBar.css';

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  return (
    <nav id="navbar" aria-label="Main Navigation">
      <ul className="nav-container">
        <li className="nav-name">
          <a href="#home">Axel Leiva Treminio</a>
        </li>
        <div className="nav-list">
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href}>{link.name}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;