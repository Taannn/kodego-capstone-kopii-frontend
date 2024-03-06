import { Link } from "react-router-dom";

const Login: React.FC = () => {
  return (
    <section className="vh-100 bg-image bg-light ff-main text-primary">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container-fluid">
          <div className="row d-flex justify-content-start align-items-center h-100">
            <div className="col-md-3 full-dimension bg-danger d-flex align-items-center d-none d-md-block">
              <div className="invi-spacer"></div>
              <div className="container-copi hvr-float-shadow bg-danger">
                <div className="coffee-header">
                  <div className="coffee-header__buttons coffee-header__button-one"></div>
                  <div className="coffee-header__buttons coffee-header__button-two"></div>
                  <div className="coffee-header__display"></div>
                  <div className="coffee-header__details"></div>
                </div>
                <div className="coffee-medium">
                  <div className="coffe-medium__exit"></div>
                  <div className="coffee-medium__arm"></div>
                  <div className="coffee-medium__liquid"></div>
                  <div className="coffee-medium__smoke coffee-medium__smoke-one"></div>
                  <div className="coffee-medium__smoke coffee-medium__smoke-two"></div>
                  <div className="coffee-medium__smoke coffee-medium__smoke-three"></div>
                  <div className="coffee-medium__smoke coffee-medium__smoke-for"></div>
                  <div className="coffee-medium__cup"></div>
                </div>
                <div className="coffee-footer"></div>
              </div>
            </div>
            {/* <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <div className="card bg-light border-0 mt-5">

              </div>
            </div> */}
            <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <div className="card border-0 bg-light mt-5">
                <div className="card-body">
                  <h2 className="text-primary mb-2">Log in to Kopii</h2>
                  <form>
                    <div className="form-outline mb-2">
                      <input type="email" id="form3Example3cg" className="form-control form-control-lg" required />
                      <label className="form-label fw-bold" htmlFor="form3Example3cg">Your Email</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input type="password" id="form3Example4cg" className="form-control form-control-lg" required />
                      <label className="form-label fw-bold" htmlFor="form3Example4cg">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-5">
                      <input className="form-check-input me-2" type="checkbox" value="" id="form2Example3cg" required />
                      <label className="form-check-label fw-medium" htmlFor="form2Example3g">
                        Remember Me
                      </label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="button"
                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow"
                        data-bs-toggle="modal"
                        data-bs-target="#exampleModal"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have an account already? <Link to="/signup" className="fw-bold text-body"><u>Sign up here</u></Link>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
