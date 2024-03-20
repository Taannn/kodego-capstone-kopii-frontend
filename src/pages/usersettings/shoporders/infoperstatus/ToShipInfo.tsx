// import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import BreadCrumb from "../../../../components/BreadCrumb";
// import { fetchShopCustomerOrders } from "../shopCustomerOrdersSlice";
// import { useEffect } from "react";
// import { useParams } from "react-router-dom";

const ToShipInfo = () => {
  // const customerOrders = useAppSelector((state) => state.shopOrders);
  // const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  // const dispatch = useAppDispatch();
  // const { toshipID } = useParams<{ toshipID: string }>()

  // useEffect(() => {
  //   dispatch(fetchShopCustomerOrders());

  // }, [dispatch]);

  return (
    <>
      <BreadCrumb currentProduct={"product_name"} link={"/userinfo"} />
      <div className="container">
        <div className="row border border-primary border-3 bg-light mb-0 rounded-0 rounded-top p-2 ff-main text-primary">
          <div className="col-12 col-md-4 p-0 rounded overflow-hidden">
            <img
              src="https://kopiiiiiimg.netlify.app/assets/images/categories-chocolates-assorted-bites.jpg"
              alt=""
              className="img-fluid rounded"
            />
          </div>
          <div className="col-12 border border-1 border-primary rounded col-md-4 p-2 pe-4">
            <div className="fs-4">Product Name:
              <span className="text-bold fs-3 ms-2">Coffee maker...</span>
              </div>
            <div className="d-flex justify-content-between mb-5">
              <div className="fs-1 text-bold">₱ 345.78</div>
              <div className="fs-1 text-bold">x 2</div>
            </div>
            <div className="lead fs-4">lorem ipsum dolor renai tatsu maki</div>
          </div>
          <div className="col-12 col-md-4 p-2 rounded border border-1 border-primary">
            <div className="d-flex justify-content-between lh-1">
              <p className="text-bold fs-2">Order ID:</p>
              <p className="fs-4">KOPI10056</p>
            </div>
            <div className="d-flex justify-content-between lh-1">
              <p className="text-bold fs-2">Order Date:</p>
              <p className="fs-4">2023-10-16</p>
            </div>
          </div>
        </div>
        <div className="row border border-primary border-3 border-top-0 bg-light mb-0 rounded-0 rounded-bottom p-2 ff-main text-primary mb-5">
          <div className="col-12 lh-1 col-md-6 border border-1 rounded border-primary p-0 overflow-hidden">
            <div className="bg-sage mx-0 px-2">
              <p className="fs-1 text-bold bg-sage p-2">Delivery Address</p>
            </div>
            <p className="fs-3 mx-3">customer fullname</p>
            <p className="fs-3 mx-3">customer full adrress etc etc...</p>
            <p className="fs-3 mx-3">customer city + zip code</p>
          </div>
          <div className="col-12 lh-1 col-md-6 border border-1 rounded border-primary p-0 overflow-hidden">
            <div className="bg-sage mx-0 px-2">
              <p className="fs-1 text-bold bg-sage p-2">Shipping Information</p>
            </div>
            <p className="fs-3 mx-3">Standard Local</p>
            <p className="fs-3 mx-3">KOPII - KOPIIX10034</p>
            <p className="fs-3 mx-3">Expected Shipping Date: 2024-09-07</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default ToShipInfo