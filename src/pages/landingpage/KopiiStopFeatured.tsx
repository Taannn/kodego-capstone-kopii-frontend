const kopiistopintro = [
  {
    title: 'Kopii Stop: Your Ultimate Coffee Delivery Destination',
    desc: 'Indulge in the luxury of having your favorite coffee delights delivered to your doorstep with Kopii Stop. We bring the bustling coffee culture right to your fingertips, offering a diverse selection from local coffee shops to renowned brands. Explore, order, and savor the rich flavors of Kopii Stop.',
    btn: 'Discover Kopii Stop',
    img: 'https://kopiiiiiimg.netlify.app/assets/images/category-teacups-dark-velvet.jpg'
  }
]

const KopiiStopFeatured = () => {
  return (
    <>
      <section className="kopii-stop bg-success pb-5 pt-5 pt-lg-0" id="kopii_stop">
        <div className="container">
          <div className="row justify-content-between align-items-center pt-5">
            <div className="col-lg-6 text-dark ff-main">
              <h1 className="text-light display-4">{kopiistopintro[0].title}</h1>
              <p className="ls-1 ff-lead fw-bold mt-4 lh-1">
                {kopiistopintro[0].desc}
              </p>
              <a href="pages/kopii-stop.html" className="btn btn-danger btn-lg bs-danger text-info hvr-glow">
                {kopiistopintro[0].btn}
                <i className="fa-solid fa-chevron-right ms-2"></i>
              </a>
            </div>
            <div className="col-6 d-none rounded overflow-hidden d-lg-block text-center">
              <img className="img-fluid rounded" src={kopiistopintro[0].img} alt="" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KopiiStopFeatured