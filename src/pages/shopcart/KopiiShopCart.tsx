import Div from "../../components/Div";
import BreadCrumb from "../../components/BreadCrumb";
import CustomerCart from "./CustomerCart";
import { useAppSelector } from "../../app/hooks";

const KopiiShopCart = () => {
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const customerCart = useAppSelector((state) => state.shopcustomerCart);
  const loggedIn = useAppSelector((state) => state.kopiilogin.isLoggedIn);

  return (
    <>
      {loading && <div id='preloader'></div>}
      {/* {!loading && customerCart.error ?<div>Error: {customerCart.error}</div> : null } */}
      <div>
        <BreadCrumb currentProduct={"Your Cart"} link={"/kopiishop"} />
        <Div styles="container px-4">
          <Div styles="row bg-sage text-center-ff-main mb-4 mb-md-5 p-2">
            <Div styles="col-6 col-md-3 ff-main h1 text-center">Product</Div>
            <Div styles="col-6 col-md-9 ff-main h1 text-center">Controls</Div>
          </Div>

          {!customerCart.info.length && loggedIn ?
            <Div styles=" mt-5 full-dimension align-items-center">
              <h1 className="text-center text-dark ff-main op-mid display-1">Your Cart is empty</h1>
            </Div> : null
          }
          {!loading && customerCart.info.length ? (
            <CustomerCart shopCustomerCart={customerCart.info} />
          ) : null}
          {!loggedIn &&
            <Div styles=" mt-5 full-dimension align-items-center">
              <h1 className="text-center text-dark ff-main op-mid display-1">Login first to view cart</h1>
            </Div>
          }
        </Div>
      </div>
    </>
  );
};

export default KopiiShopCart;