import { Link, useNavigate } from "react-router-dom";
import AnimatedCoffeeMaker from "../../components/AnimatedCoffeeMaker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Div from "../../components/Div";
import { Navigate } from "react-router-dom";
import {
  emailInput,
  passwordInput,
  passwordToggle,
  errorMessage,
  inputReset
} from "./loginSlice";
import axios from "axios";
import { useEffect, useState } from "react";


const Login: React.FC = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const [invalidEmail, setInvalidEmail] = useState<boolean>(false);
  const navigate = useNavigate();
  const formData = useAppSelector((state) => state.kopiilogin);
  const dispatch = useAppDispatch();

  if (localStorage.getItem('token')) {
    return <Navigate replace to={"/kopiishop"} />
  }

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
    setInputToggle(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.email === '' || formData.password === '') {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
      setInvalidEmail(false);
      const res = await axios.post("/login", {
        email: formData.email,
        password: formData.password
      });
      const { token, expiresIn } = res.data;
      const expirationTime = new Date().getTime() + expiresIn * 1000;
      localStorage.setItem('token', token);
      localStorage.setItem('tokenExpiration', expirationTime.toString());
      navigate("/kopiishop");
      return res.data.data;
      } catch (error: any) {
      if (error.response && error.response.status === 404) {
        dispatch(errorMessage("Account not found"));
      } else if (error.response && error.response.status === 401) {
        dispatch(errorMessage("Invalid password"));
      } else {
        dispatch(errorMessage("An unexpected error occurred"));
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
      <Div styles="mask d-flex align-items-center h-100 gradient-custom-3">
        <Div styles="container-fluid">
          <Div styles="row d-flex justify-content-start align-items-center h-100">
            <Div styles="col-md-3 full-dimension bg-danger d-flex align-items-center d-none d-md-block">
              <div className="invi-spacer"></div>
              <AnimatedCoffeeMaker />
            </Div>
            <Div styles="col-12 col-md-9 col-lg-6 col-xl-5">
              <Div styles="card border-0 bg-light mt-5">
                <Div styles="card-body">
                  <h2 className="text-primary mb-2 display-4">Log in to Kopii</h2>
                  <form onSubmit={handleSubmit} id="loginForm">
                    <div className="form-outline">
                      <input
                        type="email" id="loginEmail"
                        name="email"
                        value={formData.email}
                        onChange={(e)=>handleChange(emailInput(e.target.value))}
                        className="form-control form-control-lg border-info-subtle border-3"
                      />
                      <label className="form-label fw-bold" htmlFor="loginEmail">Your Email</label>
                    </div>

                    <div className="form-outline">
                      <input
                        type={formData.showPassword ? 'text': 'password'}
                        id="loginPassword"
                        name="password"
                        value={formData.password}
                        onChange={(e)=>handleChange(passwordInput(e.target.value))}
                        className="form-control form-control-lg border-info-subtle border-3"
                      />
                      <label className="form-label fw-bold" htmlFor="loginPassword">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-2">
                      <input
                        className="form-check-input me-2 border-1 border-info"
                        type="checkbox"
                        id="showPassword"
                        onChange={() => dispatch(passwordToggle(!formData.showPassword))}
                        />
                      <label className="form-check-label fw-medium" htmlFor="showPassword">
                        Show Password
                      </label>
                    </div>
                    <div className="d-flex gap-2 mb-2">
                      {formData.email === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Email is required!</small>
                        </div>
                      }
                      {invalidEmail && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Invalid email!</small>
                        </div>
                      }
                      {formData.password === '' && inputToggle &&
                        <div>
                          <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Password is required!</small>
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
                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow ls-1"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Don't have an account yet? <Link to="/signup" className="fw-bold text-body"><u>Sign up here</u></Link>
                    </p>
                  </form>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
    </section>
  );
}

export default Login;