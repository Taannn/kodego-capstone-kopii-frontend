import { useAppDispatch, useAppSelector } from "../../../../app/hooks";
import BreadCrumb from "../../../../components/BreadCrumb";
import { fetchShopUserInfo } from "../../userInfoSlice";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchShopOrders } from "../kopiiShopOrdersSlice";
import { ShopCustomerOrdersProps } from "../ShopOrdersProps";
import CancelReasons from "./CancelReasons";
import { reasonInput, setCancelToggle } from "./cancelReasonSlice";
import axios from "axios";

type OptionProps = {
  year: "numeric" | "2-digit";
  month: "numeric" | "2-digit" | "long" | "short" | "narrow";
  day: "numeric" | "2-digit";
};

const ToShipInfo = () => {
  const customerOrders = useAppSelector((state) => state.kopiishopOrders);
  const reason = useAppSelector((state) => state.cancelReasonOrder.reason);
  const userInfo = useAppSelector((state) => state.shopUserInfo.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const { toshipID } = useParams<{ toshipID: string }>()
  const currentProduct: ShopCustomerOrdersProps | undefined = customerOrders.info.find(customerOrder => customerOrder.order_id === +toshipID!);

  const formatDate = (dateString: string) => {
    const options: OptionProps = { year: "numeric", month: "long", day: "numeric" };
    return new Date(dateString).toLocaleDateString("en-US", options);
  };

  const handleCancel = async (id: number | undefined) => {
    if (id === undefined || reason === '') {
      dispatch(setCancelToggle(true));
      return;
    }
    dispatch(setCancelToggle(false));
    try {
      const res = await axios.put(`/shop/status/update/cancelled/${id}`, {
        status_message: reason
      }, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      dispatch(reasonInput(''));
      navigate("/shoporders");
      return res.data.data;
    } catch (error: any) {
      throw error
    }
  }

  useEffect(() => {
    dispatch(fetchShopOrders());
    dispatch(fetchShopUserInfo());
    return () => {
      dispatch(reasonInput(''));
    }
  }, [dispatch]);

  return (
    <>
      <div className="modal fade" id="cancelOrderModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered ff-main">
            <div className="modal-content">
              <div className="modal-header bg-secondary border-0 text-light">
                <h1 className="modal-title fs-4" id="exampleModalLabel">Reason for cancelling your order</h1>
                <button onClick={() => dispatch(reasonInput(''))} className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body my-0 bg-secondary text-light fs-6">
                <CancelReasons />
              </div>
              <div className="modal-footer bg-secondary border-0">
                <button onClick={() => {handleCancel(currentProduct?.order_id)}} data-bs-dismiss="modal" className={`btn btn-primary text-light${reason === '' ? ' disabled' : ''}`}>Confirm</button>
                <button onClick={() => dispatch(reasonInput(''))} className="btn btn-warning" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
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
              <div className="col-12 col-md-4 p-2 border border-1 border-primary position-relative">
                <div className="d-flex justify-content-between align-items-center lh-1">
                  <p className="text-bold fs-4">Order ID:</p>
                  <p className="fs-6">{`KOPI100${currentProduct.order_id}`}</p>
                </div>
                <div className="d-flex justify-content-between align-items-center lh-1">
                  <p className="text-bold fs-4">Order Date:</p>
                  <p className="fs-6">{formatDate(currentProduct.created_at)}</p>
                </div>
                <div className="mb-5rem">
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
                {(currentProduct.status !== "Completed" && currentProduct.status !== "Cancelled" && currentProduct.status !== "To Receive") &&
                  <div className="d-flex flex-column position-absolute bottom-0 mb-2 start-0 end-0 w-full mx-3">
                    <button
                      className="btn btn-lg rounded btn-outline-warning w-100"
                      data-bs-toggle="modal"
                      data-bs-target="#cancelOrderModal"
                    >
                      Cancel Order
                    </button>
                  </div>
                }
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
                {currentProduct.status === 'To Ship' &&
                  <p className="fs-5 mx-3">Expected Shipping Date: {formatDate(currentProduct.shipment_date)}</p>
                }
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