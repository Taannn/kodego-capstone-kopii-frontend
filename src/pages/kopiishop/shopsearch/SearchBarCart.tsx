import { useState } from "react";
import { Link } from "react-router-dom";


const SearchBarCart = () => {
  const [searchValue, setSearchValue] = useState('');
  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value)
  }
  const handleFormSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSearchValue('');
  }

  return (
    <nav className="navbar navbar-expand-lg navbar bg-primary pb-3 pt-5 mt-3 ff-main mt-md-3">
      <div className="container">
        <div className="d-flex ms-lg-auto">
          <form onSubmit={handleFormSubmit} className="d-flex input-group" role="search">
            <Link
              to={`/search/${searchValue}`}
              className="btn btn-danger me-1"
              type="submit">
                <i className="fa-solid fa-magnifying-glass text-sage py-2 px-3">
                </i>
            </Link>
            <input
              className="form-control me-2"
              type="search"
              value={searchValue}
              onChange={handleOnChange}
              placeholder="Search for products"
              aria-label="Search"
            />
          </form>
        </div>
        <a href="cart-empty.html"><i className="fa-solid fa-cart-shopping ms-1 ms-lg-3 me-3 text-info"></i></a>
      </div>
    </nav>
  )
}

export default SearchBarCart