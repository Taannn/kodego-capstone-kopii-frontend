import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { setSuccessful } from "./addToCartSlice";
import { Link } from "react-router-dom";
import { priceSetter, quantitySetter, selectedProductId, selectedProductImg, selectedProductDesc, selectedProductName } from "../orderpage/shopCheckoutSlice";
import { ProductDetailsProps } from "../KopiiShopProps";

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productCategory,
  productName,
  productPrice,
  productDesc,
  productId,
  productStock,
  productImg,
  addToCart
}) => {
  const successfullyAdded = useAppSelector((state) => state.cartsuccessful.successfullyAdded);
  const dispatch = useAppDispatch();

  const handleSelectedProductDetail = (
    quantity: number,
    productID: number,
    productPrice: string,
    productImg: string,
    productName: string,
    productDesc: string
  ) => {
    dispatch(quantitySetter(quantity));
    dispatch(selectedProductId(productID));
    dispatch(priceSetter(productPrice));
    dispatch(selectedProductImg(productImg));
    dispatch(selectedProductName(productName));
    dispatch(selectedProductDesc(productDesc));
  }

  useEffect(() => {
    if (successfullyAdded) {
      setTimeout(() => {
        dispatch(setSuccessful(false))
      }, 3000);
    }
  }, [successfullyAdded])
  return (
    <div className="col-md-7">
      <div className="toast-container position-fixed bottom-0 end-0 p-3 ff-main">
        <div
          id="liveToast"
          className={`toast${successfullyAdded ? ' show':''}`}
          role="alert"
          aria-live="assertive"
          aria-atomic="true"
        >
          <div className="toast-header bg-secondary border-0 text-light">
            <strong className="me-auto">{productName}</strong>
            <small>1 sec ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body text-light bg-secondary rounded-bottom">
            Successfully added!
          </div>
        </div>
      </div>
      <div className="main-description px-2">
        <div className="category text-bold text-secondary">
          Category: {productCategory}
        </div>
        <div className="product-title text-bold my-2">
          {productName}
        </div>
        <div className="price-area mt-2 mb-4">
          <p className="new-price text-bold mb-1">₱ {new Intl.NumberFormat().format(parseFloat(productPrice))}</p>
        </div>
        <div className="buttons d-flex my-5">
          <div className="block">
            {localStorage.getItem('token') ?
              <Link to={"/shopcheckout"} onClick={() => handleSelectedProductDetail(1, productId, productPrice, productImg, productName, productDesc)} className="shadow btn btn-lg btn-secondary bs-secondary rounded">Buy Now</Link>
            :
            <Link to={"/login"} className="shadow btn btn-lg btn-secondary bs-secondary rounded">Buy Now</Link>
            }
          </div>
          <div className="block">
            <a onClick={addToCart} className="shadow btn btn-lg btn-secondary add-to-cart-btn bs-secondary rounded">Add to cart</a>
          </div>
          <div className="block quantity d-flex gap-1 ms-2">
            <span className="btn btn-lg btn-disabled rounded bg-info">Stock: {productStock}</span>
          </div>
        </div>
      </div>
      <div className="product-details my-4">
        <p className="details-title text-color mb-1">Product Details</p>
        <p className="description">{productDesc}</p>
      </div>
      <div className="row questions bg-light p-3">
        <div className="col-md-1 icon">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="col-md-11 text">
          Have a question about our products at Kopii? Feel free to contact our representatives via Contact Us or email.
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;