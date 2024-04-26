import { useNavigate } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import BreadCrumb from "../../components/BreadCrumb";
import { useEffect } from "react";
import { fetchShopUserInfo } from "./userInfoSlice";
import ChangePassword from "./usercredentials/ChangePassword";
import UpdateAddress from "./usercredentials/UpdateAddress";
import { ShopUserInfoProps } from "./UserInfoProps";

const UserInfo = () => {
  const userInfo: ShopUserInfoProps[] = useAppSelector((state) => state.shopUserInfo.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(fetchShopUserInfo());
  }, [dispatch]);

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('tokenExpiration');
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
      {!loading && userInfo.length > 0 &&
      <>
        <BreadCrumb currentProduct={"Profile and Info"} link={"/kopiishop"} />
        <div className="container mb-5 ff-main">
          <div className="row">
            <div className="col-11 user-info-bg col-md-8 bg-danger d-flex justify-content-between align-items-center rounded mx-auto text-light ff-main pt-5 px-2 lh-base">
                <div className="h-100">
                  {userInfo.map((u, i) => (
                    <div key={i}>
                      <h1 className="ls-2">{u.first_name + ' ' +  u.last_name}</h1>
                      <p className="lead ls-1">{u.email}</p>
                    </div>
                  ))}
                </div>
                <div className="h-100 pt-2">
                  <a
                    className="btn btn-secondary bs-secondary card-hover-secondary text-light px-4 py-2 rounded-sm"
                    data-bs-toggle="modal"
                    data-bs-target="#logoutModal">
                    Logout
                  </a>
                </div>
            </div>
            {userInfo.map((u, i) => (
              <div key={i} className="mt-2 grid-cols-2 col-11 bg-danger col-md-8 px-4 py-3 rounded mx-auto ls-1">
                {u.address && u.city && u.zip_code ?
                  <p className="text-secondary">Address:<span className="text-bold ms-3 text-light">{u.address}{", "}{u.city}{", "}{u.zip_code}</span></p>
                :
                  <p className="text-secondary">Address:<span className="text-bold ms-3 text-light">Not Set</span></p>
                }
                {u.address && u.city && u.zip_code ?
                  <>
                    <p className="text-secondary">Phone No.
                      <span className="text-bold ms-3 text-light">{u.phone_number}</span>
                    </p>
                  </>
                :
                  <p className="text-secondary">Phone No.<span className="text-bold ms-3 text-light">Not Set</span></p>
                }
              </div>
            ))}
            <ChangePassword />
            {userInfo.length > 0 && <UpdateAddress shopUserInfo={userInfo[0]} />}
          </div>
        </div>
      </>
      }
    </div>
  )
}

export default UserInfo;
