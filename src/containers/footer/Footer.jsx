import React from 'react';
import './footer.css';
import clix from '../../assets/nav-logo.png'

const Footer = () => {
  return (
    <div className='__footer section__padding'>
      <div className='__footer-heading'>
        <h1 className='gradient__text'>Discover new horizons: Embrace cloud computing for agility and success.</h1>
      </div>
      <div className='__footer-btn'>
        <p>Go Cloud Now</p>
      </div>

      <div className='__footer-links'>
        <div className='__footer-links_logo'>
          <img src={clix} alt="logo" />
          <p>My Street, Kingston, New York 12401, All Rights Reserved</p>
        </div>
        <div className='__footer-links_div'>
          <h4>Links</h4>
          <p>Careers</p>
          <p>Social Media</p>
          <p>FAQ</p>
          <p>Pricing</p>
        </div>
        <div className='__footer-links_div'>
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className='__footer-links_div'>
          <h4>Get in touch</h4>
          <p>Mr John Smith. 132, My Street, Kingston, New York 12401</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className='__footer-copyright'>
        <p>© 2023 CLIX. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer