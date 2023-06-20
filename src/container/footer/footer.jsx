import React, { useEffect, useState, useRef} from 'react';
import RegisterForm from '../sign/register';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import YoutubeFillIcon from 'remixicon-react/YoutubeFillIcon';

const Footer = () => {
    const [currentModal, setCurrentModal] = useState(null);

    const openModal = (modal) => {
        top.scrollTo(0, 0);
        setCurrentModal(modal);
    };

    const closeModal = () => {
        setCurrentModal(null);
    };

    return (
    <>
        {/*==================== FOOTER ====================*/}
        <div className="footer section">
        <div className="footer__container container grid">
            <div className="footer__content grid">
            <div className="footer__data">
                <h3 className="footer__title"><i>UpCycle.</i></h3>
                <p className="footer__description">Jangan <b>Ragu</b> <br /> Mulai <b>Perubahan!</b>
                </p>
                <div>
                <a href="https://www.facebook.com/" target="_blank" className="footer__social">
                    <FacebookBoxFillIcon size={16} />
                </a>
                <a href="https://twitter.com/" target="_blank" className="footer__social">
                    <TwitterFillIcon size={16} />
                </a>
                <a href="https://www.instagram.com/" target="_blank" className="footer__social">
                    <InstagramFillIcon size={16}/>
                </a>
                <a href="https://www.youtube.com/" target="_blank" className="footer__social">
                    <YoutubeFillIcon size={16}/>
                </a>
                </div>
            </div>
            <div className="footer__data">
                <h3 className="footer__subtitle">About</h3>
                <ul>
                <li className="footer__item">
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li className="footer__item">
                    <a href="#discover" className="footer__link"><i>UpCycle.</i> Craft</a>
                </li>
                <li className="footer__item">
                    <a href="#animate" className="footer__link"><i>UpCycle.</i> Animate</a>
                </li>
                </ul>
            </div>
            <div className="footer__data">
                <h3 className="footer__subtitle">Company</h3>
                <ul>
                <li className="footer__item">
                    <a href className="footer__link"><i>UpCycle.</i> Team</a>
                </li>
                <li className="footer__item">
                    <a onClick={() => openModal('register')} className='footer__link'>Become a member</a>
                </li>
                </ul>
            </div>
            {currentModal === 'register' && (
                <RegisterForm isOpen={true} onClose={closeModal} />
            )}
            <div className="footer__data">
                <h3 className="footer__subtitle">Support</h3>
                <ul>
                <li className="footer__item">
                    <a href className="footer__link">FAQs</a>
                </li>
                <li className="footer__item">
                    <a href className="footer__link">Support Center</a>
                </li>
                <li className="footer__item">
                    <a href className="footer__link">Contact Us</a>
                </li>
                </ul>
            </div>
            </div>
            <div className="footer__rights">
            <p className="footer__copy">© 2023 <i>UpCycle. This Page is a submission for <a href="https://skilvul.com">Skilvul</a> Assignment Project</i></p>
            <div className="footer__terms">
                <a href="#" className="footer__terms-link">Terms &amp; Agreements</a>
                <a href="#" className="footer__terms-link">Privacy Policy</a>
            </div>
            </div>
        </div>
        </div>
    </>
    );
}

export default Footer;