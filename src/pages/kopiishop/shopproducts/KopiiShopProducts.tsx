import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import { KopiiShopProductProps } from "../KopiiShopProps";
import { Link, useNavigate } from "react-router-dom";
import { quantitySetter, selectedProductId, priceSetter, selectedProductImg, selectedProductName, selectedProductDesc } from "../orderpage/shopCheckoutSlice";
import axios from "axios";
import { setSuccessful } from "../selectedproduct/addToCartSlice";


const KopiiShopProducts: React.FC<KopiiShopProductProps> = ({ shopProducts, desc }) => {
  const loggedIn = useAppSelector((state) => state.kopiilogin.isLoggedIn);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleAddToCart = async (id: number) => {
    if (!loggedIn) {
      return navigate("/login")
    }
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post("https://kopii-mp2.onrender.com/kopii/shop/", {
        product_id: id,
        quantity: 1
      }, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      })
      console.log(response.data.data);
      dispatch(setSuccessful(true))
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

  return (
    <section className="categories pt-0 pt-md-5 mt-0 mt-md-5 px-3 px-md-0">
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
                <div className="card card-hover-secondary bg-secondary text-light rounded overflow-hidden">
                  <Link to={`/kopiishop/${s.product_id}`} className="category">
                    <img src={s.product_img} className="img-fluid" alt="" />
                  </Link>
                  <div className="card-body px-3 pt-3 pb-0">
                    <div className="card-title ff-main h6 m-0 text-ellipsis">{s.product_name}</div>
                      <Link to={`/kopiishop/${s.product_id}`} className="pricing d-flex w-100 ff-main justify-content-between align-content-center ">
                        <p className="text-bold fs-5 mb-1">
                          ₱ {new Intl.NumberFormat().format(parseFloat(s.product_price))}
                        </p>
                        <p>No ratings yet</p>
                      </Link>
                      <div className="d-flex flex-grow-1 gap-1">
                        <button
                          className="btn btn-primary rounded-1 text-info ff-main mb-2 d-none d-md-block bs-primary fs-6"
                          style={{ flex: 1 }}
                          onClick={() => handleAddToCart(s.product_id)}
                        >
                          Add to Cart
                          {/* <i className="fa-solid fa-cart-plus ms-2"></i> */}
                          <i className="fa-solid fa-cart-shopping ms-2"></i>
                        </button>
                        {loggedIn ?
                          <Link
                            to={"/shopcheckout"}
                            onClick={(e) => handleSelectedProductDetail(1, s.product_id, s.product_price, s.product_img, s.product_name, s.product_desc, e)}
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
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KopiiShopProducts