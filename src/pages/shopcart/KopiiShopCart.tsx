import Div from "../../components/Div";
import BreadCrumb from "../../components/BreadCrumb";
import CustomerCart from "./CustomerCart";
import { useAppSelector } from "../../app/hooks";
import { useAppDispatch } from "../../app/hooks";
import { fetchShopCustomerCart } from "./shopCustomerCartSlice";
import { useEffect } from "react";

const KopiiShopCart = () => {
  const dispatch = useAppDispatch();
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const customerCart = useAppSelector((state) => state.shopcustomerCart);

  useEffect(() => {
    dispatch(fetchShopCustomerCart());
  }, [dispatch])
  return (
    <>
      {loading && <div id='preloader'></div>}
      <div>
        <BreadCrumb currentProduct={"Your Cart"} link={"/kopiishop"} />
        <Div styles="container px-4">
          <Div styles="row bg-sage text-center-ff-main mb-4 mb-md-5 p-2 rounded">
            <Div styles="col-6 col-md-3 ff-main h1 text-center">Product</Div>
            <Div styles="col-6 col-md-9 ff-main h1 text-center">Controls</Div>
          </Div>

          {!customerCart.info.length && localStorage.getItem('token') ?
            <Div styles=" mt-5 full-dimension align-items-center">
              <h1 className="text-center text-dark ff-main op-mid display-1">Your Cart is empty</h1>
            </Div> : null
          }
          {!loading && customerCart.info.length ? (
            <CustomerCart shopCustomerCart={customerCart.info} />
          ) : null}
          {!localStorage.getItem('token') &&
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