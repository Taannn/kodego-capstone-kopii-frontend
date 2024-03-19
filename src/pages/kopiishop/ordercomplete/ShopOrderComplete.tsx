import BreadCrumb from "../../../components/BreadCrumb";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import { fetchShopDailyDiscover } from "../shopproducts/shopDailyDiscoverSlice";
import KopiiShopProducts from "../shopproducts/KopiiShopProducts";

const ShopOrderComplete = () => {
  const dispatch = useAppDispatch();
  const dailyDiscover = useAppSelector((state) => state.shopdailyDiscover.info);
  const moreProducts  = dailyDiscover.slice(0, 4);

  useEffect(() => {
    dispatch(fetchShopDailyDiscover());
  }, [dispatch])

  return (
    <div>
      <BreadCrumb currentProduct={"Order Placed"} link={"/kopiishop"} />
      <section className="product-details border-bottom border-primary border-1 mt-5 pt-4">
        <div className="container">
          <div className="row">
            <div className="col ff-main">
              <h1 className="display-1 text-success"><i className="fa-regular  fa-circle-check me-2"></i>Order Placed</h1>
              <h1 className="display-6 text-primary">Greetings from Kopii!</h1>
              <p className="lead ms-2 text-primary">Your Order has been placed successfully.</p>
            </div>
          </div>
        </div>
        </section>
        <KopiiShopProducts shopProducts={moreProducts} desc={"More Products"} />
    </div>
  );
};

export default ShopOrderComplete;