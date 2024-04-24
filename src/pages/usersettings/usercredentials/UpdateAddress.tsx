import { useEffect, useState } from "react";
import { useAppDispatch } from "../../../app/hooks";
import {
  errorMessage,
  addressInput,
  cityInput,
  zipCodeInput,
  phoneNumberInput,
  inputReset,
} from "./updateAdressSlice";
import axios from "axios";
import { UserInfoProps } from "../UserInfoProps";
import { fetchShopUserInfo } from "../userInfoSlice";

const UpdateAddress:React.FC<UserInfoProps> = ({ shopUserInfo }) => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
  const [userData, setUserData] = useState({
    address: shopUserInfo.address || '',
    city: shopUserInfo.city || '',
    zip_code: shopUserInfo.zip_code || '',
    phone_number: shopUserInfo.phone_number || '',
  });
  const dispatch = useAppDispatch();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>, action: any) => {
    const { name, value } = e.target;
    setUserData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    dispatch(action(value));
    dispatch(errorMessage(null));
  };

  useEffect(() => {
    setUserData({
      address: shopUserInfo.address || "",
      city: shopUserInfo.city || "",
      zip_code: shopUserInfo.zip_code || "",
      phone_number: shopUserInfo.phone_number || "",
    });
  }, [shopUserInfo]);

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if(userData.address === '' ||
         userData.city === '' ||
         userData.zip_code === ''||
         userData.phone_number === '' ||
         userData.address.length <= 9 ||
         userData.city.length <= 4 ||
         userData.zip_code.length <= 3 ||
         userData.phone_number.length <= 10) {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
      const res = await axios.put("/update/address/info", {
        address: userData.address,
        city: userData.city,
        zip_code: userData.zip_code,
        phone_number: userData.phone_number
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      });
      dispatch(inputReset(''));
      dispatch(fetchShopUserInfo());
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
    <div className={`mt-5 grid-cols-2 col-11 bg-primary col-md-8 px-4 py-3 rounded mx-auto`}>
      <div className="text-light pt-2 ls-1">
        <h4><i className="fa-solid fa-location-dot me-2"></i>{shopUserInfo.address ? 'Update Address' : 'Add Address'}</h4>
        <div className="d-flex gap-2 mb-2 flex-wrap">
          {userData.address === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">address is required!</small>
            </div>
          }
          {userData.city === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">city is required!</small>
            </div>
          }
          {userData.zip_code === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">zip code is required!</small>
            </div>
          }
          {userData.phone_number === '' && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">phone number is required!</small>
            </div>
          }
          {userData.address.length <= 9 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">address must be minimum of 10 characters</small>
            </div>
          }
          {userData.city.length <= 4 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">city must be minimum of 5 characters</small>
            </div>
          }
          {userData.zip_code.length <= 3 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">zip code must be minimum of 4</small>
            </div>
          }
          {userData.phone_number.length <= 10 && inputToggle &&
            <div>
              <small className="fw-bold mt-1 bg-warning rounded-1 px-2 py-1 text-light">Phone Number must be minimum of 11</small>
            </div>
          }
        </div>
      </div>
      <div>

          <form onSubmit={handleSubmit}>
            <textarea
              name="address"
              className="form-control form-control-md mt-2 bg-info border-danger border-2"
              placeholder="e.g. 123 Elmo Street, Block 204"
              value={userData.address}
              onChange={(e) => handleChange(e, addressInput)}
            />
            <input
              name="city"
              type="text"
              className="form-control form-control-md mt-2 bg-info border-danger border-2"
              placeholder="e.g. Manila"
              value={userData.city}
              onChange={(e) => handleChange(e, cityInput)}
            />
            <input
              name="zip_code"
              type="text"
              className="form-control form-control-md mt-2 bg-info border-danger border-2"
              placeholder="e.g. 1440"
              value={userData.zip_code}
              onChange={(e) => handleChange(e, zipCodeInput)}
            />
            <input
              name="phone_number"
              type="text"
              onKeyPress={(event) => {
                if (!/[0-9]/.test(event.key)) {
                  event.preventDefault();
                }
              }}
              value={userData.phone_number}
              className="form-control form-control-md mt-2 bg-info border-danger border-2"
              placeholder="e.g. 09XXYYYZZZZ"
              onChange={(e) => handleChange(e, phoneNumberInput)}
            />
            <div className="w-100 ms-auto mt-2 d-flex justify-content-end">
              <button type="submit" className="btn btn-secondary px-4 py-1 text-light">{userData.address ? 'Update' : 'Add'}</button>
            </div>
          </form>

      </div>
    </div>
  )
}

export default UpdateAddress