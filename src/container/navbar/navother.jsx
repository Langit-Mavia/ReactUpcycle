import React, { useEffect, useState } from 'react';
import 'react-toastify/dist/ReactToastify.css';
import MoonClearFillIcon from 'remixicon-react/MoonClearFillIcon';
import SunFillIcon from 'remixicon-react/SunFillIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import FunctionLineIcon from 'remixicon-react/FunctionLineIcon';
import { getDataFromLocal, clearDataFromLocal } from './../localstorage/localstorages';
import { useNavigate } from "react-router-dom";

const Navother = () => {
  const [darkTheme, setDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const username = getDataFromLocal().username;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleThemeSwitch = () => {
    setDarkTheme(!darkTheme);
    document.body.classList.toggle('dark-theme');
  };

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  const handleClick = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };
  
  const profile = () => {
    setTimeout(() => {
        navigate("./../pages/index");
    }, 5000);
  };

  const signOut = () => {
    clearDataFromLocal();
  };

  useEffect(() => {
    const scrollActive = () => {
      const sections = document.querySelectorAll('section[id]');
      const scrollY = window.pageYOffset;

      sections.forEach((current) => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 50;
        const sectionId = current.getAttribute('id');

        const link = document.querySelector(`.nav__menu a[href*=${sectionId}]`);
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
          link.classList.add('active-link');
        } else {
          link.classList.remove('active-link');
        }
      });
    };
     window.addEventListener('scroll', scrollActive);
     return () => {
        window.removeEventListener('scroll', scrollActive);
    };
  }, []);
  
  useEffect(() => {
    const scrollHeader = () => {
      const header = document.getElementById('header');
      if (window.scrollY >= 100) {
        header.classList.add('scroll-header');
      } else {
        header.classList.remove('scroll-header');
      }
    };

   
    window.addEventListener('scroll', scrollHeader);

    return () => {
        window.removeEventListener('scroll', scrollHeader);
    };
  }, []);

  return (
    <header className="header" id="header">
      <nav className="nav container">
        <a href="#" className="nav__logo">
          <i>Upcycle.</i>
        </a>
        <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
          <ul className="nav__list">
            <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            <li className="nav__item">
              <a href="#about" className="nav__link" onClick={handleLinkClick}>
                About
              </a>
            </li>
            <li className="nav__item">
              <a href="#discover" className="nav__link" onClick={handleLinkClick}>
                <i>UpCycle.</i> Craft
              </a>
            </li>
            <li className="nav__item">
              <a href="#animate" className="nav__link" onClick={handleLinkClick}>
                <i>UpCycle.</i> Animate
              </a>
            </li>
            <li className="nav__item">
              <div>
                <span id="user-name">{username}</span>
                <i className="ri-arrow-down-s-line" onClick={handleClick} />
                <ul className="dropdown-menu" style={isDropdownOpen ? {} : { display: "none" }}>
                    <li>
                    <a href="#" className="droplink" onClick={profile}>
                        Profile
                    </a>
                    </li>
                    <li>
                    <a href="#" className="droplink" onClick={signOut}>
                        Sign Out
                    </a>
                    </li>
                </ul>
              </div>
            </li>
          </ul>
          <button className="theme-button" onClick={handleThemeSwitch}>
            {darkTheme ? (
              <MoonClearFillIcon size={22} />
            ) : (
              <SunFillIcon size={22}/>
            )}
          </button>
          <CloseLineIcon size={24} className="nav__close" id="nav-close" onClick={handleMenuToggle} />
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
          <FunctionLineIcon size={24} className="nav__function" />
        </div>
      </nav>
    </header>
  );
};

export default Navother;