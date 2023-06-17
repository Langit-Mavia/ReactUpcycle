import Eduvid from "./eduvid";
import Mission from "./mission";
import Sponsor from "./sponsor";
import Yakin from "./yakin";

const upChallenge = () => {
  return (
    <>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home" id="home">
          <div className="home__vidcontainer">
            <img
              src="./assets/img/hero-section-1-bg.png"
              alt=""
              className="home__vid"
            />
            <div className="home__overlay" />
          </div>
          <div className="home__container container grid">
            <div className="home__data">
              <h1 className="home__data-title center">
                Apa itu <b>UpChallenge</b>
              </h1>
              <h3 className="home__data-subtitle">
                UpChallenge dari UpCycle. merupakan fitur yang bertujuan untuk
                mengajak masyarakat untuk berpartisipasi dalam mengurangi sampah
                di lingkungan sekitar. Dengan cara memberikan beberapa challenge
                yang dapat diikuti oleh masyarakat untuk mendapatkan saldo yang
                dapat ditukarkan.
              </h3>
              <a href="#challenge" className="button-center">
                Lihat Challenge
              </a>
            </div>
          </div>
        </section>
        <Mission />
        <Eduvid />
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
                  src="assets/img/manfaat1.png"
                  alt=""
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src="assets/img/manfaat2.png"
                  alt=""
                  className="about__img-two"
                />
              </div>
            </div>
          </div>
        </section>
        {/*==================== MANFAAT ====================*/}
        <section className="about section" id="manfaat">
          <div className="about__container container grid">
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src="assets/img/bank1.png"
                  alt=""
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src="assets/img/bank2.png"
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
        <Yakin />
        <Sponsor />
      </main>
    </>
  );
};
export default upChallenge;
