import { Link } from "react-router-dom";
import { useAppDispatch } from "../../app/hooks"
import { setIsLoggedIn } from "../login/isLoggedInSlice"

const UserInfo = () => {
  const dispatch = useAppDispatch();
  const handleLogout = () => {
    localStorage.removeItem('token');
    dispatch(setIsLoggedIn(false));
  }

  return (
    <>
      <div className="ff-main text-primary mt-6 display-1 text-center">UserInfo</div>
      <Link to="/kopiishop" onClick={handleLogout} className="btn-lg btn-info text-dark">Logout</Link>
    </>
  )
}

export default UserInfo
