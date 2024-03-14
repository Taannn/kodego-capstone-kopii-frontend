import { useState } from "react"
import Div from "../../../components/Div"
import { CurrentProductProps } from "../KopiiShopProps"
import BreadCrumb from "./BreadCrumb"
import ProductDetails from "./ProductDetails"
import ProductImages from "./ProductImages"
import { useAppDispatch, useAppSelector } from "../../../app/hooks"
import axios from "axios"
import { setSuccessful } from "./addToCartSlice"
import { useNavigate } from "react-router-dom"
const CurrentProduct:React.FC<CurrentProductProps> = ({ shopSelectedProduct }) => {
  const [startingQuantity, setStartingQuantity] = useState(shopSelectedProduct.starting_quantity);
  const loggedIn = useAppSelector((state) => state.kopiilogin.isLoggedIn)
  const dispatch = useAppDispatch();

  const handleIncrement = () => {
    setStartingQuantity(prev => prev + 1)
  }
  const handleDecrement = () => {
    if (startingQuantity > 1) {
      setStartingQuantity(prev => prev - 1)
    }
  }
  const navigate = useNavigate();
  const handleAddToCart = async (id: number) => {
    if (!loggedIn) {
      return navigate("/login")
    }
    try {
      const token = localStorage.getItem('token')
      const response = await axios.post("https://kopii-mp2.onrender.com/kopii/shop/", {
        product_id: id,
        quantity: startingQuantity
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
    } finally {
      dispatch(setSuccessful(false))
    }
  }

  return (
    <>
      <div>
        <BreadCrumb currentProduct={shopSelectedProduct.product_name} />
        <Div styles="container my-5 ff-main">
          <Div styles="row">
            <ProductImages productImg={shopSelectedProduct.product_img} productName={shopSelectedProduct.product_name} />
            <ProductDetails
              productCategory={shopSelectedProduct.category_name}
              productName={shopSelectedProduct.product_name}
              productPrice={shopSelectedProduct.product_price}
              startingQuantity={startingQuantity}
              productDesc={shopSelectedProduct.product_desc}
              increment={handleIncrement}
              decrement={handleDecrement}
              addToCart={() => handleAddToCart(shopSelectedProduct.product_id)}
            />
          </Div>
        </Div>
      </div>
    </>
  )
}

export default CurrentProduct