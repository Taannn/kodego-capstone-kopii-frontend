import { useAppSelector } from "../../../app/hooks";

const PlaceOrder: React.FC = () => {
  const formData = useAppSelector((state) => state.shopCheckout);

  return (
    <div className="col-12 col-md-8 border border-info border-3 bg-light my-5 d-flex p-2 mx-auto rounded d-flex flex-column">
      <div className="d-flex justify-content-between flex-row">
        <div className="p-2">
          <div className="d-flex flex-column ff-main text-primary">
            <p className="fs-5 text-bold lh-1">
              <i className="fa-solid fa-truck me-2"></i>
              Shipping Fee
            </p>
            <p className="fs-5 text-bold lh-1">
              <i className="fa-solid fa-tag me-2"></i>
              Product Price:
            </p>
            <p className="fs-3 text-bold lh-1">
              <i className="fa-solid fa-money-check me-2"></i>
              Total Amount:
            </p>
          </div>
        </div>
        <div className="p-2">
          <div className="d-flex flex-column ff-main text-primary">
            <p className="fs-5 text-bold lh-1">₱ {formData.shippingFee}</p>
            <p className="fs-5 text-bold lh-1">₱ {formData.finalPrice}</p>
            <p className="fs-3 text-bold lh-1">₱ {formData.totalAmount}</p>
          </div>
        </div>
      </div>
      {/*  */}
      <div>
        <button type="submit" className="btn btn-lg btn-secondary d-block ms-auto">Place Order</button>
      </div>
    </div>
  );
};

export default PlaceOrder;