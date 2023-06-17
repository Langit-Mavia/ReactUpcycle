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

        </section>
    );
};

export default Eduvid;