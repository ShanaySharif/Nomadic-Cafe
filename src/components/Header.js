// import React from "react";
// // import ticketsImage from "./../img/tickets.png";

// function Header(){
//   return (
//     <React.Fragment>
//       <h1>Nomadic Cafe</h1>
//       {/* <img src={ticketsImage} alt="An image of tickets" /> */}
//     </React.Fragment>
//   );
// }

// export default Header;



//=========================================

const Header = () => {
  return <header className="header" style={{ backgroundColor:"pink"}}id ="header">
  <nav className="nav container">
    <a href="#home" className="nav__logo">Nomadic<span>.</span>Cafe </a>

    <div className="nav__menu" id="nav-menu">
      <ul classNameName="nav__list">
        <li className="nav__item">
          <a href="#home" className="nav__link active-link">Home</a>
        </li>
        <li className="nav__item">
          <a href="#products" className="nav__link">Menu</a>
        </li>
        <li className="nav__item">
          <a href="#place" className="nav__link">Account</a>
        </li>
        <li classNameName="nav__item">
          <a href="#blog" className="nav__link">Sign-In</a>
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