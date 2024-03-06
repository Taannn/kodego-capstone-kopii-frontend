import Div from "../../components/Div";

const featuresData = [
  {
    img_src: "https://kopiiiiiimg.netlify.app/assets/images/vision.jpg",
    title: "Elevating Global Coffee Culture: Kopii's Vision",
    text:
      "At Kopii, we envision more than just a cup of coffee; we see a global community coming together to celebrate diversity, support local businesses, and elevate the entire coffee experience. Our vision is to redefine the very essence of coffee culture, making it a shared journey of joy and connection.",
  },
  {
    img_src: "https://kopiiiiiimg.netlify.app/assets/images/mission.jpg",
    title: "Empowering Through Integration: Kopii's Mission",
    text:
      "Kopii is on a mission to empower coffee enthusiasts and local coffee shop owners alike. Through our seamlessly integrated platform, we offer not just convenience and variety but also a sense of community. Join us as we create a space where every coffee lover finds empowerment and every local business flourishes.",
  },
];

const featuresList = [
  {
    icon_class: "fa-solid fa-mug-saucer",
    title: "Community-Driven Platform",
    text:
      "Connect with coffee enthusiasts from around the world. Kopii is more than a platform; it's a vibrant community celebrating the love for coffee.",
  },
  {
    icon_class: "fa-solid fa-handshake",
    title: "Supporting Local Businesses",
    text:
      "By choosing Kopii, you support local coffee businesses. We're committed to fostering growth and recognition for small coffee shops.",
  },
  {
    icon_class: "fa-solid fa-wand-sparkles",
    title: "Elevating Coffee Experience",
    text:
      "Experience coffee like never before. Kopii offers a seamless integration of convenience, variety, and a sense of community for every coffee lover.",
  },
];

const KopiiAbout = () => {
  return (
    <>
      <section className="py-6 patterns-bg">
        <div className="container">
          {featuresData.map((feature, index) => (
            <Div key={index} styles={`row gap-5 justify-content-center align-items-center ${index === 0 ? 'mt-2': 'mt-5'}`}>
              <div className="col-5 text-center d-none d-lg-block">
                <img className="img-fluid shadow" src={feature.img_src} alt="" />
              </div>
              <div className="col-11 col-lg-5 text-success ff-main">
                <h1 className="text-info">{feature.title}</h1>
                <p className="ls-1 ff-lead fw-bold mt-4 lh-1">{feature.text}</p>
              </div>
            </Div>
          ))}
          <Div styles="row text-center text-light mt-6">
            <h2 className="ff-main fs-1">Kopii's Features</h2>
          </Div>
          <Div styles="row mt-4 gap-4 gap-lg-0">
            {featuresList.map((feature, index) => (
              <Div key={index} styles="col-lg-4 shadow-lg">
                <div className="card bg-danger bs-danger border-0 p-2">
                  <div className="card-body text-info">
                    <i className={`fa-solid ${feature.icon_class} fs-3 mb-3`}></i>
                    <h5 className="card-title ff-main mb-3">{feature.title}</h5>
                    <p className="card-text ff-lead fw-bold ls-1 lh-1">{feature.text}</p>
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
