import { useState } from "react"
import Div from "../../../components/Div"
import { CurrentProductProps } from "../KopiiShopProps"
import BreadCrumb from "./BreadCrumb"
import ProductDetails from "./ProductDetails"
import ProductImages from "./ProductImages"
const CurrentProduct:React.FC<CurrentProductProps> = ({ shopSelectedProduct }) => {
  const [startingQuantity, setStartingQuantity] = useState(shopSelectedProduct.starting_quantity);

  const handleIncrement = () => {
    setStartingQuantity(prev => prev + 1)
  }
  const handleDecrement = () => {
    if (startingQuantity > 1) {
      setStartingQuantity(prev => prev - 1)
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
            />
          </Div>
        </Div>
      </div>
    </>
  )
}

export default CurrentProduct