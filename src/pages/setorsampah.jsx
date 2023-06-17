import Frame_2012 from './../assets/img/Frame 2012.png';
import Large_Image from './../assets/img/Large Image.png';
import image_16 from './../assets/img/image-16.png';
import pngtreegarbage_can_with_waste_vector7346990_1 from './../assets/img/pngtreegarbage-can-with-waste-vector7346990-1.png';
import image_17 from './../assets/img/image-17.png';
import image_18 from './../assets/img/image-18.png';
import Group_127 from './../assets/img/Group 127.png';
import image_19 from './../assets/img/image-19.png';
import Eduvid from './eduvid';
import Sponsor from './sponsor';
import Yakin from './yakin';
import Mission from './mission';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function setorSampah() {
  const Handlersampah = () => {
    toast.success('Your transaction has been processed', { position: toast.POSITION.TOP_CENTER });
  }
  return (
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
              src={Large_Image}
              alt="Setor Sampah"
              width="600px"
              style={{ marginLeft: "-50px" }}
            />
            <div>
              <div style={{ margin: 0 }}>
                <p className="form-title">Re-Cycler</p>
                <p className="form-subtitle">
                  Selamat datang di sistem Re-Cycler, Pengguna. Silahkan
                  Masukkan data sesuai kebutuhan kamu!
                </p>
              </div>
              <div className="form">
                <select name="Jenis Sampah">
                  <option disabled selected>
                    Masukkan Jenis Sampah
                  </option>
                  <option value="daurUlang">Sampah Daur Ulang</option>
                  <option value="dapur">Sampah Dapur</option>
                  <option value="barangBekas">Sampah Barang Bekas</option>
                  <option value="furniture">Sampah Furniture</option>
                  <option value="puing">Sampah Puing</option>
                  <option value="alam">Sampah Alam</option>
                </select>
                <input type="text" placeholder="Sampah Apa Yang Mau Disetor?" />
                <select name="Metode Setor Sampah">
                  <option disabled selected>
                    Masukkan Metode Setor Sampah
                  </option>
                  <option value="jemput">Pick Up By Courrier</option>
                  <option value="setor">Drop To Drop Point</option>
                </select>
                <button className="buttonSetorSampah" type="submit" onClick={Handlersampah}>
                  Setor
                </button>
              </div>
            </div>
          </div>
        </section>
        <Mission />
        <Eduvid />
        <Yakin />
        <Sponsor/>  
      </main>
  );
}

export default setorSampah;
