import image_16 from './../assets/img/image-16.png';
import pngtreegarbage_can_with_waste_vector7346990_1 from './../assets/img/pngtreegarbage-can-with-waste-vector7346990-1.png';
import image_17 from './../assets/img/image-17.png';
import image_18 from './../assets/img/image-18.png';
import Group_127 from './../assets/img/Group 127.png';
import image_19 from './../assets/img/image-19.png';
import manfaat1 from './../assets/img/manfaat1.png';
import manfaat2 from './../assets/img/manfaat2.png';
import bank1 from './../assets/img/bank1.png';
import bank2 from './../assets/img/bank2.png';
import sponsors1 from './../assets/img/sponsors1.png';
import sponsors2 from './../assets/img/sponsors2.png';
import sponsors3 from './../assets/img/sponsors3.png';
import logo from './../assets/img/logo.png';
import Herobg from './../assets/img/hero-section-1-bg.png';
import React from 'react';
import Eduvid from './eduvid';
import Sponsor from './sponsor';
import Yakin from './yakin';


function BankSampah(){
   return(
      <main className="main">
        <section className="home" id="home">
          <div className="home__vidcontainer">
            <img
              src={Herobg}
              alt=""
              className="home__vid"
            />
            <div className="home__overlay" />
          </div>
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__data-title center">
                Apa itu <b>Re-Cycler?</b>
              </h1>
              <h3 className="home__data-subtitle">
                Re-Cycle. dari UpCycle. merupakan fitur utama yang membahas
                tentang Bank Sampah dimana fitur ini bertujuan untuk memperbaiki
                lingkungan melalui optimalisasi sampah dan mengurangi dampak
                negatif sampah. Fitur ini memberikan pengetahuan tentang
                pengolahan sampah menjadi bahan yang bermanfaat bagi masyarakat
                dan lingkungan.
              </h3>
              <a href="./setorSampah.jsx" className="button-center">
                Setor Sampahmu
              </a>
            </div>
          </div>
        </section>

        <section className="sampah section" id="sampah">
          <div className="sampah__container container">
            <div className="sampah__data">
              <h1 className="section__title sampah__title center">
                Mari Mengenal Jenis-Jenis Sampah
              </h1>
              <div className="baris">
                <div className="card">
                  <img
                    src={image_16}
                    alt="Sampah Daur Ulang"
                    style={{
                      marginTop: "40px",
                      width: "auto",
                      height: "160px",
                    }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Daur Ulang</b>
                    </div>
                    <p className="card__description">
                      Sampah daur ulang dapat dibagi menjadi kertas, plastik,
                      logam, kaca, dan tekstil yang dapat diproses kembali
                      menjadi bahan baku baru.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={pngtreegarbage_can_with_waste_vector7346990_1}
                    alt="Sampah Daur Ulang"
                    style={{ padding: "0 0", height: "200px" }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Dapur</b>
                    </div>
                    <p className="card__description">
                      Sampah dapur adalah jenis sampah organik yang berasal dari
                      sisa makanan, sayuran, buah-buahan, dan bahan makanan
                      lainnya yang dapat terurai secara alami melalui proses
                      kompos.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={image_17}
                    alt="Sampah Daur Ulang"
                    style={{ marginTop: "20px", height: "180px" }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Barang Bekas</b>
                    </div>
                    <p className="card__description">
                      Sampah barang bekas adalah jenis sampah non-organik berupa
                      barang-barang elektronik, perlengkapakan rumah tangga, dan
                      lainnya.
                    </p>
                  </div>
                </div>
              </div>
              <div className="baris">
                <div className="card">
                  <img
                    src={image_18}
                    alt="Sampah Daur Ulang"
                    style={{
                      marginTop: "40px",
                      width: "auto",
                      height: "160px",
                    }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Furniture</b>
                    </div>
                    <p className="card__description">
                      Sampah furniture adalah jenis sampah yang meliputi
                      barang-barang seperti meja, kursi, lemari, dan perabotan
                      rumah tangga lainnya namun sudah rusak atau tidak
                      terpakai.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={Group_127}
                    alt="Sampah Daur Ulang"
                    style={{
                      padding: "50px 0",
                      maxWidth: "200px",
                      maxHeight: "200px",
                    }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Puing</b>
                    </div>
                    <p className="card__description">
                      Sampah Puing adalah jenis sampah yang terdiri dari
                      sisa-sisa bangunan atau konstruksi yang rusak atau
                      dirobohkan atau pengerukan.
                    </p>
                  </div>
                </div>
                <div className="card">
                  <img
                    src={image_19}
                    alt="Sampah Daur Ulang"
                    style={{ marginTop: "20px", height: "180px" }}
                  />
                  <div className="info-container">
                    <div className="card__title">
                      <b>Sampah Alam</b>
                    </div>
                    <p className="card__description">
                      Sampah alam adalah jenis sampah yang berasal dari
                      bahan-bahan organik yang terurai secara alami, seperti
                      daun, ranting, atau sisa-sisa tumbuhan.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

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

        <section className="about section" id="manfaat">
          <div className="about__container container grid">
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src={bank1}
                  alt=""
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src={bank2}
                  alt=""
                  className="about__img-two"
                />
              </div>
            </div>
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
          </div>
        </section>

        <Eduvid />
        <Yakin />
        <Sponsor  />
      </main>
    )
}

export default BankSampah;