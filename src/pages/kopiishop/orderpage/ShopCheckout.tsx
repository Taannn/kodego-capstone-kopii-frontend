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
  totalAmountSetter,
  addShopOrder,
} from "./shopCheckoutSlice";
import OrderedProduct from "./OrderedProduct";
import PlaceOrder from "./PlaceOrder";
import { useNavigate } from "react-router-dom";

const ShopCheckout = () => {
  const formData = useAppSelector((state) => state.shopCheckout);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
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
      try {
        await dispatch(addShopOrder(orderData));
        navigate("/shop/ordercomplete");
      } catch (error) {
        console.error("Order Failed with error: ", error);
      }
  };

  useEffect(() => {
    const generateRandomNumber = () => {
      return (Math.random() * (60 - 20) + 20).toFixed(2);
    };
    const randomFee = generateRandomNumber();
    dispatch(shippingFeeSetter(parseFloat(randomFee)));
    const fee = parseFloat(randomFee);
    const price = parseFloat(formData.finalPrice)
    const priceWithShipping =  (price + fee).toFixed(2);
    dispatch(totalAmountSetter(priceWithShipping));
  }, []);

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
  }

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
      <form onSubmit={handleSubmit}>
        <OrderedProduct />
          <Div styles="row">
            <Div styles="col-12 col-md-8 mx-auto">
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
                optionOne="Cash on Delivery"
              />
              {formData.error && (
                <div className="alert alert-warning mt-3" role="alert">
                  {formData.error}
                </div>
              )}
            </Div>
            <PlaceOrder />
          </Div>
        </form>
      </Div>
    </div>
  );
};

export default ShopCheckout;