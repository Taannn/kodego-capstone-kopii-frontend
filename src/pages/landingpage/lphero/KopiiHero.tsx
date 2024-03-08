import { Link } from "react-router-dom";
import { KopiiHeroProps } from "../LandingPageProps";


const KopiiHero: React.FC<KopiiHeroProps> = ({ landingHeroProp }) => {
  return (
    <>
        {landingHeroProp.map((l, i) => (
          <section key={i} id="home" className="full-dimension hero d-flex align-items-center ff-main">
          <div className="container">
            <div className="row">
                <div className="col-lg-6 text-light">
                    <h1 className="display-1 ls-1">{l.hero_title}</h1>
                    <p className="lead ff-lead ls-1 lh-1 text-light">{l.hero_about}</p>
                    <Link to="/kopiishop" className="btn btn-primary btn-lg bs-primary text-info hvr-glow text-decoration-none">{l.hero_btn}<i className="fa-solid fa-chevron-right ms-2"></i></Link>
                </div>
            </div>
          </div>
        </section>
        ))}
    </>
  )
}

export default KopiiHero