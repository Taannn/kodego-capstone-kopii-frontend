import { CustomerCartProps } from "./KopiiShopCartProps"
const CustomerCart: React.FC<CustomerCartProps> = ({ shopCustomerCart }) => {
  return (
    <>
      {shopCustomerCart.map((s, i) => (
        <div key={i + s.product_id} className="row border border-primary border-3 bg-light mb-5">
          <div className="col-6 col-md-3 p-2">
            <img className="img-fluid" src={s.product_img} alt={s.product_name} />
            <p className="text-primary h4 ff-main text-ellipsis">{s.product_name}</p>
          </div>
          <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2">
            <div className="block quantity d-flex gap-1">
              <button className="btn rounded bg-danger text-light">+</button>
              <span className="btn btn-disabled rounded bg-danger text-light">{s.quantity}</span>
              <button className="btn rounded bg-danger text-light">-</button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p className="amount display-5 text-bold ff-main lead text-primary">₱ {s.product_price}</p>
            </div>
            <div className="delete d-flex align-items-center justify-content-center gap-1">
              <button className="btn rounded bg-warning text-light ff-main">Delete</button>
              <button className="btn rounded bg-success text-light ff-main">Checkout</button>
            </div>
          </div>
        </div>
      ))}
    </>
  )
}

export default CustomerCart