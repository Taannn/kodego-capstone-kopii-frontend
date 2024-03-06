import Div from "../../components/Div"

const KopiiAbout = () => {
  return (
    <>
      <section className="py-6 patterns-bg">
        <div className="container">
          <Div styles="row gap-5 justify-content-center align-items-center">
            <div className="col-11 col-lg-5 text-success ff-main">
              <h1 className="text-info">Elevating Global Coffee Culture: Kopii's Vision</h1>
              <p className="ls-1 ff-lead fw-bold mt-4 lh-1">
                At Kopii, we envision more than just a cup of coffee; we see a global community coming together to celebrate diversity, support local businesses, and elevate the entire coffee experience. Our vision is to redefine the very essence of coffee culture, making it a shared journey of joy and connection.
              </p>
            </div>
            <div className="col-5 text-center d-none d-lg-block">
              <img className="img-fluid shadow" src="https://kopiiiiiimg.netlify.app/assets/images/vision.jpg" alt="" />
            </div>
          </Div>
          <Div styles="row gap-5 justify-content-center align-items-center mt-6">
            <div className="col-5 text-center d-none d-lg-block">
              <img className="img-fluid shadow" src="https://kopiiiiiimg.netlify.app/assets/images/mission.jpg" alt="" />
            </div>
            <div className="col-11 col-lg-5 text-success ff-main">
              <h1 className="text-info">Empowering Through Integration: Kopii's Mission</h1>
              <p className="ls-1 ff-lead fw-bold mt-4 lh-1">
                Kopii is on a mission to empower coffee enthusiasts and local coffee shop owners alike. Through our seamlessly integrated platform, we offer not just convenience and variety but also a sense of community. Join us as we create a space where every coffee lover finds empowerment and every local business flourishes.
              </p>
            </div>
          </Div>
          <Div styles="row text-center text-light mt-6">
            <h2 className="ff-main fs-1">Kopii's Features</h2>
          </Div>
          <Div styles="row mt-4 gap-4 gap-lg-0">
            <Div styles="col-lg-4 shadow-lg">
              <div className="card bg-danger bs-danger border-0 p-2">
                <div className="card-body text-info">
                  <i className="fa-solid fa-mug-saucer fs-3 mb-3"></i>
                  <h5 className="card-title ff-main mb-3">Community-Driven Platform</h5>
                  <p className="card-text ff-lead fw-bold ls-1 lh-1">
                    Connect with coffee enthusiasts from around the world. Kopii is more than a platform; it's a vibrant community celebrating the love for coffee.
                  </p>
                </div>
              </div>
            </Div>
            <Div styles="col-lg-4 shadow-lg">
              <div className="card bg-danger bs-danger border-0 p-2">
                <div className="card-body text-info">
                  <i className="fa-solid fa-handshake fs-3 mb-3"></i>
                  <h5 className="card-title ff-main mb-3">Supporting Local Businesses</h5>
                  <p className="card-text ff-lead fw-bold ls-1 lh-1">
                    By choosing Kopii, you support local coffee businesses. We're committed to fostering growth and recognition for small coffee shops.
                  </p>
                </div>
              </div>
            </Div>
            <Div styles="col-lg-4 shadow-lg">
              <div className="card bg-danger bs-danger border-0 p-2">
                <div className="card-body text-info">
                  <i className="fa-solid fa-wand-sparkles fs-3 mb-3"></i>
                  <h5 className="card-title ff-main mb-3">Elevating Coffee Experience</h5>
                  <p className="card-text ff-lead fw-bold ls-1 lh-1">
                    Experience coffee like never before. Kopii offers a seamless integration of convenience, variety, and a sense of community for every coffee lover.
                  </p>
                </div>
              </div>
            </Div>
          </Div>
        </div>
      </section>
    </>
  )
}

export default KopiiAbout