import { useAppSelector } from "../../../app/hooks";

const OrderedProduct = () => {
  const formData = useAppSelector((state) => state.shopCheckout);

  return (
    <div className="col-12 col-md-8 border border-info border-3 bg-light mb-5 d-flex p-2 pb-0 mx-auto rounded">
      <div className="w-50">
        <div className="rounded overflow-hidden">
          <img className="img-fluid" src={formData.productImg} alt="" />
        </div>
        <p className="text-primary h4 ff-main text-ellipsis">Product Name</p>
      </div>
      <div className="align-items-center w-50">
        <div className="d-flex flex-column justify-content-between ff-main text-primary ms-4">
          <p className="amount display-3 text-bold lh-1">₱ {formData.finalPrice}</p>
          <p className="amount fs-2">Quantity: {formData.finalQuantity}</p>
          {/* <p className="amount fs-4 lead">{formData.}</p> */}
        </div>
      </div>
    </div>
  );
};

export default OrderedProduct;