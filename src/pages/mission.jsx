import image_43 from './../assets/img/image 43.png';
import image_44 from './../assets/img/image 44.png';
import image_45 from './../assets/img//image 45.png';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Mission = () => {
    const handleMisson = () => {
        toast.success('You have successfully taken this Challenge', { position: toast.POSITION.TOP_CENTER })
    }
    return (
        <>
        {/*==================== ABOUT SAMPAH ====================*/}
        <section className="sampah section" id="challenge">
            <div className="sampah__container container">
                <div className="sampah__data">
                <h1 className="section__title sampah__title center">
                    UpChallenge Hari Ini
                </h1>
                <div className="baris">
                    <div
                    className="card"
                    onClick={handleMisson}
                    >
                    <img
                        src={image_43}
                        alt="Zero Waste 10 Kg"
                        style={{
                        marginTop: "40px",
                        width: "auto",
                        height: "160px",
                        }}
                    />
                    <div className="info-container">
                        <div className="card__title">
                        <b>Zero Waste 10 Kg</b>
                        </div>
                        <p
                        className="card__description"
                        style={{ color: "#52C41A" }}
                        >
                        Rp10.000,-
                        </p>
                        <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 10 Kg.
                        </p>
                    </div>
                    </div>
                    <div
                    className="card"
                    onClick={handleMisson}
                    >
                    <img
                        src={image_44}
                        alt="Share Kindness"
                        style={{
                        marginTop: "40px",
                        width: "auto",
                        height: "160px",
                        }}
                    />
                    <div className="info-container">
                        <div className="card__title">
                        <b>Share Kindness</b>
                        </div>
                        <p
                        className="card__description"
                        style={{ color: "#52C41A" }}
                        >
                        Rp10.000,-
                        </p>
                        <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 10 Kg.
                        </p>
                    </div>
                    </div>
                    <div
                    className="card"
                    onClick={handleMisson}
                    >
                    <img
                        src={image_45}
                        alt="Balance"
                        style={{
                        marginTop: "40px",
                        width: "auto",
                        height: "160px",
                        }}
                    />
                    <div className="info-container">
                        <div className="card__title">
                        <b>Change Your Balance</b>
                        </div>
                        <p
                        className="card__description"
                        style={{ color: "#52C41A" }}
                        >
                        Rp10.000,-
                        </p>
                        <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 10 Kg.
                        </p>
                    </div>
                    </div>
                </div>
                </div>
                <div className="baris">
                <div
                    className="card"
                    onClick={handleMisson}
                >
                    <img
                    src={image_43}
                    alt="Zero Waste 5 Kg"
                    style={{ marginTop: "40px", width: "auto", height: "160px" }}
                    />
                    <div className="info-container">
                    <div className="card__title">
                        <b>Zero Waste 5 Kg</b>
                    </div>
                    <p className="card__description" style={{ color: "#52C41A" }}>
                        Rp5.000,-
                    </p>
                    <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 5 Kg.
                    </p>
                    </div>
                </div>
                <div
                    className="card"
                    onClick={handleMisson}
                >
                    <img
                    src={image_43}
                    alt="Zero Waste 2 Kg"
                    style={{ marginTop: "40px", width: "auto", height: "160px" }}
                    />
                    <div className="info-container">
                    <div className="card__title">
                        <b>Zero Waste 2 Kg</b>
                    </div>
                    <p className="card__description" style={{ color: "#52C41A" }}>
                        Rp2.000,-
                    </p>
                    <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 2 Kg.
                    </p>
                    </div>
                </div>
                <div
                    className="card"
                    onClick={handleMisson}
                >
                    <img
                    src={image_43}
                    alt="Zero Waste 1 Kg"
                    style={{ marginTop: "40px", width: "auto", height: "160px" }}
                    />
                    <div className="info-container">
                    <div className="card__title">
                        <b>Zero Waste 1 Kg</b>
                    </div>
                    <p className="card__description" style={{ color: "#52C41A" }}>
                        Rp1.000,-
                    </p>
                    <p className="card__description">
                        Setorkan Sampah (Jenis Sampah Daur Ulang) Sebanyak 1 Kg.
                    </p>
                    </div>
                </div>
                </div>
            </div>
            </section>
        </>
    );
}

export default Mission;