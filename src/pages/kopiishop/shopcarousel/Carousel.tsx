import { CarouselProps } from "../KopiiShopProps";

const Carousel: React.FC<CarouselProps> = ({ shopCarousel }) => {
  return (
    <div className="container-fluid container-md mt-md-5 mt-2 mb-md-0 mb-5">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          {shopCarousel.map((s, i) => (
            <div key={i} className={`carousel-item ${i === 0 ? "active" : ""}`}>
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={s.img} alt="" />
              <div className="carousel-caption d-none d-md-block text-danger">
                <h1 className="text-light d-inline-block px-4 py-2 ff-main rounded bg-opaque">{s.title}</h1>
                <p className="text-light lead rounded bg-opaque">{s.about}</p>
              </div>
            </div>
          ))}
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

export default Carousel;
