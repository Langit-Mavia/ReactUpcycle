import sponsors1 from './../assets/img/sponsors1.png';
import sponsors2 from './../assets/img/sponsors2.png';
import sponsors3 from './../assets/img/sponsors3.png';
import logo from './../assets/img/logo.png';

const Sponsor = () => {
    return (
        <>
        {/*==================== SPONSORS ====================*/}
        <section className="sponsor section">
          <div className="sponsor__container container grid">
            <div className="sponsor__content">
              <img
                src={sponsors1}
                alt=""
                className="sponsor__img"
              />
            </div>
            <div className="sponsor__content">
              <img
                src={sponsors2}
                alt=""
                className="sponsor__img"
              />
            </div>
            <div className="sponsor__content">
              <img
                src={sponsors3}
                alt=""
                className="sponsor__img"
              />
            </div>
            <img src={logo} className="footer__img" />
          </div>
        </section>
        </>
    )
}

export default Sponsor;