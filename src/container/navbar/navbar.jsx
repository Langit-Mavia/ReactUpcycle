import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';
import 'react-toastify/dist/ReactToastify.css';

import { useNavigate, useLocation} from 'react-router-dom';
import { clearDataFromLocal } from './../localstorage/localstorages';

{/* Import Function */}
import LoginForm from '../sign/login';
import RegisterForm from '../sign/register';

{/* Import Icon */}
import MoonClearLineIcon from 'remixicon-react/MoonClearLineIcon';
import SunLineIcon from 'remixicon-react/SunLineIcon';
import CloseLineIcon from 'remixicon-react/CloseLineIcon';
import FunctionLineIcon from 'remixicon-react/FunctionLineIcon';
import ArrowDownSLineIcon from 'remixicon-react/ArrowDownSLineIcon';

Modal.setAppElement('#root');

const Navbar = ({user, setUser}) => {
  const navigate = useNavigate();
  const [darkTheme, setDarkTheme] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [currentModal, setCurrentModal] = useState(null);
  const location = useLocation();
  
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
  const handleRecycler = (event) => {
    setIsMenuOpen(false);
    navigate('/setorsampah');
  };
  const handleHome = (event) => {
    setIsMenuOpen(false);
    navigate('/banksampah');
  }
  const handleGuard = (event) => {
    setIsMenuOpen(false);
    navigate('/trashlocation');
  }
  const handleWallet = (event) => {
    setIsMenuOpen(false);
    navigate('/saldo');
  };

  const handleDropClick = () => {
    setIsMenuOpen(false);
  };

  const openModal = (modal) => {
    setCurrentModal(modal);
    setIsMenuOpen(false);
  };

  const closeModal = () => {
    setCurrentModal(null);
  };

  const signOut = () => {
    clearDataFromLocal();
  };
  
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
            {location.pathname == '/' ? (
              <li className="nav__item">
              <a href="#home" className="nav__link active-link" onClick={handleLinkClick}>
                Home
              </a>
            </li>
            ):(
              <li className="nav__item">
              <a href="" className="nav__link active-link" onClick={handleHome}>
                Home
              </a>
            </li>
            )
          }
            
            {location.pathname =='/'? (
              <>
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
              </>
            ): (
              <>
                <li className="nav__item">
                  <a href="" className="nav__link" onClick={handleRecycler}>
                    Re-Cycler
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link" onClick={handleGuard}>
                    Up-Guard
                  </a>
                </li>
                <li className="nav__item">
                  <a href="" className="nav__link" onClick={handleWallet}>
                    UpWallet
                  </a>
                </li>
              </>
            )}
            {user? (
             <div className={`nav__menu ${isMenuOpen ? 'show-menu' : ''}`} id="nav-menu">
                <ul className="nav__list">
                {user && (
                  <li className="nav__item dropdown">
                    <a href="#" className="nav__link dropnav">
                      {user.username} <ArrowDownSLineIcon size={20} />
                    </a>
                    <DropdownMenu handleLinkClick={handleDropClick} signOut={signOut} />
                  </li>
                )}
               </ul>
            </div>
            ): (
              <>
                <li className="nav__item">
                  <button onClick={() => openModal('login')} className='nav__link button__login'>Login</button>
                </li>
                <li className="nav__item">
                  <button onClick={() => openModal('register')} className='nav__link button__login'>Register</button>
                </li>
              </>
            )}
          </ul>
          <button className="theme-button" onClick={handleThemeSwitch}>
            {darkTheme ? (
              <MoonClearLineIcon size={22} />
            ) : (
              <SunLineIcon size={22}/>
            )}
          </button>
          <CloseLineIcon size={24} className="nav__close" id="nav-close" onClick={handleMenuToggle} />
        </div>
        <div className="nav__toggle" id="nav-toggle" onClick={handleMenuToggle}>
          <FunctionLineIcon size={24} className="nav__function" />
        </div>
      </nav>
      {currentModal === 'login' && (
        <LoginForm isOpen={true} onClose={closeModal} setUser={setUser}/>
      )}
      {currentModal === 'register' && (
        <RegisterForm isOpen={true} onClose={closeModal} />
      )}
    </header>
  );
};

export default Navbar;

const DropdownMenu = ({ handleDropClick, signOut }) => {
  return (
    <ul className="dropdown-menu">
      <li>
        <a href="profile" className="droplink" onClick={handleDropClick}>
          Profile
        </a>
      </li>
      <li>
        <a href="/" className="signoutlink" onClick={signOut}>
          Sign Out
        </a>
      </li>
    </ul>
  );
};