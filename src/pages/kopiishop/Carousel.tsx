
const Carousel = () => {
  return (
    <div className="container-fluid container-md mt-md-5 mt-2">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="https://kopiiiiiimg.netlify.app/assets/images/carousel-main-1.jpg" alt="" />
            <div className="carousel-caption d-none d-md-block text-danger">
              <h1 className="text-light d-inline-block px-4 py-2 ff-main rounded bg-opaque">SALE: <span className="ff-lead "> 30% OFF</span></h1>
              <p className="text-light lead rounded bg-opaque">Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="https://kopiiiiiimg.netlify.app/assets/images/carousel-main-3.jpg" alt="" />
            <div className="carousel-caption d-none d-md-block text-danger">
              <h1 className="text-light d-inline-block px-4 py-2 ff-main rounded bg-opaque">SALE: <span className="ff-lead "> 19% OFF</span></h1>
              <p className="text-light lead rounded bg-opaque">Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src="https://kopiiiiiimg.netlify.app/assets/images/carousel-main-2.jpg" alt="" />
            <div className="carousel-caption d-none d-md-block text-danger">
              <h1 className="text-light d-inline-block px-4 py-2 ff-main rounded bg-opaque">SALE: <span className="ff-lead "> 36% OFF</span></h1>
              <p className="text-light lead rounded bg-opaque">Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.</p>
            </div>
          </div>
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
