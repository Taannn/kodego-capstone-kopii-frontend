import { CustomerCartProps } from "./KopiiShopCartProps";
import { useAppDispatch } from "../../app/hooks";
import { setLoadingShop } from "../preloader/loadingSliceShop";
import axios from "axios";
import { fetchShopCustomerCart } from "./shopCustomerCartSlice";
import { Link } from "react-router-dom";
import {
  quantitySetter,
  priceSetter,
  selectedProductId,
  selectedProductImg,
  selectedProductDesc,
  selectedProductName
} from "../kopiishop/orderpage/shopCheckoutSlice";

const CustomerCart: React.FC<CustomerCartProps> = ({ shopCustomerCart }) => {
  const dispatch = useAppDispatch();

  const handleDeleteFromCart = async (product_id: number) => {
    dispatch(setLoadingShop(true));
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(`/shop/cart/${product_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      dispatch(fetchShopCustomerCart());
      return response.data.data;
    } catch (error) {
      throw error
    } finally {
      dispatch(setLoadingShop(false));
    }
  }

  const handleIncrement = async (cartID: number) => {
    await axios.put(`/shop/cart/increment/${cartID}`);
    dispatch(fetchShopCustomerCart());
  }

  const handleDecrement = async (cartID: number) => {
    await axios.put(`/shop/cart/decrement/${cartID}`);
    dispatch(fetchShopCustomerCart());
  }

  const calculateTotalPrice = (product_price: string, quantity: number) => {
    const price = parseFloat(product_price);
    return (price * quantity).toFixed(2);
  };

  const handleSelectedProductDetail = (
    quantity: number,
    productId: number,
    productPrice: string,
    productImg: string,
    productName: string,
    productDesc: string
  ) => {
    dispatch(quantitySetter(quantity));
    dispatch(selectedProductId(productId));
    dispatch(priceSetter(productPrice));
    dispatch(selectedProductImg(productImg));
    dispatch(selectedProductName(productName));
    dispatch(selectedProductDesc(productDesc));
  }

  const discountedPrice = (price: string, discount: number) => {
    const convertedPrice = parseFloat(price);
    const discounted = convertedPrice - (convertedPrice * discount) / 100;
    return discounted.toFixed(2);
  }

  return (
    <>
      {shopCustomerCart.map((s, i) => (
        <div key={i + s.product_id} className="row border border-primary border-3 rounded bg-light mb-5">
          <div className="col-6 col-md-3 p-2">
            <div className="rounded overflow-hidden">
              <img className="img-fluid" src={s.product_img ? s.product_img : 'https://placehold.jp/600x400.png'} alt={s.product_name} />
            </div>
            <p className="text-primary h4 ff-main text-ellipsis">{s.product_name}</p>
          </div>
          <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2">
            <div className="block quantity d-flex gap-1">
              <button onClick={() => handleIncrement(s.cart_id)} className="btn rounded bg-danger text-light">+</button>
              <span className="btn btn-disabled rounded bg-danger text-light">{s.quantity}</span>
              <button onClick={() => handleDecrement(s.cart_id)} className="btn rounded bg-danger text-light">-</button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              {s.discount ?
                <p className="amount display-5 text-bold ff-main lead text-primary">
                  ₱ {new Intl.NumberFormat().format(parseFloat(calculateTotalPrice(discountedPrice(s.product_price, s.discount), s.quantity)))}
                </p>
              :
                <p className="amount display-5 text-bold ff-main lead text-primary">
                  ₱ {new Intl.NumberFormat().format(parseFloat(calculateTotalPrice(s.product_price, s.quantity)))}
                </p>
              }

            </div>
            <div className="delete d-flex align-items-center justify-content-center gap-1">
              <button onClick={() => handleDeleteFromCart(s.product_id)} className="btn rounded bg-warning text-light ff-main">Delete</button>
              <Link to={"/shopcheckout"} onClick={() => handleSelectedProductDetail(s.quantity, s.product_id, calculateTotalPrice(discountedPrice(s.product_price, s.discount), s.quantity), s.product_img ? s.product_img : 'https://placehold.jp/600x400.png', s.product_name, s.product_desc)} className="btn rounded bg-success text-light ff-main">Checkout</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CustomerCart;
