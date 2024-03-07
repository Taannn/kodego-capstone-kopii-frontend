// import { Link } from "react-router-dom"

const FooterNav = () => {
  return (
    <div className="container">
        <div className="container p-4 pb-0">
          <section className="">
            <div className="row">
              <div className="col-md-3 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Kopii</h6>
                <p>Kopii, a visionary online platform that transcends the conventional coffee shopping experience. Meticulously crafted for coffee enthusiasts, it goes beyond mere commerce, establishing itself as a haven for those who savor every aspect of the coffee journey. </p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Navigation</h6>
                <p><a className="text-white text-decoration-none">Home</a></p>
                <p><a className="text-white text-decoration-none">About Us</a></p>
                <p><a className="text-white text-decoration-none">Reviews</a></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Shop Now</h6>
                <p><a className="text-white text-decoration-none">Kopii Shop</a></p>
                <p><a className="text-white text-decoration-none">Kopii Stop</a></p>
                <p><a className="text-white text-decoration-none">Talk to Us</a></p>
              </div>
              <hr className="w-100 clearfix d-md-none" />
              <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mt-3">
                <h6 className="text-uppercase mb-4 font-weight-bold">Contact</h6>
                <p><i className="fas fa-home mr-3"></i> Sabaody, <del>3D</del>2Y</p>
                <p><i className="fas fa-envelope mr-3"></i> info@gmail.com</p>
                <p><i className="fas fa-phone mr-3"></i> + 63 234 567 8901</p>
              </div>
            </div>
          </section>
          <hr className="my-3" />
          <section className="p-3 pt-0">
            <div className="row d-flex align-items-center">
              <div className="col-md-7 col-lg-8 text-center text-md-start">
                <div className="p-3">
                  &copy; 2024 Copyright:
                  <a className="text-white text-decoration-none" href="#"> Kopii</a>
                </div>
              </div>
              <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
                <a className="btn btn-outline-info btn-floating m-1 text-danger" href="#" role="button"><i className="fab fa-facebook-f"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" href="#" role="button"><i className="fab fa-twitter"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" href="#" role="button"><i className="fab fa-google"></i></a>
                <a className="btn btn-outline-info btn-floating m-1 text-danger" href="#" role="button"><i className="fab fa-instagram"></i></a>
              </div>
            </div>
          </section>
        </div>
      </div>
  )
}

export default FooterNav