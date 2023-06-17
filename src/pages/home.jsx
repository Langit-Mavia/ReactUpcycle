import about1 from './../assets/img/about1.png';
import about2 from './../assets/img/about2.png';
import discover1 from './../assets/img/discover1.png';
import discover2 from './../assets/img/discover2.png';
import discover3 from './../assets/img/discover3.png';
import discover4 from './../assets/img/discover4.png';
import discover5 from './../assets/img/discover5.png';
import animate1 from './../assets/img/animate1.jpg';
import animate2 from './../assets/img/animate2.jpg';
import animate3 from './../assets/img/animate3.jpg';
import animate4 from './../assets/img/animate4.jpg';
import animate5 from './../assets/img/animate5.jpg';
import animate6 from './../assets/img/animate6.jpg';
import animate7 from './../assets/img/animate7.jpg';
import animate8 from './../assets/img/animate8.png';

import herovid from './../assets/vid/herovid.mp4';
import video from './../assets/vid/video.mp4';

import React, { useEffect, useState, useRef} from 'react';
import RegisterForm from '../container/sign/register';
import TwitterFillIcon from 'remixicon-react/TwitterFillIcon';
import FacebookBoxFillIcon from 'remixicon-react/FacebookBoxFillIcon';
import InstagramFillIcon from 'remixicon-react/InstagramFillIcon';
import PlayLineIcon from 'remixicon-react/PlayLineIcon';
import PauseLineIcon from 'remixicon-react/PauseLineIcon';
import Swiper from 'swiper';
import {useNavigate} from 'react-router-dom';

const Home = ({user, setUser}) => {
    const [currentModal, setCurrentModal] = useState(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const videoRef = useRef(null);
    
    const navigate = useNavigate();

    const [isOpen, setOpen] = useState(false);
    const [videoId, setVideoId] = useState('');

    const openVideoModal = (id) => {
      setVideoId(id);
      setOpen(true);
    };

    const openModal = (modal) => {
        setCurrentModal(modal);
    };

    const closeModal = () => {
        setCurrentModal(null);
    };

    const playPause = () => {
      if (videoRef.current.paused) {
        // Play video
        videoRef.current.play();
        setIsPlaying(true);
      } else {
        // Pause video
        videoRef.current.pause();
        setIsPlaying(false);
      }
    };

    const handleVideoEnd = () => {
      setIsPlaying(false);
    };
    return (
        <>
        <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home" id="home">
            <div className="home__vidcontainer">
            <video autoPlay muted loop className="home__vid">
                <source src={herovid} type="video/mp4" />
            </video>
            <div className="home__overlay" />
            </div>
            <div className="home__container container grid">
                <div className="home__data">
                <h1 className="home__data-title">Jangan <b>Ragu</b> <br /> Mulai <b>Perubahan!</b></h1>
                {user? ( 
                <button onClick={() => navigate("/banksampah")} className='button'>Ayo Mulai</button>) : (
                    <button onClick={() => openModal('register')} className='button'>Daftar Sekarang</button>
                    )}
                </div>
            {currentModal === 'register' && (
                <RegisterForm isOpen={true} onClose={closeModal} />
                )}
            
            <div className="home__social">
                    <a href="https://www.facebook.com/" target="_blank" className="home__social-link">
                    <FacebookBoxFillIcon size={25} />
                    </a>
                    <a href="https://www.instagram.com/" target="_blank" className="home__social-link">
                    <InstagramFillIcon size={25} />
                    </a>
                    <a href="https://twitter.com/" target="_blank" className="home__social-link">
                        <TwitterFillIcon size={25} />
                    </a>
            </div>
            </div>
        </section>
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
            <div className="about__container container grid">
                <div className="about__data">
                <h2 className="section__title about__title">
                    Apa itu <i>Upcycle.</i>
                </h2>
                <p className="about__description">
                    Sebagai mitra yang menyediakan jasa bank sampah kekinian, <i>UpCycle.</i> memiliki misi untuk memperbaiki lingkungan dengan mengajak masyarakatuntuk mengoptimalkan potensi sampah dan membantu mengurangi dampak negatif sampah terhadap lingkungan. Dengan mengoptimalkan Bank Sampah, UpCycle. Berusaha memberikan pengetahuan pengolahan kembali sampah yang dapat di daur ulang menjadi bahan yang berguna bagi masyarakat.
                </p>
                </div>
                <div className="about__img">
                <div className="about__img-overlay">
                    <img src={about1} alt="" className="about__img-one" />
                </div>
                <div className="about__img-overlay">
                    <img src={about2} alt="" className="about__img-two" />
                </div>
                </div>
            </div>
        </section>
        {/*==================== DISCOVER ====================*/}
        <DiscoverSlider />

        {/*==================== EXPERIENCE ====================*/}
        <section className="animate section" id="animate">
            <h2 className="section__title">Kami Akan Melayani Anda <br /> Dengan Sebuah Pengalaman</h2>
            <p className="section__subtitle">Tekan Gambar Untuk Melihat DIY Tutorial</p>
            <div className="animate__section">
            <div className="card-grid">
                <a
                className="animate__card"
                onClick={() => 
                    openVideoModal('xyzpFiaHdBY')
                }
                >
                <img src={animate1} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Wall Flowerpot</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('2yCp0uIYqQo')
                }
                >
                <img src={animate2} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Cabinet</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('ct9GS_KvkLk')
                }
                >
                <img src={animate3} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Stool</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('Ap8BjkbypHM')
                }
                >
                <img src={animate4} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Box</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('30p_AmHkdv8')
                }
                >
                <img src={animate5} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Pencil Bag</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('1QdNaC1MUZM')
                }
                >
                <img src={animate6} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Post Box</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('eB5Xo51sjxk')
                }
                >
                <img src={animate7} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Table Flowerpot</h3>
                </div>
                </a>

                <a
                className="animate__card"
                onClick={() =>
                    openVideoModal('0bfkXPdD0-s')
                }
                >
                <img src={animate8} alt="" className="card__background" />
                <div className="card__content">
                    <p className="card__subtitles">Let's DIY</p>
                    <h3 className="card__heading">Furnace</h3>
                </div>
                </a>
                <ModalVideo
                    channel="youtube"
                    autoplay
                    isOpen={isOpen}
                    videoId={videoId}
                    onClose={() => setOpen(false)}
                />
            </div>
            </div>
        </section>

        {/*==================== VIDEO ====================*/}
        <section className="video section">
            <h2 className="section__title">Video Tour</h2>
            <div className="video__container container">
            <p className="video__description">
                Tekan Tombol Play Untuk Melihat Keindahan Hutan Yang Tidak Tercemar
            </p>
            <div className="video__content">
                <video id="video-file" ref={videoRef} onEnded={handleVideoEnd}>
                <source
                    src={video}
                    type="video/mp4"
                />
                </video>
                <button
                onClick={playPause}
                className="button button--flex video__button"
                id="video-button"
                >
                {isPlaying ? (
                    <PauseLineIcon size={25} className="ri-play-line video__button-icon" />
                ) : (
                    <PlayLineIcon size={25} className="ri-play-line video__button-icon" />
                )}
                </button>
            </div>
            </div>
        </section>

        <Sponsor />
        </main>
        </>
    );
};

