
const HeroHeader: React.FC = () => {
  return (
    <section className="hero-stop pt-6 half-dimension border-bottom border-2 border-dark px-3 px-md-0">
      <div className="container">
        <div className="row">
          <div className="col-md-5 bg-light border-1 text-danger rounded p-4">
            <h1 className="display-2 ff-main">Where should we deliver your food today?</h1>
            <div className="input-group mb-3 ff-main">
              <input type="text" className="form-control" placeholder="Type your location" aria-label="Location" aria-describedby="searchButton" />
              <button className="btn btn-primary" type="button" id="searchButton">Search</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroHeader;