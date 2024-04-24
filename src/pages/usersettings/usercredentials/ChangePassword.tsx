import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  currentPasswordInput,
  passwordInput,
  confirmPasswordInput,
  errorMessage,
  inputReset
} from "./changePasswordSlice";
import axios from "axios";
import { fetchShopUserInfo } from "../userInfoSlice";


const ChangePassword:React.FC = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const formData = useAppSelector((state) => state.kopiichangePassword);
  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
    setInputToggle(false);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.current_password === '' ||
          formData.password === '' ||
          formData.password !== formData.confirm_password ||
          formData.confirm_password === ''
      ) {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
      const res = await axios.put("/update/password/info", {
        current_password: formData.current_password,
        password: formData.password
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(inputReset(''));
      dispatch(fetchShopUserInfo());
      return res.data.data;
      } catch (error: any) {
        if (error.response && error.response.status === 400) {
          setInputToggle(true);
          if (error.response.data.error === 'PasswordMismatchError') {
            dispatch(errorMessage('password in incorrect!'));
          }
          if (error.response.data.error === 'SamePasswordError') {
            dispatch(errorMessage('password cannot be the same.'));
          }
        }  else {
          dispatch(errorMessage("server timed out"));
        }
    }
  };
  useEffect(() => {
    return () => {
      dispatch(inputReset(''));
    }
  }, [])

  return (
    <div className="mt-5 grid-cols-2 col-11 bg-primary col-md-8 px-4 py-3 rounded mx-auto">
      <div className="text-light pt-2 ls-1">
        <h4><i className="fa-solid fa-lock me-2"></i>Change Password</h4>
        <div className="d-flex flex-wrap mb-2 gap-2">
          {formData.current_password === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">current password is required!</small>
            </div>
          }
          {formData.error && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">{formData.error}</small>
            </div>
          }
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
        <form onSubmit={handleSubmit}>
          <input
            type="password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="current password"
            value={formData.current_password}
            onChange={(e) => handleChange(currentPasswordInput(e.target.value))}
          />
          <input
            type="password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="new password"
            value={formData.password}
            onChange={(e) => handleChange(passwordInput(e.target.value))}
          />
          <input
            type="password"
            id="cofirm_password"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="confirm password"
            value={formData.confirm_password}
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