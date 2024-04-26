import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { KopiiShopProductProps } from "../KopiiShopProps";
import { Link } from "react-router-dom";
import { quantitySetter, selectedProductId, priceSetter, selectedProductImg, selectedProductName, selectedProductDesc } from "../orderpage/shopCheckoutSlice";
import axios from "axios";
import { setSuccessful } from "../selectedproduct/addToCartSlice";
import { useEffect } from "react";
import { fetchShopCustomerCart } from "../../shopcart/shopCustomerCartSlice";


const ProductsWithSidebar: React.FC<KopiiShopProductProps> = ({ shopProducts, desc }) => {
  const successfullyAdded = useAppSelector((state) => state.cartsuccessful.successfullyAdded);
  const dispatch = useAppDispatch();

  const handleAddToCart = async (id: number, e: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
    e.preventDefault();
    e.stopPropagation();
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post("shop/", {
        product_id: id,
        quantity: 1
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      dispatch(fetchShopCustomerCart());
      dispatch(setSuccessful(true));
      return response.data.data;
    } catch (error) {
      throw error
    }
  }

  const handleSelectedProductDetail = (
    quantity: number,
    productID: number,
    productPrice: string,
    productImg: string,
    productName: string,
    productDesc: string,
    e: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) => {
    e.stopPropagation();
    dispatch(quantitySetter(quantity));
    dispatch(selectedProductId(productID));
    dispatch(priceSetter(productPrice));
    dispatch(selectedProductImg(productImg));
    dispatch(selectedProductName(productName));
    dispatch(selectedProductDesc(productDesc));
  }

  const discountedPrice = (price: number, discount: number) => {
    const discounted = price - (price * discount) / 100;
    return discounted.toFixed(2);
  }

  useEffect(() => {
    if (successfullyAdded) {
      setTimeout(() => {
        dispatch(setSuccessful(false))
      }, 3000);
    }
  }, [successfullyAdded])

  return (
    <section className="categories pt-0 pt-md-5 mt-0 mt-md-2 px-3 px-md-0">
      <div className="toast-container position-fixed bottom-0 end-0 p-3 ff-main">
        <div
            id="liveToast"
            className={`toast${successfullyAdded ? ' show':''}`}
            role="alert"
            aria-live="assertive"
            aria-atomic="true"
          >
            <div className="toast-header bg-danger border-0 text-light">
              <strong className="me-auto">Your Cart</strong>
              <small>1 sec ago</small>
              {/* <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button> */}
            </div>
            <div className="toast-body text-bold text-success bg-danger rounded-bottom fs-5">
              <span><i className="fa-regular fa-circle-check me-2 text-success"></i>Successfully added!</span>
            </div>
        </div>
      </div>
      <div className="container">
        <div className="row bg-secondary rounded">
          <div className="col ff-main text-center text-light pt-1">
            <h2 className="display-6 lead">{desc}</h2>
          </div>
        </div>
        <div className="row mt-3 mb-5 gy-3">
          {shopProducts.map((s, i) => (
            <div className="col-md-3 col-6" key={i}>
              <div className="text-decoration-none">
                <div className="card card-hover-secondary position-relative bg-secondary text-light rounded overflow-hidden">
                      {s.discount &&
                      <Link to={`/kopiishop/${s.product_id}`} className="bg-danger text-light text-bold position-absolute ff-main mt-1 end-0 me-2 border border-2 border-dark text-info px-1 rounded text-sm">- {s.discount} %</Link>
                      }
                  <Link to={`/kopiishop/${s.product_id}`} className="category">
                    <img src={s.product_img} className="img-fluid" alt="" />
                  </Link>
                  <Link to={`/kopiishop/${s.product_id}`} className="card-body px-3 pt-3 pb-0">
                    <div className="card-title ff-main h6 m-0 text-ellipsis d-flex align-items-center justify-content-between">
                      {s.product_name}

                    </div>
                      <Link to={`/kopiishop/${s.product_id}`} className="pricing d-flex w-100 ff-main justify-content-between align-content-center ">
                        {s.discount ?
                          <p className="text-bold fs-5 mb-1">
                            ₱ {discountedPrice(parseFloat(s.product_price), s.discount)}
                            <span className="text-info ms-1 fs-6 text-decoration-line-through">{new Intl.NumberFormat().format(parseFloat(s.product_price))}</span>
                          </p>
                        :
                          <p className="text-bold fs-5 mb-1">
                            ₱ {new Intl.NumberFormat().format(parseFloat(s.product_price))}
                          </p>

                        }

                        <p className="d-none d-md-block">No ratings yet</p>
                      </Link>
                      <div className="d-flex flex-grow-1 gap-1">
                        {localStorage.getItem('token') ?
                          <a
                            className="btn btn-primary rounded-1 text-info ff-main mb-2 d-none d-md-block bg-primary bs-primary fs-6 ls-1"
                            style={{ flex: 1 }}
                            onClick={(e) => handleAddToCart(s.product_id, e)}
                          >
                            Add to Cart
                            <i className="fa-solid fa-cart-shopping ms-2"></i>
                          </a>
                         :
                          <Link
                            to={"/login"}
                            className="btn btn-primary rounded-1 text-info ff-main mb-2 d-none d-md-block bs-primary fs-6 ls-1"
                            style={{ flex: 1 }}
                          >
                            Add to Cart
                            <i className="fa-solid fa-cart-shopping ms-2"></i>
                          </Link>

                        }
                        {localStorage.getItem('token') ?
                          <Link
                            to={"/shopcheckout"}
                            onClick={(e) => handleSelectedProductDetail(1, s.product_id, discountedPrice(parseFloat(s.product_price), s.discount), s.product_img, s.product_name, s.product_desc, e)}
                            className="btn btn-primary rounded-1 text-info ff-main mb-2 d-none d-md-block bs-primary"
                          >
                            Buy Now
                          </Link>
                        :
                          <Link
                            to={"/login"}
                            className="btn btn-primary rounded-1 text-info ff-main mb-2 d-none d-md-block bs-primary">
                            Buy Now
                          </Link>
                        }
                      </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProductsWithSidebar;