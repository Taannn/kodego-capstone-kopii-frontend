import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks"
import { loggedInToggle } from "../login/loginSlice";
import { useEffect, useState } from "react";

const UserInfo = () => {
  const [toastToggle, setToastToggle] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(loggedInToggle(false));
  }

  useEffect(() => {
    if (toastToggle) {
      setTimeout(() => {
        setToastToggle(false)
      }, 3000);
    }
  }, [toastToggle])
  const handleToggle = () => {
    setToastToggle(true);
  }
  return (
    <div className="container full-dimension">
      <div className="ff-main text-primary mt-6 display-1 text-center">UserInfo</div>
      <Link to="/kopiishop" onClick={handleLogout} className="btn-lg btn-info text-dark">Logout</Link>
      <button className="btn btn-dark text-light btn-lg" onClick={handleToggle}>Click me</button>
      {/*  */}
      <div className="toast-container position-fixed bottom-0 end-0 p-3 ff-main">
        <div id="liveToast" className={`toast${toastToggle ? ' show':''}`} role="alert" aria-live="assertive" aria-atomic="true">
          <div className="toast-header bg-info text-dark">
            <strong className="me-auto">Product Name</strong>
            <small>1 sec ago</small>
            <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
          </div>
          <div className="toast-body text-dark">
            Successfully added!
          </div>
        </div>
      </div>
    </div>
  )
}

export default UserInfo
