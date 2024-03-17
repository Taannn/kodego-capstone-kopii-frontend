import BreadCrumb from "../../../components/BreadCrumb";
import Div from "../../../components/Div";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import {
  addressInput,
  cityInput,
  zipCodeInput,
  errorMessage,
  priceSetter,
  quantitySetter,
  selectedProductId
} from "./shopCheckoutSlice";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ShopCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const formData = useAppSelector((state) => state.shopCheckout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  }

  const handleSubmit = async (e : React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem('token');
      const res = await axios.post("https://kopii-mp2.onrender.com/kopii/shop/addorder", {
        product_id: formData.productId,
        quantity: formData.finalQuantity,
        price: formData.finalPrice,
        address: formData.address,
        city: formData.city,
        zip_code: formData.zipCode,
        payment_method: paymentMethod
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      const response = await axios.delete(`https://kopii-mp2.onrender.com/kopii/shop/cart/${formData.productId}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
      console.log('User data', res.data);
      dispatch(addressInput(''));
      dispatch(cityInput(''));
      dispatch(zipCodeInput(''));
      dispatch(quantitySetter(null));
      dispatch(priceSetter(null));
      dispatch(selectedProductId(null));
      setPaymentMethod('');
      console.log(response.data.data);
      navigate("/shop/ordercomplete");
    } catch (error: any) {
      // dispatch(errorMessage(error));
      console.log(error);
    }
  };

  return (
    <div>
      <BreadCrumb currentProduct={"Checkout"} link={"/kopiishop"} />
      <Div styles="container ff-main">
        <Div styles="row">
          <Div styles="col-12 col-md-8 mx-auto">
            <form>
              <div className="form-outline mb-2">
                <label className="form-label fw-bold" htmlFor="address">Address</label>
                <input
                  type="text"
                  id="address"
                  value={formData.address}
                  onChange={(e) => handleChange(addressInput(e.target.value))}
                  className="form-control form-control-lg border border-2 border-info"
                  placeholder="e.g. 123 Street name, Subd Name"
                  required
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label fw-bold" htmlFor="city">City</label>
                <input
                    type="text"
                    id="city"
                    value={formData.city}
                    onChange={(e) => handleChange(cityInput(e.target.value))}
                    className="form-control form-control-lg border border-2 border-info"
                    placeholder="e.g. Bulacan"
                    required
                  />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label fw-bold" htmlFor="signupEmail">Zip Code</label>
                <input
                  type="text"
                  pattern="[0-9]*"
                  inputMode="numeric"
                  maxLength={4}
                  id="zip"
                  value={formData.zipCode}
                  onChange={(e) => handleChange(zipCodeInput(e.target.value))}
                  className="form-control form-control-lg border border-2 border-info"
                  placeholder="e.g. 1440"
                  required
                />
              </div>

              <div className="form-outline mb-2">
                <label className="form-label fw-bold" htmlFor="paymentMethod">Payment Method</label>
                <div className="select-container">
                  <select
                    id="paymentMethod"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    className="form-control form-control-lg border border-2 border-info"
                    required
                    >
                    <option value="">Select Payment Method</option>
                    <option value="gcash">Gcash</option>
                  </select>
                  <div className="select-icon">
                    <i className="fa-solid fa-chevron-down"></i>
                  </div>
                </div>
              </div>

              {formData.error && (
                <div className="alert alert-warning mt-3" role="alert">
                  {formData.error}
                </div>
              )}
            </form>
            <button onClick={handleSubmit}>Place Order</button>
          </Div>
        </Div>
      </Div>
    </div>
  );
};

export default ShopCheckout;