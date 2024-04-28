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
  // confirmPasswordInput,
  errorMessage,
  // passwordToggle,
  inputReset,
  confirmPasswordInput
} from './signupSlice';
import { useEffect, useState } from 'react';

const Signup: React.FC = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const formData = useAppSelector((state) => state.kopiisignup);
  const dispatch = useAppDispatch();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
    setInputToggle(false);
  };
  const navigate = useNavigate();
  if (localStorage.getItem('token')) {
    return <Navigate replace to={"/kopiishop"} />
  }

  const validateEmail = (email: string) => {
    const regex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
    return regex.test(email);
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const validEmail = validateEmail(formData.email);
      if (formData.email === '' ||
          formData.password === '' ||
          formData.first_name === ''||
          formData.last_name === '' ||
          formData.password.length <= 7 ||
          formData.confirmPassword !== formData.password ||
          !validEmail) {
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
      const { token, expiresIn } = response.data;
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expirationTime.toString());
      navigate("/kopiishop");
      return res.data.data;
    } catch (error: any) {
      if (error.response && error.response.status === 400) {
        if (error.response.data.error === 'DuplicateEmailError') {
          dispatch(errorMessage('email is already registered'));
        } else {
          dispatch(errorMessage('invalid signup data'));
        }
      } else {
        console.error('Signup failed:', error.message);
        dispatch(errorMessage('an unexpected error occurred'));
      }
    }
  };
  useEffect(() => {
    return () => {
      dispatch(inputReset(''));
    }
  }, [])

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
              <div className="card border-0 bg-light mt-1">
                <div className="card-body">
                  <h2 className="text-primary mb-3 display-4">Sign up to Kopii</h2>
                  <form onSubmit={handleSubmit} id="signupForm" noValidate>
                    <div className="grid-cols-2">
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
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        id="signupEmail"
                        value={formData.email}
                        onChange={(e)=>handleChange(emailInput(e.target.value))}
                        className="form-control form-control-md border-info-subtle border-3"
                      />
                      <label className="form-label fw-bold" htmlFor="signupEmail">Your Email</label>
                    </div>

                    <div className="grid-cols-2">
                      <div className="form-outline mb-2">
                        <input
                          type={formData.showPassword ? 'text': 'password'}
                          id="signupPassword"
                          value={formData.password}
                          onChange={(e)=>handleChange(passwordInput(e.target.value))}
                          className="form-control form-control-md border-info-subtle border-3"
                        />
                        <label className="form-label fw-bold" htmlFor="signupPassword">Password</label>
                      </div>

                      <div className="form-outline mb-2">
                        <input
                          type={formData.showPassword ? 'text': 'password'}
                          id="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={(e)=>handleChange(confirmPasswordInput(e.target.value))}
                          className={`form-control form-control-md${!formData.password || formData.password.length < 8 ? ' bg-light' : ''} border-info-subtle border-3`}
                          disabled={!formData.password || formData.password.length < 8}
                        />
                        <label className="form-label fw-bold" htmlFor="confirmPassword">Confirm Password</label>
                      </div>
                    </div>

                    <div className="d-flex gap-2 mb-2 flex-wrap">
                      {formData.first_name === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">first name is required</small>
                        </div>
                      }
                      {formData.last_name === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">last name is required</small>
                        </div>
                      }
                      {formData.password.length >= 8 && formData.confirmPassword !== formData.password && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">passwords do not match</small>
                        </div>
                      }
                      {formData.email && !validateEmail(formData.email) && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">invalid email</small>
                        </div>
                      }
                      {formData.password === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">password is required</small>
                        </div>
                      }
                      {formData.password.length <= 7 && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">password must be minimum of 8 characters</small>
                        </div>
                      }
                      {formData.error && (
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">{formData.error}</small>
                        </div>
                      )}
                    </div>

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block btn-lg bs-secondary card-hover-secondary gradient-custom-4 text-light" >
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