// import axios from "axios";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  currentPasswordInput,
  passwordInput,
  confirmPasswordInput,
  errorMessage
} from "./changePasswordSlice";


const ChangePassword:React.FC = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.kopiichangePassword);

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  };

  // const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   try {
  //     if (formData.email === '' || formData.password === '') {
  //       setInputToggle(true);
  //       return;
  //     }
  //     // if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
  //     setInputToggle(false);
  //     setInvalidEmail(false);
  //     const res = await axios.post("/login", {
  //       email: formData.email,
  //       password: formData.password
  //     });
  //     const { token } = res.data;
  //     localStorage.setItem('token', token);
  //     navigate("/kopiishop");
  //     dispatch(inputReset(''));
  //     return res.data.data;
  //     } catch (error: any) {
  //     if (error.response && error.response.status === 404) {
  //       dispatch(errorMessage("Account not found"));
  //     } else if (error.response && error.response.status === 401) {
  //       dispatch(errorMessage("Invalid password"));
  //     } else {
  //       dispatch(errorMessage("An unexpected error occurred"));
  //     }
  //   }
  // };

  return (
    <div className="mt-5 grid-cols-2 col-11 bg-primary col-md-8 px-4 py-3 rounded mx-auto">
      <div className="text-light pt-2 ls-1">
        <h4><i className="fa-solid fa-lock me-2"></i>Change Password</h4>
        <div className="d-flex flex-wrap mb-2 gap-2">
          {formData.current_password === '' && inputToggle &&
            <div>
              <small onClick={() => setInputToggle(true)} className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">current password is required!</small>
            </div>
          }
          {/* { &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">password is wrong!</small>
            </div>
          } */}
          {formData.password === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">new password cannot be empty</small>
            </div>
          }
          {formData.password !== formData.confirm_password && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">passwords do not match!</small>
            </div>
          }
          {formData.password.length <= 7 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">password must be minimum of 8 characters</small>
            </div>
          }
        </div>
      </div>
      <div>
        <form onSubmit={() => {}}>
          <input
            type="password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="current password"
            onChange={(e) => handleChange(currentPasswordInput(e.target.value))}
          />
          <input
            type="password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="new password"
            onChange={(e) => handleChange(passwordInput(e.target.value))}
          />
          <input
            type="password"
            id="cofirm_password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="confirm password"
            onChange={(e) => handleChange(confirmPasswordInput(e.target.value))}
          />
          <div className="w-100 ms-auto mt-2 d-flex justify-content-end">
            <button type="submit" className="btn btn-secondary px-2 py-1 text-light">Change</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ChangePassword;