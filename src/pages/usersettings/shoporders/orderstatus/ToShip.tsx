import { Link } from "react-router-dom";
import { CustomerOrdersProps } from "../KopiiShopOrdersProps";

const ToShip: React.FC<CustomerOrdersProps> = ({ shopCustomerOrders }) => {
  return (
    <div className="tab-pane fade show active" id="to-ship">
      {!shopCustomerOrders.length &&
        <p className="display-1 ff-main text-dark mt-6" style={{ opacity: '.3' }}>No Orders Yet</p>
      }
      {shopCustomerOrders.map((s, i) => (
        <Link to={""} key={i + s.order_id} className="wrapper">
          <div className="row border border-primary border-3 bg-light mb-0 rounded-0 rounded-top">
            <div className="col-6 col-md-3 overflow-hidden rounded p-2">
              <img className="img-fluid" src={s.product_img} alt={s.product_name} />
            </div>
            <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-around p-2">
              <div className="d-flex align-items-center justify-content-center">
                <p className="text-primary h4 ff-main text-ellipsis">{s.product_name}</p>
              </div>
              <div className="d-flex align-items-center justify-content-center">
              <p className="amount display-5 text-bold ff-main lead text-primary">
                  x {s.quantity}
                </p>
              </div>
              <div className="delete d-flex align-items-center justify-content-center gap-1">
                <p className="amount display-5 text-bold ff-main lead text-primary">
                  ₱ {s.amount}
                </p>
              </div>
            </div>
          </div>
          <div className="row border border-primary border-3 border-top-0 bg-light mb-5 rounded-0 rounded-bottom p-2">
            <div className="ms-auto ff-main fs-6 text-primary">
              <i className="fa-regular fa-calendar me-2"></i>
              Shipped Before: {s.shipment_date}
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ToShip;