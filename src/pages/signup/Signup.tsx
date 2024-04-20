import { Link, useNavigate } from 'react-router-dom';
import AnimatedCoffeeMaker from '../../components/AnimatedCoffeeMaker';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { Navigate } from 'react-router-dom';
import {
  emailInput,
  nameInput,
  surnameInput,
  passwordInput,
  errorMessage,
  passwordToggle,
  inputReset
} from './signupSlice';
import { useState } from 'react';

const Signup: React.FC = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const formData = useAppSelector((state) => state.kopiisignup);
  const dispatch = useAppDispatch();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  };
  const navigate = useNavigate();
  if (localStorage.getItem('token')) {
    return <Navigate replace to={"/kopiishop"} />
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.email === '' ||
          formData.password === '' ||
          formData.first_name === ''||
          formData.last_name === '' ||
          formData.password.length <= 7) {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
      const res = await axios.post("/signup", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password
      });
      const response = await axios.post("/login", {
        email: formData.email,
        password: formData.password
      });
      const { token } = response.data;
      localStorage.setItem('token', token);
      dispatch(inputReset(''));
      navigate("/kopiishop");
      return res.data.data;
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === 'DuplicateEmailError') {
          dispatch(errorMessage('Email is already registered.'));
        } else {
          dispatch(errorMessage('Invalid signup data'));
        }
      } else {
        console.error('Signup failed:', error.message);
        dispatch(errorMessage('An unexpected error occurred'));
      }
    }
  };

  return (
    <section className="vh-100 bg-image bg-light ff-main text-primary">
      <div className="mask d-flex align-items-center h-100 gradient-custom-3">
        <div className="container-fluid">
          <div className="row d-flex justify-content-start align-items-center h-100">
            <div className="col-md-3 full-dimension bg-danger d-flex align-items-center d-none d-md-block">
              <div className="invi-spacer"></div>
              <AnimatedCoffeeMaker />
            </div>
            <div className="col-12 col-md-9 col-lg-5">
              <div className="card border-0 bg-light mt-5">
                <div className="card-body">
                  <h2 className="text-primary mb-3 display-5">Sign up to Kopii</h2>
                  <form onSubmit={handleSubmit} id="signupForm">
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="signupFirstname"
                        value={formData.first_name}
                        onChange={(e)=>handleChange(nameInput(e.target.value))}
                        className="form-control form-control-md border-info-subtle border-3"
                      />
                      <label className="form-label fw-bold" htmlFor="signupFirstname">First Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="signupLastname"
                        value={formData.last_name}
                        onChange={(e) => handleChange(surnameInput(e.target.value))}
                        className="form-control form-control-md border-info-subtle border-3"
                      />
                      <label className="form-label fw-bold" htmlFor="signupLastname">Last Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        id="signupEmail"
                        value={formData.email}
                        onChange={(e)=>handleChange(emailInput(e.target.value))}
                        className="form-control form-control-md border-info-subtle border-3"
                        placeholder="example@gmail.com"
                      />
                      <label className="form-label fw-bold" htmlFor="signupEmail">Your Email</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type={formData.showPassword ? 'text': 'password'}
                        id="signupPassword"
                        value={formData.password}
                        onChange={(e)=>handleChange(passwordInput(e.target.value))}
                        className="form-control form-control-md border-info-subtle border-3"
                        placeholder="Must have at least 6 characters"
                      />
                      <label className="form-label fw-bold" htmlFor="signupPassword">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-2">
                      <input
                        className="form-check-input me-2 border-info border-1"
                        type="checkbox"
                        id="showPassword"
                        onChange={()=> dispatch(passwordToggle(!formData.showPassword))}
                      />
                      <label className="form-check-label fw-medium" htmlFor="showPassword">Show Password</label>
                    </div>

                    <div className="d-flex gap-2 mb-2 flex-wrap">
                      {formData.first_name === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">First Name is required!</small>
                        </div>
                      }
                      {formData.last_name === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Last Name is required!</small>
                        </div>
                      }
                      {/* {invalidEmail && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Invalid email!</small>
                        </div>
                      } */}
                      {formData.password === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Password is required!</small>
                        </div>
                      }
                      {formData.password.length <= 7 && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Password must be minimum of 8 characters!</small>
                        </div>
                      }
                      {formData.error && (
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">{formData.error}!</small>
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow" >
                          Sign up
                        </button>
                    </div>

                    <p className="text-center text-muted mt-3 mb-0">Have an account already? <Link to="/login" className="fw-bold text-body"><u>Login here</u></Link></p>
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