import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  errorMessage,
  addressInput,
  cityInput,
  zipCodeInput,
  phoneNumberInput,
  inputReset,
} from "./updateAdressSlice";
import axios from "axios";
import { UserInfoPropsExtended } from "../UserInfoProps";

const UpdateAddress:React.FC<UserInfoPropsExtended> = ({ shopUserInfo, updateToggle }) => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const formData = useAppSelector((state) => state.kopiiupdateAddress);
  const dispatch = useAppDispatch();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  };

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (formData.address === '' ||
          formData.city === '' ||
          formData.zip_code === ''||
          formData.phone_number === '' ||
          formData.address.length <= 9 ||
          formData.city.length <= 4 ||
          formData.zip_code.length <= 3 ||
          formData.phone_number.length <= 10) {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
      const res = await axios.put("/update/address/info", {
        address: formData.address,
        city: formData.city,
        zip_code: formData.zip_code,
        phone_number: formData.phone_number
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(inputReset(''));
      return res.data.data;
    } catch (error: any) {
       if (error.response && error.response.status === 500) {
          dispatch(errorMessage('Server Time Out'));
       }
       if (error.response && error.response.status === 400) {
          dispatch(errorMessage('Email is already registered.'));
      } else {
        console.error('Action Failed:', error.message);
        dispatch(errorMessage('An unexpected error occurred'));
      }
    }
  };

  return (
    <div className={`mt-5 grid-cols-2 col-11 bg-primary col-md-8 px-4 py-3 rounded mx-auto${updateToggle ? ' d-block' : ' d-none' }`}>
      <div className="text-light pt-2 ls-1">
        <h4><i className="fa-solid fa-location-dot me-2"></i>{shopUserInfo.length ? 'Update Address' : 'Add Address'}</h4>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          {formData.address === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">address is required!</small>
            </div>
          }
          {formData.city === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">city is required!</small>
            </div>
          }
          {formData.zip_code === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">zip code is required!</small>
            </div>
          }
          {formData.phone_number === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">phone number is required!</small>
            </div>
          }
          {formData.address.length <= 9 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">address must be minimum of 10 characters</small>
            </div>
          }
          {formData.city.length <= 4 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">city must be minimum of 5 characters</small>
            </div>
          }
          {formData.zip_code.length <= 3 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">zip code must be minimum of 4</small>
            </div>
          }
          {formData.phone_number.length <= 10 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Phone Number must be minimum of 11</small>
            </div>
          }
        </div>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <textarea
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="e.g. 123 Elmo Street, Block 204"
            value={""}
            onChange={(e) => handleChange(addressInput(e.target.value))}
          />
          <input
            type="text"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="e.g. Manila"
            onChange={(e) => handleChange(cityInput(e.target.value))}
          />
          <input
            type="text"
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="e.g. 1440"
            onChange={(e) => handleChange(zipCodeInput(e.target.value))}
          />
          <input
            type="text"
            onKeyPress={(event) => {
              if (!/[0-9]/.test(event.key)) {
                event.preventDefault();
              }
            }}
            className="form-control form-control-md mt-2 bg-info border-danger border-2"
            placeholder="e.g. 09XXYYYZZZZ"
            onChange={(e) => handleChange(phoneNumberInput(e.target.value))}
          />
          <div className="w-100 ms-auto mt-2 d-flex justify-content-end">
            <button className="btn btn-secondary px-2 py-1 text-light">Add</button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default UpdateAddress