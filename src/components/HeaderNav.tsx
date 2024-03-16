import { Link } from "react-router-dom";
import { useState } from "react";
import { useAppSelector } from "../app/hooks";

const HeaderNav = () => {
  const [active, setActive] = useState("home");
  const loggedIn = useAppSelector((state) => state.kopiilogin.isLoggedIn)

  const handleActiveLink = (link: string) => {
    setActive(link);
  };

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark fixed-top d-none d-lg-block z-lower bg-primary">
        <div className="container">
          <a className="navbar-brand hvr-wobble-horizontal" href="/">
            <img
              src="https://kopiiiiiimg.netlify.app/assets/images/kopii-light.png"
              alt=""
              width="70"
            />
          </a>
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
              <li className="nav-item">
                <Link
                  to="/"
                  className={`nav-link ${active === "home" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("home")}
                  aria-current="page"
                >
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kopiishop"
                  className={`nav-link ${active === "shop" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("shop")}
                >
                  Kopii Shop
                </Link>
              </li>
              <li className="nav-item">
                <Link
                  to="/kopiistop"
                  className={`nav-link ${active === "stop" ? "active" : ""} me-3`}
                  onClick={() => handleActiveLink("stop")}
                >
                  Kopii Stop
                </Link>
              </li>
              <li className="nav-item">
                {!loggedIn ? <Link
                  id="login"
                  to="/signup"
                  className={`btn hvr-bounce-to-top ${active === "not" ? "" : ""} me-3 btn-danger btn-sm bs-danger ms-2 pb-2 fw-medium text-info pt-2`}
                  onClick={() => handleActiveLink("not")}
                >
                  Login/Signup
                </Link> : <Link
                  id="login"
                  to="/userinfo"
                  className={`btn hvr-bounce-to-top ${active === "not" ? "" : ""} me-3 btn-danger btn-sm bs-danger ms-2 pb-2 fw-medium text-info pt-2`}
                  onClick={() => handleActiveLink("not")}
                >
                  <i className="fa-solid fa-user px-2"></i>
                </Link>
                }
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
                    className={`nav-link ${active === 'Home' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('Home')}
                    aria-current="page"
                  >
                    Home
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/kopiishop"
                    className={`nav-link ${active === 'Shop' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('Shop')}
                  >
                    Kopii Shop
                  </Link>
                </li>
                <li className="nav-item">
                  <Link
                    to="/kopiistop"
                    className={`nav-link ${active === 'KopiiStop' ? 'active' : ''}`}
                    onClick={() => handleActiveLink('KopiiStop')}
                  >
                    Kopii Stop
                  </Link>
                </li>
                <li className="nav-item">
                {!loggedIn ? <Link
                  id="login"
                  to="/signup"
                  className={`nav-link${active === "not" ? "active" : ""}`}
                  onClick={() => handleActiveLink("not")}
                >
                  Login/Signup
                </Link> : <Link
                  id="login"
                  to="/userinfo"
                  className={`nav-link${active === "not" ? "active" : ""}`}
                  onClick={() => handleActiveLink("not")}
                >
                  User Settings
                </Link>
                }
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
