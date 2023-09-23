import React from "react";
// // import ticketsImage from "./../img/tickets.png"

const Header = () => {
  return <header className="header" id="header">
  <nav className="nav container">
    <a href="#home" className="nav__logo">Nomadic<span>.</span>co </a>

    <div className="nav__menu" id="nav-menu">
      <ul className="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link active-link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#Menu" className="nav__link">Menu</a>
        </li>
        <li className="nav__item">
          <a href="#SignIn" className="nav__link">SignIn</a>
        </li>
        
      </ul>

      <div className="nav__close" id="nav-close">
        <i className="bx bx-x"></i>
      </div>
    </div>

    <div className="nav__toggle" id="nav-toggle">
      <i className="bx bx-grid-alt"></i>
    </div>
  </nav>
</header>
}
export default Header;


