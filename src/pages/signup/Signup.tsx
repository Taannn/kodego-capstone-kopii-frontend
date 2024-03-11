import React from 'react';
import { Link } from 'react-router-dom';
import AnimatedCoffeeMaker from '../../components/AnimatedCoffeeMaker';

const Signup: React.FC = () => {
  return (
    <section className="vh-100 bg-image bg-light ff-main text-primary">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container-fluid">
          <div className="row d-flex justify-content-start align-items-center h-100">
            <div className="col-md-3 full-dimension bg-danger d-flex align-items-center d-none d-md-block">
              <div className="invi-spacer"></div>
              <AnimatedCoffeeMaker />
            </div>
            <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <div className="card border-0 bg-light mt-5">
                <div className="card-body">
                  <h2 className="text-primary mb-2 display-5">Sign up to Kopii</h2>
                  <form>
                    <div className="form-outline mb-2">
                      <input type="text" id="signupFirstName" className="form-control form-control-lg" required />
                      <label className="form-label fw-bold" htmlFor="signupFirstName">First Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input type="text" id="signupLastName" className="form-control form-control-lg" required />
                      <label className="form-label fw-bold" htmlFor="signupLastName">Last Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input type="email" id="signupEmail" className="form-control form-control-lg" placeholder="example@gmail.com" required />
                      <label className="form-label fw-bold" htmlFor="signupEmail">Your Email</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input type="password" id="signupPassword" className="form-control form-control-lg" placeholder="Must have at least 6 characters" required />
                      <label className="form-label fw-bold" htmlFor="signupPassword">Password</label>
                    </div>

                    <div className="d-flex justify-content-center">
                      <button type="button" className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow" data-bs-toggle="modal" data-bs-target="#exampleModal">Sign up</button>
                    </div>

                    <p className="text-center text-muted mt-1 mb-0">Have an account already? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
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

export default Signup;
