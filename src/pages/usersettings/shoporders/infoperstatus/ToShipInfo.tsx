import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import BreadCrumb from "../../../../components/BreadCrumb";
import { fetchShopUserInfo } from "../../userInfoSlice";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchShopOrders } from "../kopiiShopOrdersSlice";

type OptionProps = {
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
};

const ToShipInfo = () => {
  const customerOrders = useAppSelector((state) => state.kopiishopOrders);
  const userInfo = useAppSelector((state) => state.shopUserInfo.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const dispatch = useAppDispatch();
  const { toshipID } = useParams<{ toshipID: string }>()
  const currentProduct = customerOrders.info.find((customerOrder: any) => customerOrder.order_id === +toshipID!);

  const formatDate = (dateString: string) => {
    const options: OptionProps = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  useEffect(() => {
    dispatch(fetchShopOrders());
    dispatch(fetchShopUserInfo());
  }, [dispatch]);

  // const discountedPrice = (price: number, discount: number) => {
  //   const discounted = price - (price * discount) / 100;
  //   return discounted.toFixed(2);
  // }

  return (
    <>
      {loading && <div id="preloader"></div>}
      {!loading && currentProduct ?
      <>
        <BreadCrumb currentProduct={currentProduct.product_name} link={"/shoporders"} />
        <div className="container">
          <div className="row border border-primary border-3 bg-light mb-0 rounded-0 rounded-top p-2 ff-main text-primary overflow-hidden">
            <div className="border d-flex flex-md-row flex-column border-1 border-primary p-0">
              <div className="col-12 col-md-4 p-0 overflow-hidden">
                <img
                  src={currentProduct.product_img}
                  alt={currentProduct.product_name}
                  className="img-fluid border border-1 border-primary"
                />
              </div>
              <div className="col-12 border border-1 border-primary col-md-4 p-2 pe-4">
                <div className="d-flex align-items-center">
                  <p className="fs-4 text-bold">Product Name:</p>
                  <p className="fs-4 ms-4">{currentProduct.product_name}</p>
                </div>
                <div className="d-flex justify-content-between mb-3">
                  <div className="fs-1 text-bold">₱ {new Intl.NumberFormat().format(parseFloat(currentProduct.amount) * currentProduct.quantity)}</div>
                  <div className="fs-1 text-bold">x {currentProduct.quantity}</div>
                </div>
                <div className="lead fs-5 text-limit-2-lines">{currentProduct.product_desc}</div>
              </div>
              <div className="col-12 col-md-4 p-2 border border-1 border-primary">
                <div className="d-flex justify-content-between align-items-center lh-1">
                  <p className="text-bold fs-4">Order ID:</p>
                  <p className="fs-6">{`KOPI100${currentProduct.order_id}`}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center lh-1">
                  <p className="text-bold fs-4">Order Date:</p>
                  <p className="fs-6">{formatDate(currentProduct.created_at)}</p>
                </div>
                <div>
                  {currentProduct.status === "To Ship" &&
                    <p className="border border-2 bg-info text-light py-1 px-2 rounded">{currentProduct.status_message}</p>
                  }
                  {currentProduct.status === "To Receive" &&
                    <p className="border border-2 bg-info text-light py-1 px-2 rounded">{currentProduct.status_message}</p>
                  }
                  {currentProduct.status === "Completed" &&
                    <p className="border border-2 bg-success text-light py-1 px-2 rounded"><i className="fa-solid fa-circle-check me-2"></i>{currentProduct.status_message} {formatDate(currentProduct.updated_at)}</p>
                  }
                  {currentProduct.status === "Cancelled" &&
                    <p className="border border-2 bg-warning text-light py-1 px-2 rounded"><i className="fa-solid fa-circle-xmark me-2"></i>{currentProduct.status_message}</p>
                  }
                </div>
                {/* {(currentProduct.status !== "Completed" && currentProduct.status !== "Cancelled" && currentProduct.status !== "To Receive") &&
                  <div className="d-flex flex-column">
                    <button className="btn btn-lg rounded btn-outline-warning">Cancel Order</button>
                  </div>
                } */}
              </div>
            </div>
          </div>
          <div className="row border border-primary border-3 border-top-0 bg-light mb-0 p-2 ff-main text-primary mb-5">
            <div className="border d-flex flex-md-row flex-column border-1 border-primary p-0">
              <div className="col-12 lh-1 col-md-6 border border-1 border-primary p-0 overflow-hidden">
                <div className="bg-sage mx-0 px-2">
                  <p className="fs-1 text-bold bg-sage p-2">Delivery Address</p>
                </div>
                <p className="fs-5 mx-3">{userInfo[0].first_name + " " +userInfo[0].last_name}</p>
                <p className="fs-5 mx-3">{currentProduct.address}</p>
                <p className="fs-5 mx-3">{currentProduct.city + ", " + currentProduct.zip_code}</p>
              </div>
              <div className="col-12 lh-1 col-md-6 border border-1 border-primary p-0 overflow-hidden">
                <div className="bg-sage mx-0 px-2">
                  <p className="fs-1 text-bold bg-sage p-2">Shipping Information</p>
                </div>
                <p className="fs-5 mx-3">Standard Local</p>
                <p className="fs-5 mx-3">{"KOPII - KOPII100" + currentProduct.shipment_id}</p>
                <p className="fs-5 mx-3">Expected Shipping Date: {formatDate(currentProduct.shipment_date)}</p>
              </div>
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