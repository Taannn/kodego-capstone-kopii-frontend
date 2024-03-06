
const SearchBarCart = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar bg-primary pb-3 pt-5 mt-3 ff-main mt-md-3">
      <div className="container">
        <div className="d-flex ms-lg-auto">
          <div className="d-flex input-group" role="search">
            <button
              className="btn btn-danger me-1" type="submit">
                <i className="fa-solid fa-magnifying-glass text-sage py-2 px-3">
                </i>
            </button>
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search for products" aria-label="Search"
            />
          </div>
        </div>
        <a href="cart-empty.html"><i className="fa-solid fa-cart-shopping ms-1 ms-lg-3 me-3 text-info"></i></a>
      </div>
    </nav>
  )
}

export default SearchBarCart