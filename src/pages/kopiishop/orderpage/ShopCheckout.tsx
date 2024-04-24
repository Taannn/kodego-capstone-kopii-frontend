import BreadCrumb from "../../../components/BreadCrumb";
import Div from "../../../components/Div";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect, useState } from "react";
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
  addShopOrder
} from "./shopCheckoutSlice";
import OrderedProduct from "./OrderedProduct";
import PlaceOrder from "./PlaceOrder";
import { useNavigate } from "react-router-dom";

const ShopCheckout = () => {
  const [inputToggle, setInputToggle] = useState<boolean>(false);
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
      if(formData.address === '' ||
         formData.address.length <= 19 ||
         formData.zipCode === ''||
         formData.zipCode.length <= 3 ||
         formData.paymentMethod === '') {
        setInputToggle(true);
        return;
      }
      setInputToggle(false);
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

    return () => {
      dispatch(addressInput(''));
      dispatch(cityInput(''));
      dispatch(zipCodeInput(''));
      dispatch(paymentMethodSetter(''));
    }
  }, []);

  const handleChange = (action: any) => {
    dispatch(action);
    dispatch(errorMessage(null));
    setInputToggle(false);
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
              <div className="d-flex mt-2 gap-2 flex-wrap">
                {formData.address === '' && inputToggle &&
                  <div>
                    <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">address cannot be empty.</small>
                  </div>
                }
                {formData.address.length <= 9 && inputToggle &&
                  <div>
                    <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">address must be minimum of 10 characters.</small>
                  </div>
                }
              </div>
              <Input
                handleChange={(e) => handleChange(cityInput(e.target.value))}
                value={formData.city}
                label="City"
                pholder="e.g. Bulacan"
                id="city"
              />
              <div className="d-flex mt-2 gap-2 flex-wrap">

              {formData.city === '' && inputToggle &&
                <div>
                  <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">city cannot be empty.</small>
                </div>
              }
              {formData.city.length <= 2 && inputToggle &&
                <div>
                  <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">city must be minimum of 3 characters.</small>
                </div>
              }
              </div>
              <NumberInput
                handleChange={(e) => handleChange(zipCodeInput(e.target.value))}
                value={formData.zipCode}
                max={4}
                pholder="e.g. 1440"
                id="zipCode"
                label="Zip Code"
              />
              <div className="d-flex mt-2 gap-2 flex-wrap">
                {formData.zipCode === '' && inputToggle &&
                  <div>
                    <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">zip code cannot be empty.</small>
                  </div>
                }
                {formData.zipCode.length <= 3 && inputToggle &&
                  <div>
                    <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">zip code must be minimum of 4 characters.</small>
                  </div>
                }
              </div>
              <SelectInput
                handleChange={(e) => handleChange(paymentMethodSetter(e.target.value))}
                label="Payment Method"
                id="paymentMethod"
                optionDefault="Select Payment Method"
                optionOne="Cash on Delivery"
              />
              {formData.paymentMethod === '' && inputToggle &&
                <div>
                  <small className="fw-bold my-1 bg-warning rounded-1 px-2 py-1 text-light">select a payment method first.</small>
                </div>
              }
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