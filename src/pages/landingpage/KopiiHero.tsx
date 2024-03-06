const kopii_hero = [
  {
    hero_title: 'Kopii, Your Gateway to Flavorful Delights',
    hero_about: 'Embark on a unique coffee adventure with Kopii. Explore rare blends and timeless classics, curated to elevate your coffee experience. Start your journey now &ndash; shop our exclusive selection and transcend ordinary coffee encounters.',
    hero_btn: 'Shop Now'
  }
]

const KopiiHero = () => {
  return (
    <>
      <section id="home" className="full-dimension hero d-flex align-items-center ff-main">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 text-light">
                    <h1 className="display-1 ls-1">{kopii_hero[0].hero_title}</h1>
                    <p className="lead ff-lead ls-1 lh-1 text-light">{kopii_hero[0].hero_about}</p>
                    <a href="pages/kopii-shop.html" className="btn btn-primary btn-lg bs-primary text-info hvr-glow text-decoration-none">{kopii_hero[0].hero_btn}<i className="fa-solid fa-chevron-right ms-2"></i></a>
                </div>
            </div>
          </div>
        </section>
    </>
  )
}

export default KopiiHero