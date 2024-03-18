import BreadCrumb from "../../../components/BreadCrumb";
import Div from "../../../components/Div";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Input from "../../../components/Input";
import NumberInput from "../../../components/NumberInput";
import SelectInput from "../../../components/SelectInput";
import {
  addressInput,
  cityInput,
  zipCodeInput,
  errorMessage,
  priceSetter,
  quantitySetter,
  selectedProductId,
} from "./shopCheckoutSlice";
import OrderedProduct from "./OrderedProduct";

const ShopCheckout = () => {
  const [paymentMethod, setPaymentMethod] = useState<string>('');
  const formData = useAppSelector((state) => state.shopCheckout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  }

  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
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
      console.log(response.data.data);
      console.log('User data', res.data);
      dispatch(addressInput(''));
      dispatch(cityInput(''));
      dispatch(zipCodeInput(''));
      dispatch(quantitySetter(null));
      dispatch(priceSetter(null));
      dispatch(selectedProductId(null));
      setPaymentMethod('');
      navigate("/shop/ordercomplete");
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div>
      <BreadCrumb currentProduct={"Checkout"} link={"/kopiishop"} />
      <Div styles="border border-top-0 border-start-0 border-end-0 border-bottom-5 border-primary">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-8 mx-auto">
              <h1 className="display-1 ff-main text-primary">Order Confirmation</h1>
            </div>
          </div>
        </div>
      </Div>
      <Div styles="container ff-main mt-5">
        <OrderedProduct />
        <Div styles="row">
          <Div styles="col-12 col-md-8 mx-auto">
            <form onSubmit={handleSubmit}>
              <Input
                handleChange={(e) => handleChange(addressInput(e.target.value))}
                value={formData.address}
                label="Address"
                pholder="e.g. 123 Street name, Subd Name"
                id="address"
              />
              <Input
                handleChange={(e) => handleChange(cityInput(e.target.value))}
                value={formData.city}
                label="City"
                pholder="e.g. Bulacan"
                id="city"
              />
              <NumberInput
                handleChange={(e) => handleChange(zipCodeInput(e.target.value))}
                value={formData.zipCode}
                max={4}
                pholder="e.g. 1440"
                id="zipCode"
                label="Zip Code"
              />
              <SelectInput
                handleChange={(e) => setPaymentMethod(e.target.value)}
                label="Payment Method"
                id="paymentMethod"
                optionDefault="Select Payment Method"
                optionOne="Gcash"
              />
              {formData.error && (
                <div className="alert alert-warning mt-3" role="alert">
                  {formData.error}
                </div>
              )}
              <button type="submit">Place Order</button>
            </form>
          </Div>
        </Div>
      </Div>
    </div>
  );
};

export default ShopCheckout;