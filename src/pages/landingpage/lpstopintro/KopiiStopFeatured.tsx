import { Link } from "react-router-dom"
import { KopiiStopFeaturedProps } from "../LandingPageProps"

const KopiiStopFeatured: React.FC<KopiiStopFeaturedProps> = ({ landingStopIntro }) => {
  return (
    <>
      {landingStopIntro.map((l, i) => (
        <section key={i} className="kopii-stop bg-success pb-5 pt-5" id="kopii_stop">
          <div className="container">
            <div className="row justify-content-between align-items-center pt-5">
              <div className="col-lg-6 text-dark ff-main">
                <h1 className="text-light display-4">{l.title}</h1>
                <p className="ls-1 ff-lead fw-bold mt-4 lh-1">
                  {l.about}
                </p>
                <Link to="/kopiistop" className="btn btn-danger btn-lg bs-danger text-info hvr-glow">
                  {l.btn}
                  <i className="fa-solid fa-chevron-right ms-2"></i>
                </Link>
              </div>
              <div className="col-6 d-none rounded overflow-hidden d-lg-block text-center">
                <img className="img-fluid rounded" src={l.img} alt="" />
              </div>
            </div>
          </div>
        </section>
      ))}
    </>
  )
}

export default KopiiStopFeatured