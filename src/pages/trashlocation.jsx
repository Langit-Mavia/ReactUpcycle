import React from "react";
import Eduvid from "./eduvid";
import Yakin from "./yakin";
import Sponsor from "./sponsor";
import { useNavigate } from 'react-router-dom';

import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const trashLocation = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="main">
        <section className="gmaps section">
          <div className="home__vidcontainer">
            <iframe
              id="maps"
              src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d31732.412925122622!2d106.83502460775138!3d-6.190700372437525!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1ssampah!5e0!3m2!1sid!2sid!4v1683005676790!5m2!1sid!2sid"
              width={1536}
              height={600}
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="home__maps"
            />
            <div className="maps__overlay" />
          </div>
        </section>
        {/*==================== UpGuard. Bin ====================*/}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title about__title">
                Fitur <i>UpGuard.</i> Bin
              </h2>
              <p className="about__description">
                Fitur UpGuard. Bin atau lokasi sampah pada perusahaan Upcycle.
                merupakan fitur yang memungkinkan perusahaan untuk menemukan
                lokasi tong-tong sampah yang dikelola oleh Upcycle. dan
                berpotensi untuk dijadikan bahan baku. Dengan adanya fitur
                UpGuard. Bin, perusahaan Upcycle. dapat meningkatkan efisiensi
                dan efektivitas dalam proses pengambilan sampah dan memastikan
                ketersediaan bahan baku yang memadai untuk proses Upcycle. Hal
                ini juga dapat membantu perusahaan Upcycle., dalam mengurangi
                dampak lingkungan yang dihasilkan oleh limbah sampah.
              </p>
            </div>
            <div className="about__img">
              <div>
                <button className="buttonmaps" onClick={() => window.scrollTo(0, 0)}>Deteksi Lokasi UpGuard. Bin</button>
                <button className="buttonsecondmaps" onClick={() => navigate("/upforest")}>Masuk Ke UpGuard. Forest</button>
              </div>
            </div>
          </div>
        </section>
        <Eduvid />
        <Yakin />
        <Sponsor />
        </main>
    </>
  );
}

export default trashLocation;
