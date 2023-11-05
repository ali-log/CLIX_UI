import React from 'react';
import './header.css';

const Header = () => (
  <div className="__header section__padding" id="home">
    <div className="__header-content">
      <h1 className="gradient__text"> Efficiency Meets Flexibility: Discover Our Tailored Cloud Service Suite</h1>
      <p>Discover the synergy of advanced cloud technology and strategic services, dedicated to optimizing operations and catalyzing business evolution.</p>

      <div className="__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>
  </div>
);

export default Header;