import Sponsor from "./sponsor";

const upForest = () => {
  return (
      <main className="main">
        <section className="gmaps section">
          <div className="home__vidcontainer">
            <iframe
              id="maps"
              src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d247084.59035402557!2d101.5423038713239!3d0.30898380834220124!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sid!2sid!4v1683006631220!5m2!1sid!2sid"
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
                Fitur <i>UpGuard.</i> Forest
              </h2>
              <p className="about__description">
                Fitur UpGuard. Forest pada perusahaan Upcycle. merupakan fitur
                yang menggunakan teknologi Artificial Intelligence (AI) untuk
                mendeteksi secara dini penebangan hutan secara liar. Fitur ini
                berguna untuk mengawasi kegiatan illegal logging dan mencegah
                kerusakan pada hutan dan ekosistem yang ada di dalamnya. Fitur
                ini menggunakan pemetaan daerah-daerah yang rentan: Fitur ini
                memungkinkan perusahaan Upcycle untuk memetakan daerah-daerah
                yang rentan terhadap aktivitas illegal logging. Dengan memetakan
                daerah-daerah tersebut, perusahaan dapat mengambil tindakan
                preventif dan memastikan keamanan hutan dan ekosistem yang ada
                di dalamnya.
              </p>
            </div>
            <div className="about__img">
              <div>
                <button
                  className="buttonmaps"
                  onclick="location.href='#'"
                  type="submit"
                >
                  Deteksi Lokasi UpGuard. Forest
                </button>
                <button
                  className="buttonsecondmaps"
                  onclick="location.href='trashLocation.html'"
                  type="submit"
                >
                  Masuk Ke UpGuard. Bin
                </button>
              </div>
            </div>
          </div>
        </section>
        {/*==================== ABOUT ====================*/}
        <section className="about section" id="about">
          <div className="about__container container grid">
            <div className="about__img">
              <div className="about__img-overlay">
                <img
                  src="assets/img/guardian 1.png"
                  alt=""
                  className="about__img-one"
                />
              </div>
              <div className="about__img-overlay">
                <img
                  src="assets/img/guardian-2.png"
                  alt=""
                  className="about__img-two"
                />
              </div>
            </div>
            <div className="about__data">
              <h2 className="section__title about__title">
                Bagaimana Cara Kerja <i>UpGuard.</i> Forest
              </h2>
              <p className="about__description">
                UpGuard Forest menggunakan teknologi bernama TensorFlow yang
                memanfaatkan Google AI. Alat ini mampu merekam seluruh suara
                yang ada di hutan, mencakup suara spesies binatang hingga suara
                gergaji mesin. Kemudian alat tersebut akan mengirimkannya secara
                real-time ke database server. Jadi, suara-suara yang terekam
                tersebut akan dikenali dan dideteksi secara otomatis. Tentunya
                UpGuard Forest akan membantu petugas patroli dan masyarakat
                sekitar untuk memantau keadaan hutan dan mencegah penebangan
                liar.
              </p>
            </div>
          </div>
        </section>
        
        <Sponsor/>
      </main>
  );
}
export default upForest;
