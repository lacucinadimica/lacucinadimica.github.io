import React, { useState } from "react";
import { QuartzComponentConstructor, QuartzComponentProps } from "./types";

const Header: QuartzComponentConstructor = ({ children }: QuartzComponentProps) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="header-content">
        <h1>
          <a href="/">La Cucina di Mica</a>
        </h1>
        <button className="menu-toggle" onClick={toggleMenu}>
          ☰
        </button>
        <div className={`menu ${menuOpen ? "open" : ""}`}>
          <a href="/engineering">Projects</a>
          <a href="/kitchen">Kitchen</a>
        </div>
      </div>
    </header>
  );
};

Header.css = `
header {
  background-color: transparent; /* #fdf1dd Example background color */
  color: #000; /* Example text color */
  padding: 10px;
  border-bottom: 1px solid #000; /* Thin black border at the bottom */
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;
}

header h1 {
  margin: 0;
}

.menu {
  display: flex;
  gap: 20px;
}

.menu a {
  text-decoration: none;
  color: #000; /* Menu button text color */
}

/* Hide menu and show hamburger button on smaller screens */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
}

@media (max-width: 600px) {
  .menu {
    display: none;
    flex-direction: column;
    gap: 10px;
    position: absolute;
    top: 100%;
    left: 0;
    background: white;
    width: 100%;
    padding: 10px;
    border-top: 1px solid #000;
  }

  .menu.open {
    display: flex;
  }

  .menu-toggle {
    display: block;
  }

  .menu a {
    font-size: 1rem; /* Adjust the font size if needed */
  }
}
`;

export default Header;
