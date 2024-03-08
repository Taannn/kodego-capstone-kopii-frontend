import Div from "../../../components/Div"
import { CurrentProductProps } from "../KopiiShopProps"
import BreadCrumb from "./BreadCrumb"
import ProductDetails from "./ProductDetails"
import ProductImages from "./ProductImages"
const CurrentProduct:React.FC<CurrentProductProps> = ({ shopSelectedProduct }) => {
  return (
    <>
      {/* {shopSelectedProduct.map((s, i) => (
      ))} */}
      <div>
        <BreadCrumb currentProduct={shopSelectedProduct.product_name} />
        <Div styles="container my-5 ff-main">
          <Div styles="row">
            <ProductImages productImg={shopSelectedProduct.product_img} productName={shopSelectedProduct.product_name} />
            <ProductDetails
              productCategory={shopSelectedProduct.category_name}
              productName={shopSelectedProduct.product_name}
              productPrice={shopSelectedProduct.product_price}
              startingQuantity={shopSelectedProduct.starting_quantity}
              productDesc={shopSelectedProduct.product_desc}
            />
          </Div>
        </Div>
      </div>
    </>
  )
}

export default CurrentProduct