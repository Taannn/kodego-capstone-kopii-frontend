import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderNav from "./components/HeaderNav"
import LandingPage from "./pages/landingpage/LandingPage"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import KopiiShop from "./pages/kopiishop/KopiiShop"
import ContactUs from "./pages/contactus/ContactUs";
import ErrorPage from "./pages/error/ErrorPage";
import FooterNav from "./components/FooterNav"
import KopiiShopSelected from "./pages/kopiishop/selectedproduct/KopiiShopSelected"
import FilteredCategory from "./pages/kopiishop/filteredcategory/FilteredCategory"
import SearchResult from "./pages/kopiishop/shopsearch/SearchResult"
import KopiiShopCart from "./pages/shopcart/KopiiShopCart"
import UserInfo from "./pages/usersettings/UserInfo"
import KopiiShopOrders from "./pages/usersettings/shoporders/KopiiShopOrders"
import KopiiStopOrders from "./pages/usersettings/stoporders/KopiiStopOrders"
import ShopCheckout from "./pages/kopiishop/orderpage/ShopCheckout"
import ShopOrderComplete from "./pages/kopiishop/ordercomplete/ShopOrderComplete"
import ToShipInfo from "./pages/usersettings/shoporders/infoperstatus/ToShipInfo"
import ScrollToTop from "./components/ScrollToTop"
import Protected from "./pages/protected/Protected"
import TokenExpire from "./pages/protected/TokenExpire"
import { useAppDispatch } from "./app/hooks"
import { useEffect } from "react"
import { fetchShopUserInfo } from "./pages/usersettings/userInfoSlice"

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShopUserInfo());

  }, [dispatch])
  return (
    <BrowserRouter>
      <header>
        <HeaderNav />
      </header>
      <main>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<TokenExpire><LandingPage /></TokenExpire>} />
          <Route path="/login" element={<TokenExpire><Login /></TokenExpire>} />
          <Route path="/signup" element={<TokenExpire><Signup /></TokenExpire>} />
          <Route path="/kopiishop" element={<TokenExpire><KopiiShop /></TokenExpire>} />
          <Route path="/kopiishop/:index" element={<TokenExpire><KopiiShopSelected /></TokenExpire>} />
          <Route path="/category/:category" element={<TokenExpire><FilteredCategory /></TokenExpire>} />
          <Route path="/search/:search" element={<TokenExpire><SearchResult /></TokenExpire>} />
          <Route path="/contactus" element={<TokenExpire><ContactUs /></TokenExpire>} />
          <Route path="/cart" element={<TokenExpire><KopiiShopCart /></TokenExpire>} />
          <Route path="/settings" element={<Protected><UserInfo /></Protected>} />
          <Route path="/shoporders" element={<Protected><KopiiShopOrders /></Protected>} />
          <Route path="/shoporders/:toshipID" element={<Protected><ToShipInfo /></Protected>} />
          <Route path="/stoporders" element={<TokenExpire><KopiiStopOrders /></TokenExpire>} />
          <Route path="/shopcheckout" element={<TokenExpire><ShopCheckout /></TokenExpire>} />
          <Route path="/shop/ordercomplete" element={<Protected><ShopOrderComplete /></Protected>} />
          <Route path="*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer className="text-center text-lg-start text-info bg-primary ff-main">
        <FooterNav />
      </footer>
    </BrowserRouter>
  )
}

export default App
