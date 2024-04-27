import { useLocation } from "react-router-dom";

const FooterNav = () => {
  const location = useLocation();
  const today = new Date();
  const year = today.getFullYear();
  return (
    <div className={`border-4 border-danger pb-5 border-top${location.pathname === "/cart" || location.pathname === "/settings" ? ' d-none' : ''}`}>
        <div className="container pb-3 pb-0">
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  &copy; {year} Copyright:
                  <a className="text-white text-decoration-none" href="#"> Kopii</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-info btn-floating m-1 text-danger" target="_blank" href="https://www.facebook.com/" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" target="_blank" href="https://twitter.com/home?lang=en" role="button"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" target="_blank" href="https://www.google.com/" role="button"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" target="_blank" href="https://www.instagram.com/" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default FooterNav