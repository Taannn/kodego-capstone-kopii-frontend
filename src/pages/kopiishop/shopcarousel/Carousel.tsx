const carouselData = [
  {
    id: 0,
    img: 'https://kopiiiiiimg.netlify.app/assets/images/carousel-main-1.jpg',
    title: '30% OFF',
    about: 'Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.'
  },
  {
    id: 1,
    img: 'https://kopiiiiiimg.netlify.app/assets/images/carousel-main-3.jpg',
    title: '19% OFF',
    about: 'Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.'
  },
  {
    id: 2,
    img: 'https://kopiiiiiimg.netlify.app/assets/images/carousel-main-2.jpg',
    title: '36% OFF',
    about: 'Experience the precision of our state-of-the-art machines, bringing you the perfect cup of coffee with every pour.'
  },
];


const Carousel = () => {
  return (
    <div className="container-fluid container-md mt-md-5 mt-2">
      <div id="carouselExampleCaptions" className="carousel slide">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
          {/* {carouselData.map((item, index) => (
            <button
              key={item.id + index}
              type="button"
              data-bs-target="#carouselExampleCaptions"
              data-bs-slide={index}
              className={index === 0 ? 'active': ''}
              aria-current={index === 0 ? 'true': undefined}
              aria-label={`Slide ${index + 1}`}
            >
            </button>
          ))} */}
        </div>
        <div className="carousel-inner">
          {carouselData.map((item, index) => (
            <div key={index} className={`carousel-item ${index === 0 ? "active" : ""}`}>
              <img className="bd-placeholder-img bd-placeholder-img-lg d-block w-100" src={item.img} alt="" />
              <div className="carousel-caption d-none d-md-block text-danger">
                <h1 className="text-light d-inline-block px-4 py-2 ff-main rounded bg-opaque">{item.title}</h1>
                <p className="text-light lead rounded bg-opaque">{item.about}</p>
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
