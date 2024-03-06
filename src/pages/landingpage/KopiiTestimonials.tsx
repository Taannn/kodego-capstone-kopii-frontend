const testimonials = [
  {
    name: "Sarah Thompson",
    role: "Freelance Writer",
    avatar_src: "https://kopiiiiiimg.netlify.app/assets/images/testimonies-avatar-1.jpg",
    text: "Kopii has become my go-to platform for sourcing inspiration and fueling my creativity. The diverse range of coffee blends and the seamless ordering process make it a delightful experience. Kopii's commitment to supporting local businesses is something I truly appreciate.",
  },
  {
    name: "Alex Rodriguez",
    role: "Graphic Designer",
    avatar_src: "https://kopiiiiiimg.netlify.app/assets/images/testimonies-avatar-2.jpg",
    text: "As a designer, I'm drawn to aesthetics, and Kopii nails it! From the visually pleasing interface to the unique coffee brands available, it's a perfect blend of style and substance. Kopii has added a daily dose of inspiration to my work routine.",
  },
  {
    name: "David Chang",
    role: "Small Business Owner (Local Cafe)",
    avatar_src: "https://kopiiiiiimg.netlify.app/assets/images/testimonies-avatar-3.jpg",
    text: "Kopii has been a game-changer for my local cafe. The exposure we gained through their platform significantly boosted our sales. The inventory management tools and real-time analytics for shop owners are incredibly useful. Kopii is more than just a marketplace; it's a lifeline for local businesses.",
  },
];

const KopiiTestimonials = () => {
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
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={`carousel-item ${index === 0 ? 'active' : ''}`} data-bs-interval="10000">
                    <div className="card mb-3 w-75 mx-auto">
                      <div className="card-body shadow card-bg">
                        <div className="avatar d-flex flex-row gap-3">
                          <div className="avatar-img">
                            <img className="img-fluid rounded-5" src={testimonial.avatar_src} alt="" />
                          </div>
                          <div className="avatar-name">
                            <h5 className="mb-0">{testimonial.name}</h5>
                            <small>{testimonial.role}</small>
                          </div>
                        </div>
                        <p className="mt-3">{testimonial.text}</p>
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
