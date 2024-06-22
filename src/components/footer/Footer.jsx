import React from 'react'
import './footer.css'
import { Link } from 'react-router-dom';
const Footer = () => {
  return (
    <footer>
      <a href="#" className='footer__logo'>Jack Burright</a>
      <ul className='permalinks'>
        <li><a href="#">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#services">Hobbies</a></li>
        <li><a href="#portfoio">Portfolio</a></li>
        <li><a href="#contact">Contact</a></li>

      </ul>
      
      <div className='footer__copyright'>
        <small>&copy; Jack Burright. All rights reserved</small>
        <br />
        <Link to="/terms-of-service">Terms of Service</Link>
        <br />
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
      
    </footer>
  )
}

export default Footer