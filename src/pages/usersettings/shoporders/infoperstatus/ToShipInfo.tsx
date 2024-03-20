import { useAppSelector, useAppDispatch } from "../../../../app/hooks";
import BreadCrumb from "../../../../components/BreadCrumb";
import { fetchShopUserInfo } from "../../userInfoSlice";
import { fetchShopCustomerOrders } from "../shopCustomerOrdersSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

const ToShipInfo = () => {
  const customerOrders = useAppSelector((state) => state.shopOrders);
  const userInfo = useAppSelector((state) => state.shopUserInfo.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const dispatch = useAppDispatch();
  const { toshipID } = useParams<{ toshipID: string }>()
  const currentProduct = customerOrders.info.find((s) => s.order_id === +toshipID!);

  useEffect(() => {
    dispatch(fetchShopCustomerOrders());
    dispatch(fetchShopUserInfo());
  }, [dispatch]);

  return (
    <>
      {loading && <div id="preloader"></div>}
      {!loading && currentProduct ?
      <>
        <BreadCrumb currentProduct={currentProduct.product_name} link={"/shoporders"} />
        <div className="container">
          <div className="row border border-primary border-3 bg-light mb-0 rounded-0 rounded-top p-2 ff-main text-primary">
            <div className="col-12 col-md-4 p-0 rounded overflow-hidden">
              <img
                src={currentProduct.product_img}
                alt={currentProduct.product_name}
                className="img-fluid rounded border border-1 border-primary"
              />
            </div>
            <div className="col-12 border border-1 border-primary rounded col-md-4 p-2 pe-4">
              <div className="d-flex align-items-center">
                <p className="fs-4 text-bold">Product Name:</p>
                <p className="fs-4 ms-4">{currentProduct.product_name}</p>
              </div>
              <div className="d-flex justify-content-between mb-5">
                <div className="fs-1 text-bold">₱ {currentProduct.amount}</div>
                <div className="fs-1 text-bold">x {currentProduct.quantity}</div>
              </div>
              <div className="lead fs-5">{currentProduct.product_desc}</div>
            </div>
            <div className="col-12 col-md-4 p-2 rounded border border-1 border-primary">
              <div className="d-flex justify-content-between align-items-center lh-1">
                <p className="text-bold fs-4">Order ID:</p>
                <p className="fs-6">{`KOPI100${currentProduct.order_id}`}</p>
              </div>
              <div className="d-flex justify-content-between align-items-center lh-1">
                <p className="text-bold fs-4">Order Date:</p>
                <p className="fs-6">{currentProduct.order_date}</p>
              </div>
              <div className="d-flex flex-column">
              <button className="btn btn-lg rounded btn-outline-warning disabled">Cancel Order</button>
              </div>
            </div>
          </div>
          <div className="row border border-primary border-3 border-top-0 bg-light mb-0 rounded-0 rounded-bottom p-2 ff-main text-primary mb-5">
            <div className="col-12 lh-1 col-md-6 border border-1 rounded border-primary p-0 overflow-hidden">
              <div className="bg-sage mx-0 px-2">
                <p className="fs-1 text-bold bg-sage p-2">Delivery Address</p>
              </div>
              <p className="fs-5 mx-3">{userInfo[0].first_name + " " +userInfo[0].last_name}</p>
              <p className="fs-5 mx-3">{currentProduct.address}</p>
              <p className="fs-5 mx-3">{currentProduct.city + ", " + currentProduct.zip_code}</p>
            </div>
            <div className="col-12 lh-1 col-md-6 border border-1 rounded border-primary p-0 overflow-hidden">
              <div className="bg-sage mx-0 px-2">
                <p className="fs-1 text-bold bg-sage p-2">Shipping Information</p>
              </div>
              <p className="fs-5 mx-3">Standard Local</p>
              <p className="fs-5 mx-3">{"KOPII - KOPIIX100" + currentProduct.shipment_id}</p>
              <p className="fs-5 mx-3">Expected Shipping Date: {currentProduct.shipment_date}</p>
            </div>
          </div>
        </div>
      </>
      :
      null
      }
    </>
  )
}

export default ToShipInfo