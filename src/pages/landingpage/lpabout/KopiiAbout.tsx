import Div from "../../../components/Div";
import { KopiiAboutProps } from "../LandingPageProps";

const KopiiAbout: React.FC<KopiiAboutProps> = ({ landingAboutData, landingAboutList }) => {
  return (
    <>
      <section className="py-6 patterns-bg">
        <div className="container">
          {landingAboutData.map((item, index) => (
            <Div key={index} styles={`row gap-5 justify-content-center align-items-center ${index === 0 ? 'mt-2': 'mt-5'}`}>
              <div className="col-5 text-center d-none d-lg-block">
                <img className="img-fluid shadow" src={item.img_src} alt="" />
              </div>
              <div className="col-11 col-lg-5 text-success ff-main">
                <h1 className="text-info">{item.title}</h1>
                <p className="ls-1 ff-lead fw-bold mt-4 lh-1">{item.text}</p>
              </div>
            </Div>
          ))}
          <Div styles="row text-center text-light mt-6">
            <h2 className="ff-main fs-1">Kopii's Features</h2>
          </Div>
          <Div styles="row mt-4 gap-4 gap-lg-0">
            {landingAboutList.map((item, index) => (
              <Div key={index} styles="col-lg-4 shadow-lg">
                <div className="card bg-danger bs-danger border-0 p-2">
                  <div className="card-body text-info">
                    <i className={`fa-solid ${item.icon_class} fs-3 mb-3`}></i>
                    <h5 className="card-title ff-main mb-3">{item.title}</h5>
                    <p className="card-text ff-lead fw-bold ls-1 lh-1">{item.text}</p>
                  </div>
                </div>
              </Div>
            ))}
          </Div>
        </div>
      </section>
    </>
  );
};

export default KopiiAbout;
