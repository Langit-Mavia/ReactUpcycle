import React, { useRef, useState } from 'react';
import PlayLineIcon from 'remixicon-react/PlayLineIcon';
import PauseLineIcon from 'remixicon-react/PauseLineIcon';;
import video_1 from './../assets/vid/Pilah Sampah dari Rumah Yuk!.mp4'

const Eduvid = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);

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
        <section className="video section">
            <h2 className="section__title">Video Tour</h2>
            <div className="video__container container">
            <p className="video__description">
                Tekan Tombol Play Untuk Melihat Keindahan Hutan Yang Tidak Tercemar
            </p>
            <div className="video__content">
                <video id="video-file" ref={videoRef} onEnded={handleVideoEnd}>
                <source
                    src={video_1}
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
    );
};

export default Eduvid;