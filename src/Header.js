import React from 'react';
import './Header.css';

function Header() {
  return (
    <div className="header">
      <ul className="nav__ul">
        <div className="our__logo">CAR<span className="it">it</span>ON</div>
        <li>Home</li>
        <li>Cars</li>
        <li>Services</li>
        <li>News</li>
        <li>About us</li>
        <li>Contacts</li>
      </ul>
    </div>
  )
}

export default Header
