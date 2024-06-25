import React, {useState, useEffect} from 'react';
import {Link} from "react-router-dom";
import "./Navbar.css";
import SearchForm from '../../components/SearchForm/SearchForm';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  const handleScroll = () => {
    const offset = window.scrollY;
    if(offset > 60){
      setScrolled(true);
    } else {
      setScrolled(false);
    }
  }
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  return (
    <nav className={`navbar ${scrolled ? 'scrolled': ""}`}>
      <Link to = "/">
        <div className="navbar-logo">
            <span>Recipe Finder</span>
        </div>
      </Link>
      <SearchForm />
      <div className="navbar-social-media">
          <a href=''><i className="fab fa-facebook-square"></i></a>
          <a href=''><i className="fab fa-twitter"></i></a>
          <a href=''><i className="fab fa-instagram"></i></a>
          <a href=''><i className="fab fa-youtube"></i></a>
      </div>
    </nav>
  )
}

export default Navbar