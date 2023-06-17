import Frame_2012 from './../assets/img/Frame 2012.png';
import Frame_2050 from './../assets/img/Frame 2050.png';
import image_43 from './../assets/img/image 43.png';
import image_44 from './../assets/img/image 44.png';
import image_45 from './../assets/img/image 45.png';
import manfaat1 from './../assets/img/manfaat1.png';
import manfaat2 from './../assets/img/manfaat2.png';
import bank1 from './../assets/img/bank1.png';
import bank2 from './../assets/img/bank2.png';
import React from "react";
import Eduvid from "./eduvid";
import Yakin from "./yakin";
import Sponsor from './sponsor';
import { useNavigate } from 'react-router-dom';
import Mission from './mission';


const Saldo = () => {
  const navigate = useNavigate();
  return (
    <>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__vidcontainer">
            <img
              src={Frame_2012}
              alt=""
              className="home__vid"
            />
            <div className="home__overlay" />
          </div>
          <div className="ss-bagian1">
            <img
              src={Frame_2050}
              alt="Setor Sampah"
              style={{ marginLeft: "-50px" }}
            />
            <div className="bg1">
              <div>
                <div>Ballance :</div>
                <div>Rp. 10.000,00</div>
                <br />
                <div>Catatan :</div>
                <div>
                  1. Saldo Berlaku Selama Masih Menjadi Anggota Bank Sampah
                  UpCycle
                </div>
                <div>2. Pencairan Saldo Minimum Rp. 50.000,-</div>
                <br />
              </div>
              <button className="buttonsecondmaps" onClick={() => navigate("/tukarsaldo")}>Tukar Saldo</button>
            </div>
          </div>
        </section>
        <Mission />
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__data">
              <h2 className="section__title about__title">
                Apa Sih Manfaat dari Mengelola Sampah?
              </h2>
              <p className="about__description">
                Mengelola sampah dapat mengurangi polusi, emisi gas rumah kaca,
                dan penggunaan sumber daya alam, serta memberikan manfaat
                finansial dari sampah yang masih bernilai ekonomi seperti
                kertas, logam, dan plastik. Sebagai perusahaan Bank Sampah
                kekinian, UpCycle berkomitmen menjaga lingkungan dengan
                Re-Cycler, fitur Bank Sampah inovatif yang memudahkan masyarakat
                memilah dan menjual sampah bernilai ekonomi ke UpCycle.
              </p>
            </div>
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src={manfaat1}
                  alt=""
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src={manfaat2}
                  alt=""
                  className="about__img-two"
                />
              </div>
            </div>
          </div>
        </section>
        
      </main>
    </>
  );
}

export default Saldo;
