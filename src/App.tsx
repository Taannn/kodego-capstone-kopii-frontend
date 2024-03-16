import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderNav from "./components/HeaderNav"
import LandingPage from "./pages/landingpage/LandingPage"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import KopiiShop from "./pages/kopiishop/KopiiShop"
import KopiiStop from "./pages/kopiistop/KopiiStop";
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
import AddressAndInfo from "./pages/usersettings/addressinfo/AddressAndInfo"


function App() {
  return (
    <BrowserRouter>
      <header>
        <HeaderNav />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/kopiishop" element={<KopiiShop />} />
          <Route path="/kopiishop/:index" element={<KopiiShopSelected />} />
          <Route path="/category/:category" element={<FilteredCategory />} />
          <Route path="search/:search" element={<SearchResult />} />
          <Route path="/kopiistop" element={<KopiiStop />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/cart" element={<KopiiShopCart />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/shoporders" element={<KopiiShopOrders />} />
          <Route path="/stoporders" element={<KopiiStopOrders />} />
          <Route path="/addressinfo" element={<AddressAndInfo />} />
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
