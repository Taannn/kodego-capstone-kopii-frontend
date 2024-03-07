import { KopiiTestimonialsProps } from "../LandingPageProps";

const KopiiTestimonials: React.FC<KopiiTestimonialsProps> = ({ landingTestimonials }) => {
  return (
    <>
      <section id="reviews" className="testimonials ff-main bg-sage pb-5">
        <div className="container">
          <div className="row">
            <div className="col my-5 text-center">
              <h1>Reviews</h1>
            </div>
          </div>
          <div className="row">
            <div id="carouselExampleDark" className="carousel carousel-dark slide col">
              <div className="carousel-inner">
                {landingTestimonials.map((l, i) => (
                  <div key={i} className={`carousel-item ${i === 0 ? 'active' : ''}`} data-bs-interval="10000">
                    <div className="card mb-3 w-75 mx-auto">
                      <div className="card-body shadow card-bg">
                        <div className="avatar d-flex flex-row gap-3">
                          <div className="avatar-img">
                            <img className="img-fluid rounded-5" src={l.avatar_src} alt="" />
                          </div>
                          <div className="avatar-name">
                            <h5 className="mb-0">{l.name}</h5>
                            <small>{l.role}</small>
                          </div>
                        </div>
                        <p className="mt-3">{l.text}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
              </button>
              <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default KopiiTestimonials;
