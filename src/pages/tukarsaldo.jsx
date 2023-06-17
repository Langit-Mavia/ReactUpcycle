import Frame_2012 from './../assets/img/Frame 2012.png';
import Frame_2050 from './../assets/img/Frame 2050.png';
import manfaat1 from './../assets/img/manfaat1.png';
import manfaat2 from './../assets/img/manfaat2.png';
import bank1 from './../assets/img/bank1.png';
import bank2 from './../assets/img//bank2.png';
import Eduvid from "./eduvid";
import Sponsor from "./sponsor";
import Yakin from "./yakin";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useState } from 'react';
import Mission from './mission';

const tukarSaldo = () => {
  const [selectedMethod, setSelectedMethod] = useState('');
  const [walletNumber, setWalletNumber] = useState('');
  const [saldoAmount, setSaldoAmount] = useState('');
  const handleTukarSaldo = () => {
    toast.warning('Your transaction is being processed', { position: toast.POSITION.TOP_CENTER });
    setTimeout(() => {
      if(selectedMethod === '' || walletNumber === '' || saldoAmount === ''){
        toast.error('Please fill all the fields', { position: toast.POSITION.TOP_CENTER });
      } else if(saldoAmount < 50000){
        toast.error('Minimum amount to be withdrawn is Rp. 50.000,-', { position: toast.POSITION.TOP_CENTER });
      }
      else{
        setTimeout(() => {
        toast.success('Your transaction has been processed', { position: toast.POSITION.TOP_CENTER });
        setSelectedMethod('');
        setWalletNumber('');
        setSaldoAmount('');
        }, 3000);
      };
    }, 2000);
  }
  return (
    <>
      <main className="main">
        {/*==================== HOME ====================*/}
        <section className="home section" id="home">
          <div className="home__vidcontainer">
            <img src={Frame_2012} alt="" className="home__vid" />
            <div className="home__overlay" />
          </div>
          <div className="ss-bagian1">
            <img
              src={Frame_2050}
              alt="Setor Sampah"
              width="600px"
              style={{ marginLeft: "-50px" }}
            />
            <div className="form">
              <select name="Jenis Pencairan" value={selectedMethod} onChange={(e) => setSelectedMethod(e.target.value)}>
                <option disabled value="">Pilih Metode Pencairan</option>
                <option value="gopay">GoPay</option>
                <option value="shopeepay">ShopeePay</option>
                <option value="ovo">OVO</option>
                <option value="dana">Dana</option>
                <option value="linkaja">LinkAja</option>
                <option value="bca">Bank BCA</option>
                <option value="bri">Bank BRI</option>
                <option value="bni">Bank BNI</option>
                <option value="bsi">Bank BSI</option>
                <option value="btn">Bank BTN</option>
                <option value="mandiri">Bank Mandiri</option>
              </select>
              <input
                type="text"
                value={walletNumber}
                onChange={(e) => setWalletNumber(e.target.value)}
                placeholder="Masukkan Nomor E-Wallet / Rekening Anda"
              />
              <div style={{ display: "flex", flexDirection: "column" }}>
                <input
                  type="text"
                  value={saldoAmount}
                  onChange={(e) => setSaldoAmount(e.target.value)}
                  placeholder="Masukkan Jumlah Saldo Yang Ingin Dicairkan"
                />
                <div style={{ color: "white", paddingTop: "10px" }}>
                  *Minimum Saldo Dicairkan Rp. 50.000,-
                </div>
              </div>
              <button
                className="tukarSaldo button"
                onClick={handleTukarSaldo}
                type="submit"
              >
                Tukar Saldo
              </button>
            </div>
          </div>
        </section>
        <Mission/>
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
        {/*==================== MANFAAT ====================*/}
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
        <Sponsor />
      </main>
    </>
  );
}

export default tukarSaldo;
