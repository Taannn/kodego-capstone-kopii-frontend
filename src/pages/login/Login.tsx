import { Link, useNavigate } from "react-router-dom";
import AnimatedCoffeeMaker from "../../components/AnimatedCoffeeMaker";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import Div from "../../components/Div";
import {
  emailInput,
  passwordInput,
  passwordToggle,
  errorMessage,
  userLogin
} from "./loginSlice";

const Login: React.FC = () => {
  const navigate = useNavigate();
  const formData = useAppSelector((state) => state.kopiilogin);
  const dispatch = useAppDispatch();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const loginData = {
      email: formData.email,
      password: formData.password
    }
    try {
      await dispatch(userLogin(loginData));
      navigate("/kopiishop");
    } catch (error) {
      console.error("Login Failed with error: ", error);
    }
  };

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
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="email" id="loginEmail"
                        name="email"
                        value={formData.email}
                        onChange={(e)=>handleChange(emailInput(e.target.value))}
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="loginEmail">Your Email</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type={formData.showPassword ? 'text': 'password'}
                        id="loginPassword"
                        name="password"
                        value={formData.password}
                        onChange={(e)=>handleChange(passwordInput(e.target.value))}
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="loginPassword">Password</label>

                    </div>
                    <div className="form-check d-flex justify-content-start mb-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="showPassword"
                        onChange={() => dispatch(passwordToggle(!formData.showPassword))}
                      />
                      <label className="form-check-label fw-medium" htmlFor="showPassword">
                        Show Password
                      </label>
                    </div>
                      {formData.error && (
                      <div className="alert alert-warning mt-3" role="alert">
                        {formData.error}
                      </div>
                      )}

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow"
                      >
                        Login
                      </button>
                    </div>

                    <p className="text-center text-muted mt-5 mb-0">
                      Have an account already? <Link to="/signup" className="fw-bold text-body"><u>Sign up here</u></Link>
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