import { useState } from "react";
import { Link, useLocation } from "react-router-dom";

const HeaderNav = () => {
  const location = useLocation();
  const [toggleNav, setToggleNav] = useState<boolean>(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block z-lower bg-primary">
        <div className="container">
          <Link className={`navbar-brand hvr-wobble-horizontal ${location.pathname === '/' ? 'active' : ''}`} to="/">
            <img
              src="https://kopiiiiiimg.netlify.app/assets/images/kopii-light.png"
              alt=""
              width="70"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNav"
          >
            <ul className="navbar-nav nav-underline ff-main fs-6">
              {/* <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${location.pathname === '/' ? 'active' : ''} me-3`}
                  aria-current="page"
                >
                  Home
                </Link>
              </li> */}
              <li className="nav-item">
                <Link
                  to="/kopiishop"
                  className={`nav-link ${location.pathname === '/kopiishop' ? 'active' : ''} me-3`}
                >
                  Kopii Shop
                </Link>
              </li>
              <li className="nav-item">
                {!localStorage.getItem('token') ? (
                  <Link
                    id="login"
                    to="/login"
                    className="btn hvr-bounce-to-top me-3 btn-danger btn-sm bs-danger ms-2 pb-2 fw-medium text-info pt-2"
                  >
                    Login/Signup
                  </Link>
                ) : (
                  <div className="position-relative">
                    <button
                      id="login"
                      onClick={() => setToggleNav(!toggleNav)}
                      onMouseEnter={() => setToggleNav(true)}
                      // onMouseLeave={() => setToggleNav(false)}
                      className="btn hvr-bounce-to-top me-3 btn-danger btn-sm bs-danger ms-2 pb-2 fw-medium text-info pt-2"
                    >
                      {toggleNav ?
                        <i className="fa-solid fa-x px-2"></i>
                      :
                        <i className="fa-solid fa-user px-2"></i>
                      }
                    </button>
                    <div
                      className={`setting-toggle position-absolute${toggleNav ? ' d-block' : ' d-none'} bg-danger rounded px-2 py-2`}
                      onMouseEnter={() => setToggleNav(true)} onMouseLeave={() => setToggleNav(false)}
                    >
                      <Link to={"/settings"} onClick={() => setToggleNav(true)} className="btn hvr-bounce-to-top btn-primary rounded px-2 w-100 py-1 text-light overflow-hidden">Profile and Info</Link>
                      <Link to={"/shoporders"} onClick={() => {setToggleNav(!toggleNav)}} className="btn hvr-bounce-to-top btn-primary rounded px-2 w-100 py-1 text-light mt-2 overflow-hidden">Shop Orders</Link>
                    </div>
                  </div>
                )}
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <nav className="navbar navbar-dark bg-primary fixed-top d-block d-lg-none">
        <div className="container-fluid">
          <a className="navbar-brand hvr-wobble-horizontal" href="#">
            <img src="assets/images/kopii-light.png" alt="" width="70" />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="offcanvas"
            data-bs-target="#offcanvasDarkNavbar"
            aria-controls="offcanvasDarkNavbar"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="offcanvas offcanvas-end text-bg-danger"
            tabIndex={-1}
            id="offcanvasDarkNavbar"
          >
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasDarkNavbarLabel">
              <a className="navbar-brand hvr-wobble-horizontal" href="/">
                <img
                  src="https://kopiiiiiimg.netlify.app/assets/images/kopii-light.png"
                  alt=""
                  width="70"
                />
              </a>
              </h5>
              <button
                type="button"
                className="btn-close btn-close-white"
                data-bs-dismiss="offcanvas"
                aria-label="Close"
              ></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav nav-underline ff-main fs-6 justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link
                    to="/"
                    className={`nav-link ${location.pathname === '/' ? 'active' : ''}`}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/kopiishop"
                    className={`nav-link ${location.pathname === '/kopiishop' ? 'active' : ''}`}
                  >
                    Kopii Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/shoporders"
                    className={`nav-link ${location.pathname === '/shoporders' ? 'active' : ''}`}
                  >
                    Shop Orders
                  </Link>
                </li>
                <li className="nav-item">
                {!localStorage.getItem('token') ? (
                  <Link
                    id="login"
                    to="/login"
                    className={`nav-link${location.pathname === "/login" ? " active" : ""}`}
                >
                  Login/Signup
                </Link>
              ) : (
                <Link
                  id="settings"
                  to="/settings"
                  className={`nav-link${location.pathname === "/settings" ? " active" : ""}`}
                >
                  User Settings
                </Link>
              )}
            </li>
          </ul>
        </div>
      </div>
    </div>
  </nav>
</>
);
};

export default HeaderNav;
