import { useAppSelector } from "../../../app/hooks";

const OrderedProduct = () => {
  const formData = useAppSelector((state) => state.shopCheckout);

  return (
    <div className="col-12 col-md-8 bg-info bs-info mb-5 d-flex p-2 mx-auto rounded">
      <div className="w-50">
        <div className="rounded overflow-hidden">
          <img className="img-fluid" src={formData.productImg} alt="" />
        </div>
      </div>
      <div className="align-items-center w-50">
        <div className="d-flex flex-column justify-content-between ff-main text-danger ms-4">
          <p className="amount display-3 text-bold lh-1">₱ {new Intl.NumberFormat().format(parseFloat(formData.finalPrice))}</p>
          <p className="amount fs-5 text-danger">Quantity: {formData.finalQuantity}</p>
          <p className="text-danger fs-2 text-bold ff-main text-danger lh-1 text-ellipsis">{formData.productName}</p>
          <p className="amount lead d-none d-md-block text-danger">{formData.productDesc}</p>
        </div>
      </div>
    </div>
  );
};

export default OrderedProduct;