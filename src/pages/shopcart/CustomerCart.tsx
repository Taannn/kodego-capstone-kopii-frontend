import { CustomerCartProps } from "./KopiiShopCartProps";
import { useAppDispatch } from "../../app/hooks";
import { setLoadingShop } from "../preloader/loadingSliceShop";
import axios from "axios";
import { fetchShopCustomerCart } from "./shopCustomerCartSlice";
import { useState } from "react";
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
  const [itemQuantities, setItemQuantities] = useState<{ [key: number]: number }>(Object.fromEntries(shopCustomerCart.map(item => [item.product_id, 1])));
  const dispatch = useAppDispatch();

  const handleDeleteFromCart = async (product_id: number) => {
    dispatch(setLoadingShop(true));
    try {
      const token = localStorage.getItem('token')
      const response = await axios.delete(`https://kopii-mp2.onrender.com/kopii/shop/cart/${product_id}`, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data.data);
      dispatch(fetchShopCustomerCart());
      return response.data.data;
    } catch (error) {
      throw error
    } finally {
      dispatch(setLoadingShop(false));
    }
  }

  const handleIncrement = (productId: number) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: (prevQuantities[productId] || 0) + 1
    }));
  }

  const handleDecrement = (productId: number) => {
    setItemQuantities(prevQuantities => ({
      ...prevQuantities,
      [productId]: Math.max((prevQuantities[productId] || 0) - 1, 1)
      // this makes it so that the final quantity  will always be 1 or above
    }));
  }

  const calculateTotalPrice = (item: { product_price: string; }, productId: number) => {
    const price = parseFloat(item.product_price);
    const quantity = itemQuantities[productId] || 1; // Use the quantity from itemQuantities
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

  return (
    <>
      {shopCustomerCart.map((s, i) => (
        <div key={i + s.product_id} className="row border border-primary border-3 bg-light mb-5">
          <div className="col-6 col-md-3 p-2">
            <img className="img-fluid" src={s.product_img} alt={s.product_name} />
            <p className="text-primary h4 ff-main text-ellipsis">{s.product_name}</p>
          </div>
          <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2">
            <div className="block quantity d-flex gap-1">
              <button onClick={() => handleIncrement(s.product_id)} className="btn rounded bg-danger text-light">+</button>
              <span className="btn btn-disabled rounded bg-danger text-light">{itemQuantities[s.product_id] || 1}</span>
              <button onClick={() => handleDecrement(s.product_id)} className="btn rounded bg-danger text-light">-</button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p className="amount display-5 text-bold ff-main lead text-primary">₱ {calculateTotalPrice(s, s.product_id)}</p>
            </div>
            <div className="delete d-flex align-items-center justify-content-center gap-1">
              <button onClick={() => handleDeleteFromCart(s.product_id)} className="btn rounded bg-warning text-light ff-main">Delete</button>
              <Link to={"/shopcheckout"} onClick={() => handleSelectedProductDetail(itemQuantities[s.product_id], s.product_id, calculateTotalPrice(s, s.product_id), s.product_img, s.product_name, s.product_desc)} className="btn rounded bg-success text-light ff-main">Checkout</Link>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CustomerCart;
