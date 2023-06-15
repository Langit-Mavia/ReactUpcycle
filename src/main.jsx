import React from 'react'
import ReactDOM from 'react-dom/client'
import Index from './pages/index.jsx'
import './assets/css/styles.css'
import {ScrollReveal, ScrollRight, ScrollLeft} from "./container/reveal/Reveal"; 
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate, BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <ScrollReveal
        targetClass=".home__data, .home__social-link, .home__info, .discover__container, 
                    .animate__card, .place__card, .sponsor__content, .footer__data, .footer__rights"
        cascadeDelay={100}
      />
      
      <ScrollLeft
        targetClass=".about__data, sampah__data, 
                    .video__description, .contact-title"
        cascadeDelay={100}
      />
      
      <ScrollRight
        targetClass=".about__img-overlay, .video__content, .name, .city, .email, .zipCode, .check, 
                      #submit-form, .buttonmaps, .buttonsecondmaps"
        cascadeDelay={100}
      />
    <ToastContainer />
    <Index />
    
  </BrowserRouter>,
)
