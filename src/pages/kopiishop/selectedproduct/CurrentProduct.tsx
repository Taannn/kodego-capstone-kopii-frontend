import Div from "../../../components/Div";
import { CurrentProductProps } from "../KopiiShopProps";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductDetails from "./ProductDetails";
import ProductImages from "./ProductImages";
import { useAppDispatch } from "../../../app/hooks";
import axios from "axios";
import { setSuccessful } from "./addToCartSlice";
import { useNavigate } from "react-router-dom";

const CurrentProduct:React.FC<CurrentProductProps> = ({ shopSelectedProduct }) => {
  const dispatch = useAppDispatch();

  const navigate = useNavigate();
  const handleAddToCart = async (id: number) => {
    if (!localStorage.getItem('token')) {
      return navigate("/login")
    }
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post("/shop/", {
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
      console.error(`Error fetching: ${error}`);
    }
  }

  return (
    <>
      <div>
        <BreadCrumb currentProduct={shopSelectedProduct.product_name} link={`/kopiishop`} />
        <Div styles="container my-5 ff-main">
          <Div styles="row">
            <ProductImages productImg={shopSelectedProduct.product_img} productName={shopSelectedProduct.product_name} />
            <ProductDetails
              productCategory={shopSelectedProduct.category_name}
              productName={shopSelectedProduct.product_name}
              productPrice={shopSelectedProduct.product_price}
              productDesc={shopSelectedProduct.product_desc}
              productId={shopSelectedProduct.product_id}
              productStock={shopSelectedProduct.product_stock}
              productImg={shopSelectedProduct.product_img}
              discount={shopSelectedProduct.discount}
              addToCart={() => handleAddToCart(shopSelectedProduct.product_id)}
            />
          </Div>
        </Div>
      </div>
    </>
  )
}

export default CurrentProduct