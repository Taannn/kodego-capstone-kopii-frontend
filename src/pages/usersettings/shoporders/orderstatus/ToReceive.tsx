import { Link } from "react-router-dom";
import { ShopOrdersExtended } from '../ShopOrdersProps';
import axios from "axios";
import { useAppDispatch } from "../../../../app/hooks";
import { fetchShopOrders } from "../kopiiShopOrdersSlice";

const ToReceive: React.FC<ShopOrdersExtended> = ({ shopOrders }) => {
  const dispatch = useAppDispatch();
  const handleCompleted = async (orderId: number) => {
    try {
      const res = await axios.put(`/shop/status/update/completed/${orderId}`, {}, {
        headers: {
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        }
      })
      dispatch(fetchShopOrders());
      return res.data.data;
    } catch (error: any) {
      throw error
    }
  }

  return (
    <div className="tab-pane fade" id="to-deliver">
      {!shopOrders.length &&
        <p className="display-1 ff-main text-dark mt-6" style={{ opacity: '.3' }}>No Orders Yet</p>
      }
      {shopOrders.map((s, i) => (
        <Link to={`/shoporders/${s.order_id}`} key={i + s.order_id} className="wrapper">
          <div className="row border border-primary border-3 bg-light mb-0 rounded-0 rounded-top">
            <div className="col-6 col-md-3 overflow-hidden rounded p-2">
              <img className="img-fluid rounded" src={s.product_img ? s.product_img : 'https://placehold.jp/600x400.png'} alt={s.product_name} />
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
                  ₱ {new Intl.NumberFormat().format(parseFloat(s.amount) * s.quantity)}
                </p>
              </div>
            </div>
          </div>
          <div className="row border border-primary border-3 border-top-0 bg-light mb-5 rounded-0 rounded-bottom p-2">
            <div className="ms-auto ff-main fs-6 text-primary d-flex justify-content-between align-items-center">
              <p className="d-flex align-items-center pt-2">
                <i className="fa-solid fa-truck me-2"></i>
                <span>{s.status_message}</span>
              </p>
              <button onClick={() => {handleCompleted(s.order_id)}} className="btn btn-success text-light px-2 py-1 bs-success rounded">Order Received</button>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ToReceive;