import Div from "../../components/Div";
import BreadCrumb from "../kopiishop/selectedproduct/BreadCrumb";
import CustomerCart from "./CustomerCart";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { setLoadingShop } from "../kopiishop/loadingSliceShop";
import { fetchShopCustomerCart } from "./shopCustomerCartSlice";

const KopiiShopCart = () => {
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const customerCart = useAppSelector((state) => state.shopcustomerCart);
  const loggedIn = useAppSelector((state) => state.kopiilogin.isLoggedIn);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShopCustomerCart());
    console.log(customerCart.info)
    return () => {
      dispatch(setLoadingShop(false));
    }
  }, [dispatch])
  return (
    <>
      {loading && <div id='preloader'></div>}
      {!loading && customerCart.error ?<div>Error: {customerCart.error}</div> : null }
      <div>
        <BreadCrumb currentProduct={"Your Cart"} />
        <Div styles="container px-4">
          <Div styles="row bg-sage text-center-ff-main mb-4 mb-md-5 p-2">
            <Div styles="col-6 col-md-3 ff-main h1 text-center">Product</Div>
            <Div styles="col-6 col-md-9 ff-main h1 text-center">Controls</Div>
          </Div>

          {!customerCart.info.length && loggedIn ?
            <div className=" mt-5 full-dimension align-items-center">
              <h1 className="text-center text-dark ff-main op-mid display-1">Your Cart is empty</h1>
            </div> : null
          }
          {!loading && customerCart.info.length ? (
            <CustomerCart shopCustomerCart={customerCart.info} />
          ) : null}
          {!loggedIn &&
            <div className=" mt-5 full-dimension align-items-center">
              <h1 className="text-center text-dark ff-main op-mid display-1">Login first to view cart</h1>
            </div>
          }
        </Div>
      </div>
    </>
  );
};

export default KopiiShopCart;