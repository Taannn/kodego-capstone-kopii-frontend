import BreadCrumb from "../../../components/BreadCrumb";
import Div from "../../../components/Div";
import TabLink from "../../../components/TabLink";
import Completed from "./orderstatus/Completed";
import ToPay from "./orderstatus/ToPay";
import ToReceive from "./orderstatus/ToReceive";
import ToShip from "./orderstatus/ToShip";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { useEffect } from "react";
import { fetchShopOrders } from "./kopiiShopOrdersSlice";

const KopiiShopOrders = () => {
  const shopOrders = useAppSelector((state) => state.shopOrders);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const dispatch = useAppDispatch();
  const toShip = shopOrders.info.filter(shopOrder => shopOrder.status === "To Ship");
  const toReceive = shopOrders.info.filter(shopOrder => shopOrder.status === "To Receive");
  const completed = shopOrders.info.filter(shopOrder => shopOrder.status === "Completed");

  useEffect(() => {
    dispatch(fetchShopOrders());
  }, [dispatch]);
  return (
    <div>
      {loading && <div id="preloader"></div>}
      {!loading &&
      <>
        <BreadCrumb currentProduct={"Kopii Shop Orders"} link={"/kopiishop"} />
        <Div styles="container mt-4">
          <Div styles="card text-center bg-secondary text-light vh-100 overflow-auto mb-5">
            <Div styles="card-header">
              <ul className="nav nav-tabs card-header-tabs ff-main">
                <TabLink href="#to-pay" label="To Pay" active={false} />
                <TabLink href="#to-ship" label="To Ship" active={true} />
                <TabLink href="#to-deliver" label="To Deliver" active={false} />
                <TabLink href="#completed" label="Completed" active={false} />
              </ul>
            </Div>
            <Div styles="card-body">
              <Div styles="tab-content ff-main px-2">
                <ToPay />
                <ToShip shopOrders={toShip} />
                <ToReceive shopOrders={toReceive} />
                <Completed shopOrders={completed} />
              </Div>
            </Div>
          </Div>
        </Div>
      </>
      }
    </div>
  );
};

export default KopiiShopOrders;