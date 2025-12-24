import React, { useState } from 'react';
import './NavBar.css';

const links = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen((v) => !v);
  const handleLinkClick = () => setOpen(false);

  return (
    <nav id="navbar" aria-label="Main Navigation">
      <ul className="nav-container">
        <li className="nav-name">
          <a href="#home">Axel Leiva Treminio</a>
        </li>

        <button
          className={`nav-toggle ${open ? 'open' : ''}`}
          aria-label="Toggle navigation"
          aria-expanded={open}
          aria-controls="nav-list"
          onClick={handleToggle}
        >
          <span className="bar" />
          <span className="bar" />
          <span className="bar" />
        </button>

        <div id="nav-list" className={`nav-list ${open ? 'open' : ''}`}>
          {links.map((link) => (
            <li key={link.href}>
              <a href={link.href} onClick={handleLinkClick}>{link.name}</a>
            </li>
          ))}
        </div>
      </ul>
    </nav>
  );
};

export default Navbar;