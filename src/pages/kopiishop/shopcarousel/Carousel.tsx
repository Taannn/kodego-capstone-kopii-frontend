import { CarouselProps } from "../KopiiShopProps";
import { useAppSelector } from "../../../app/hooks";
import { Link } from "react-router-dom";

const Carousel: React.FC<CarouselProps> = ({ shopCarousel }) => {
  const shopCategory = useAppSelector((state) => state.shopcategory.info);

  return (
    <section className=" container rounded px-2 py-3 bg-dark mt-5 d-none d-md-block">
    <div className="container-fluid container-md mb-md-0 mb-3 grid-cols-3">
      <div className="grid-cols-2">
        {shopCategory.map((s, i) => (
          <Link to={`/category/${s.category}`} key={i} className="bg-primary text-light d-flex justify-content-center align-items-center rounded ff-lead px-2 py-1 bs-primary bg-circles">
            <div>
              <p className="lead d-inline ls-2 fs-4 fw-bolder">{s.category}</p>
            </div>
          </Link>
        ))}
      </div>
      <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner rounded">
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
    </section>
  );
}

export default Carousel;
