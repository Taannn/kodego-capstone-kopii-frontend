import { Link, useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect } from "react";
import { fetchShopUserInfo } from "./userInfoSlice";


const UserInfo = () => {
  const userInfo = useAppSelector((state) => state.shopUserInfo.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(fetchShopUserInfo());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    setTimeout(() => {
      navigate("/kopiishop");
    }, 1000);
  }

  return (
    <div>
      <div className="modal fade" id="logoutModal" tabIndex={-1} aria-labelledby="exampleModalLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered ff-main">
          <div className="modal-content">
            <div className="modal-header bg-secondary border-0 text-light">
              <h1 className="modal-title fs-5" id="exampleModalLabel">Logout</h1>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body bg-secondary text-light fs-4">
              Are you sure you want to log out?
            </div>
            <div className="modal-footer bg-secondary border-0">
              <button onClick={handleLogout} data-bs-dismiss="modal" className="btn btn-primary text-light">Yes</button>
              <button type="button" className="btn btn-warning" data-bs-dismiss="modal">No</button>
            </div>
          </div>
        </div>
      </div>
      {loading && <div id="preloader"></div>}
      {!loading &&
      <>
        <BreadCrumb currentProduct={"User Settings"} link={"/kopiishop"} />
        <div className="container mb-5 ff-main">
          <div className="row">
            <div className="col-12 user-info-bg col-md-8 bg-danger rounded mx-auto text-light ff-main pt-5 px-2 lh-base">
              {userInfo.map((s,i ) => (
                <div key={i}>
                  <h1>{s.first_name + ' ' +  s.last_name}</h1>
                  <p className="lead">{s.email}</p>
                </div>
              ))}
            </div>
          </div>
          {/*  */}
          <div className="row mt-2">
            <Link to="/shoporders" className="col-12 col-md-8 btn btn-outline-dark mx-auto rounded py-3">Kopii Shop Orders</Link>
          </div>
          {/* <div className="row mt-2">
            <Link to="/stoporders" className="col-12 col-md-8 btn btn-outline-dark mx-auto rounded py-3">Kopii Stop Orders</Link>
          </div> */}
          {/* <div className="row mt-2">
            <Link to="/addressinfo" className="col-12 col-md-8 btn btn-outline-dark mx-auto rounded py-3">Addresses and Info</Link>
          </div> */}
          <div className="row mt-2">
            <div data-bs-toggle="modal" data-bs-target="#logoutModal" className="col-12 col-md-8 btn btn-outline-dark mx-auto rounded py-3">
              Logout
            </div>
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default UserInfo
