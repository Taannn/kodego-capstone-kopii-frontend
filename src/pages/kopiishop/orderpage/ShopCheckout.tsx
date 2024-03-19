import BreadCrumb from "../../../components/BreadCrumb";
import Div from "../../../components/Div";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect } from "react";
import Input from "../../../components/Input";
import NumberInput from "../../../components/NumberInput";
import SelectInput from "../../../components/SelectInput";
import {
  addressInput,
  cityInput,
  zipCodeInput,
  errorMessage,
  shippingFeeSetter,
  paymentMethodSetter,
  addShopOrder
} from "./shopCheckoutSlice";
import OrderedProduct from "./OrderedProduct";
import { useNavigate } from "react-router-dom";

const ShopCheckout = () => {
  const formData = useAppSelector((state) => state.shopCheckout);
  const dispatch = useAppDispatch();
  useEffect(() => {
    const generateRandomNumber = () => {
      return (Math.random() * (60 - 20) + 20).toFixed(2);
    };
    const randomFee = generateRandomNumber();
    dispatch(shippingFeeSetter(parseFloat(randomFee)));
  }, []);

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  }

  const navigate = useNavigate();
  const handleSubmit = async (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
      const orderData = {
        productId: formData.productId,
        finalQuantity: formData.finalQuantity,
        finalPrice: formData.finalPrice,
        address: formData.address,
        city: formData.city,
        zipCode: formData.zipCode,
        paymentMethod: formData.paymentMethod,
        shippingFee: formData.shippingFee
      }
      dispatch(addShopOrder(orderData));
      navigate("/shop/ordercomplete");
  };

  return (
    <div>
      <BreadCrumb currentProduct={"Checkout"} link={"/kopiishop"} />
      <Div styles="border border-top-0 border-start-0 border-end-0 border-bottom-5 border-primary">
        <Div styles="container">
          <Div styles="row">
            <Div styles="col-12 col-md-8 mx-auto">
              <h1 className="display-1 ff-main text-primary">Order Confirmation</h1>
            </Div>
          </Div>
        </Div>
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
                handleChange={(e) => handleChange(paymentMethodSetter(e.target.value))}
                label="Payment Method"
                id="paymentMethod"
                optionDefault="Select Payment Method"
                optionOne="Cah on Delivery"
              />
              {formData.error && (
                <div className="alert alert-warning mt-3" role="alert">
                  {formData.error}
                </div>
              )}
              <button type="submit">Place Order</button>
              <h1 className="ff-main text-dark display-5">{formData.shippingFee}</h1>
            </form>
          </Div>
        </Div>
      </Div>
    </div>
  );
};

export default ShopCheckout;