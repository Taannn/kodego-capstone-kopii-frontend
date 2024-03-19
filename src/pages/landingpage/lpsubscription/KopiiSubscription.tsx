
const KopiiSubscription = () => {
  return (
    <>
      <section className="newsletter bg-secondary pt-4">
        <div className="container">
          <div className="row justify-content-center align-items-center">
            <div className="col-lg-5 text-light ff-main">
              <h1>Stay Caffeinated with Kopii</h1>
              <label htmlFor="emailInput" className="form-label"></label>
            </div>
            <div className="col-lg-5">
              <form onSubmit={(e) => e.preventDefault()}>
                <div className="mb-4 d-flex input-group">
                  <input type="email" className="form-control rounded-start-2 ff-main" id="emailInput" placeholder="Enter your email" />
                  <button type="submit" className="btn btn-primary d-inline-block ff-main" data-bs-toggle="modal" data-bs-target="#exampleModal">Subscribe</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default KopiiSubscription