import BreadCrumb from "../../../components/BreadCrumb";

const KopiiShopOrders = () => {
  return (
    <div>
      <BreadCrumb currentProduct={"Kopii Shop Orders"} link={"/userinfo"} />
      <div className="container mt-4">
        <div className="card text-center bg-info text-light full-dimension mb-5">
          <div className="card-header">
            <ul className="nav nav-tabs card-header-tabs ff-main">
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#to-pay">To Pay</a>
              </li>
              <li className="nav-item">
                <a className="nav-link active" data-bs-toggle="tab" href="#to-ship">To Ship</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#to-deliver">To Deliver</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#completed">Completed</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" data-bs-toggle="tab" href="#cancelled">Cancelled</a>
              </li>
            </ul>
          </div>
          <div className="card-body">
            <div className="tab-content ff-main">
              <div className="tab-pane fade" id="to-pay">
                <p className="display-6 ff-main text-dark" style={{ opacity: '.3' }}>No items added</p>
              </div>
              <div className="tab-pane fade show active" id="to-ship">
                <div className="row border border-primary border-3 bg-light mb-5">
                  <div className="col-6 col-md-3 p-2">
                    <img className="img-fluid" src="https://kopiiiiiimg.netlify.app/assets/images/category-cookies-premium-cookies.jpg" alt="cake" />
                  </div>
                  <div className="col-6 col-md-9 d-flex flex-column flex-md-row align-items-center justify-content-evenly p-2">
                    <div className="d-flex align-items-center justify-content-center">
                      <p className="text-primary h4 ff-main text-ellipsis">Product Name</p>
                    </div>
                    <div className="d-flex align-items-center justify-content-center">
                    <p className="amount display-5 text-bold ff-main lead text-primary">
                        x 1
                      </p>
                    </div>
                    <div className="delete d-flex align-items-center justify-content-center gap-1">
                      <p className="amount display-5 text-bold ff-main lead text-primary">
                        ₱ 456.89
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="tab-pane fade" id="to-deliver">
                <p className="display-6 ff-main text-dark" style={{ opacity: '.3' }}>No items added</p>
              </div>
              <div className="tab-pane fade" id="completed">
                <p className="display-6 ff-main text-dark" style={{ opacity: '.3' }}>No items added</p>
              </div>
              <div className="tab-pane fade" id="cancelled">
                <p className="display-6 ff-main text-dark" style={{ opacity: '.3' }}>No items added</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default KopiiShopOrders;