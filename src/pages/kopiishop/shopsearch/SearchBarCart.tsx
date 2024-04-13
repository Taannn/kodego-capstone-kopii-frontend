import { useState } from "react";
import { Link } from "react-router-dom";
import { useAppSelector } from "../../../app/hooks";

const SearchBarCart = () => {
  const cartItemCount = useAppSelector((state) => state.shopcustomerCart);
  const [searchValue, setSearchValue] = useState('');

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  }

  const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchValue.trim() !== '') {
      window.location.href = `/search/${searchValue}`;
    }
  }

  return (
    <nav className="navbar navbar-expand-lg navbar bg-primary pb-3 pt-5 mt-3 ff-main mt-md-3">
      <div className="container">
        <div className="d-flex ms-lg-auto">
          <form onSubmit={handleFormSubmit} className="d-flex input-group" role="search">
            <input
              className="form-control me-2"
              type="search"
              value={searchValue}
              onChange={handleOnChange}
              placeholder="Search for products"
              aria-label="Search"
            />
            <button
              className="btn btn-danger me-1"
              type="submit"
              disabled={!searchValue.trim()}
            >
              <i className="fa-solid fa-magnifying-glass text-sage py-2 px-3"></i>
            </button>
          </form>
        </div>
        <Link to="/cart">
          {localStorage.getItem('token') && cartItemCount.info && cartItemCount.info.length > 0 ? (
            <i className="fa-solid fa-cart-shopping ms-1 ms-lg-3 me-3 text-info position-relative">
              <span className="position-absolute ff-main top-0 start-100 translate-middle badge rounded-pill bg-dark">
                {cartItemCount.info.length}
                <span className="visually-hidden">cart item/s count</span>
              </span>
            </i>
          ) : (
            <i className="fa-solid fa-cart-shopping ff-main ms-1 ms-lg-3 me-3 text-info"></i>
          )}
        </Link>
      </div>
    </nav>
  )
}

export default SearchBarCart;