export default Home;


import ModalVideo from 'react-modal-video';
import 'react-modal-video/scss/modal-video.scss';
import Sponsor from './sponsor';

const DiscoverSlider = () => {
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (swiper === null) {
      const swiper = new Swiper('.discover__container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        loop: true,
        spaceBetween: 32,
        coverflowEffect: {
          rotate: 0,
        },
      });
    }
  }, []);

  return (
    <section className="discover section" id="discover">
      <h2 className="section__title">Jelajahi Benda-benda<br />Hasil Upcycling Terbaik Kami </h2>
      <p className="section__subtitle">Geser ke kiri atau ke kanan untuk lihat lebih banyak</p>
      <div className="discover__container container swiper-container">
        <div className="swiper-wrapper">
          {/*==================== DISCOVER 1 ====================*/}
          <div className="discover__card swiper-slide">
            <img src={discover1} alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Table and Shelves</h2>
            </div>
          </div>
          {/*==================== DISCOVER 2 ====================*/}
          <div className="discover__card swiper-slide">
            <img src={discover2} alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Lamp Ornament</h2>
            </div>
          </div>
          {/*==================== DISCOVER 3 ====================*/}
          <div className="discover__card swiper-slide">
            <img src={discover3} alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Seat</h2>
            </div>
          </div>
          {/*==================== DISCOVER 4 ====================*/}
          <div className="discover__card swiper-slide">
            <img src={discover4} alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Flower Pot / Vase</h2>
            </div>
          </div>
          {/*==================== DISCOVER 5 ====================*/}
          <div className="discover__card swiper-slide">
            <img src={discover5} alt="" className="discover__img" />
            <div className="discover__data">
              <h2 className="discover__title">Candle Container</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
