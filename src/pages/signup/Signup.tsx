import { Link, useNavigate } from 'react-router-dom';
import AnimatedCoffeeMaker from '../../components/AnimatedCoffeeMaker';
import axios from 'axios';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import {
  emailInput,
  nameInput,
  surnameInput,
  passwordInput,
  errorMessage,
  passwordToggle
} from './signupSlice';

const Signup: React.FC = () => {
  const formData = useAppSelector((state) => state.kopiisignup);
  const dispatch = useAppDispatch();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  };
  const navigate = useNavigate();

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await axios.post("https://kopii-mp2.onrender.com/kopii/signup", {
        first_name: formData.first_name,
        last_name: formData.last_name,
        email: formData.email,
        password: formData.password
      });
      console.log('User data', res.data);
      dispatch(nameInput(''));
      dispatch(surnameInput(''));
      dispatch(emailInput(''));
      dispatch(passwordInput(''));
      navigate("/login");
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
            <div className="col-12 col-md-9 col-lg-6 col-xl-5">
              <div className="card border-0 bg-light mt-5">
                <div className="card-body">
                  <h2 className="text-primary mb-2 display-5">Sign up to Kopii</h2>
                  <form onSubmit={handleSubmit}>
                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="first_name"
                        value={formData.first_name}
                        onChange={(e)=>handleChange(nameInput(e.target.value))}
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="signupFirstName">First Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="text"
                        id="last_name"
                        value={formData.last_name}
                        onChange={(e) => handleChange(surnameInput(e.target.value))}
                        className="form-control form-control-lg"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="signupLastName">Last Name</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type="email"
                        id="email"
                        value={formData.email}
                        onChange={(e)=>handleChange(emailInput(e.target.value))}
                        className="form-control form-control-lg"
                        placeholder="example@gmail.com"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="signupEmail">Your Email</label>
                    </div>

                    <div className="form-outline mb-2">
                      <input
                        type={formData.showPassword ? 'text': 'password'}
                        id="password"
                        value={formData.password}
                        onChange={(e)=>handleChange(passwordInput(e.target.value))}
                        className="form-control form-control-lg"
                        placeholder="Must have at least 6 characters"
                        required
                      />
                      <label className="form-label fw-bold" htmlFor="signupPassword">Password</label>
                    </div>

                    <div className="form-check d-flex justify-content-start mb-2">
                      <input
                        className="form-check-input me-2"
                        type="checkbox"
                        id="showPassword"
                        onChange={()=> dispatch(passwordToggle(!formData.showPassword))}
                      />
                      <label className="form-check-label fw-medium" htmlFor="showPassword">Show Password</label>
                    </div>

                    {formData.error && (
                      <div className="alert alert-warning mt-3" role="alert">
                        {formData.error}
                      </div>
                    )}

                    <div className="d-flex justify-content-center">
                      <button
                        type="submit"
                        className="btn btn-secondary btn-block btn-lg gradient-custom-4 text-light hvr-glow" >
                          Sign up
                        </button>
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

// const navigate = useNavigate();
// const [showPassword, setShowPassword] = useState<boolean>(false);

// const [formData, setFormData] = useState({
//   first_name: "",
//   last_name: "",
//   email: "",
//   password: "",
// });
// const [error, setError] = useState<string | null>("");

// const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//   setFormData({
//     ...formData,
//     [e.target.id]: e.target.value
//   });
//   setError(null);
// };

// const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
//   e.preventDefault();
//   try {
//     const res = await axios.post("http://localhost:3001/kopii/signup", formData);
//     console.log('User data', res.data);
//     navigate("/login");
//   } catch (error: any) {
//     if (error.response && error.response.status === 400) {
//       if (error.response.data.error === 'DuplicateEmailError') {
//         setError('Email is already registered.');
//       } else {
//         setError('Invalid signup data');
//       }
//     } else {
//       console.error('Signup failed:', error.message);
//       setError('An unexpected error occurred');
//     }
//   }
// };
