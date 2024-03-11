import BreadCrumb from "../kopiishop/selectedproduct/BreadCrumb";

const KopiiShopCart = () => {
  return (
    <div>
      <BreadCrumb currentProduct={"Cart"} />
      <div className="container px-4">
        <div className="row bg-sage text-center-ff-main mb-4 mb-md-5 p-2">
          <div className="col-6 col-md-3 ff-main h1 text-center">Product</div>
          <div className="col-6 col-md-9 ff-main h1 text-center">Controls</div>
        </div>
        <div className="row border border-primary border-3 bg-light mb-5">
          <div className="col-6 col-md-3 p-2">
            <img className="img-fluid" src="https://kopiiiiiimg.netlify.app/assets/images/category-teacups-dark-velvet.jpg" alt="" />
            <p className="text-primary h4 ff-main text-ellipsis">Kopii Example Product Name etc etc etc</p>
          </div>
          <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2">
            <div className="block quantity d-flex gap-1">
              <button className="btn rounded bg-danger text-light">+</button>
              <span className="btn btn-disabled rounded bg-danger text-light">1</span>
              <button className="btn rounded bg-danger text-light">-</button>
            </div>
            <div className="d-flex align-items-center justify-content-center">
              <p className="amount display-5 text-bold ff-main lead text-primary">₱ 1335.88</p>
            </div>
            <div className="delete d-flex align-items-center justify-content-center gap-1">
              <button className="btn rounded bg-warning text-light ff-main">Delete</button>
              <button className="btn rounded bg-success text-light ff-main">Checkout</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KopiiShopCart;