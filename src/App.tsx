import React, { useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useAppDispatch } from "./app/hooks";
import { fetchShopUserInfo } from "./pages/usersettings/userInfoSlice";


import HeaderNav from "./components/HeaderNav";
import FooterNav from "./components/FooterNav";
import LandingPage from "./pages/landingpage/LandingPage";
import Signup from "./pages/signup/Signup";
import Login from "./pages/login/Login";
const ScrollToTop = React.lazy(() => import("./components/ScrollToTop"));
const KopiiShop = React.lazy(() => import("./pages/kopiishop/KopiiShop"));
const KopiiShopSelected = React.lazy(() => import("./pages/kopiishop/selectedproduct/KopiiShopSelected"));
const FilteredCategory = React.lazy(() => import("./pages/kopiishop/filteredcategory/FilteredCategory"));
const SearchResult = React.lazy(() => import("./pages/kopiishop/shopsearch/SearchResult"));
const KopiiShopCart = React.lazy(() => import("./pages/shopcart/KopiiShopCart"));
const ContactUs = React.lazy(() => import("./pages/contactus/ContactUs"));
const UserInfo = React.lazy(() => import("./pages/usersettings/UserInfo"));
const KopiiShopOrders = React.lazy(() => import("./pages/usersettings/shoporders/KopiiShopOrders"));
const KopiiStopOrders = React.lazy(() => import("./pages/usersettings/stoporders/KopiiStopOrders"));
const ShopCheckout = React.lazy(() => import("./pages/kopiishop/orderpage/ShopCheckout"));
const ShopOrderComplete = React.lazy(() => import("./pages/kopiishop/ordercomplete/ShopOrderComplete"));
const ToShipInfo = React.lazy(() => import("./pages/usersettings/shoporders/infoperstatus/ToShipInfo"));
const Protected = React.lazy(() => import("./pages/protected/Protected"));
const TokenExpire = React.lazy(() => import("./pages/protected/TokenExpire"));
const ErrorPage = React.lazy(() => import("./pages/error/ErrorPage"));

function App() {
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchShopUserInfo());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <header>
        <React.Suspense fallback={<div id="preloader"></div>}>
          <HeaderNav />
        </React.Suspense>
      </header>
      <main>
        <React.Suspense fallback={<div id="preloader"></div>}>
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<TokenExpire><LandingPage /></TokenExpire>} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/kopiishop" element={<TokenExpire><KopiiShop /></TokenExpire>} />
            <Route path="/kopiishop/:index" element={<TokenExpire><KopiiShopSelected /></TokenExpire>} />
            <Route path="/category/:category" element={<TokenExpire><FilteredCategory /></TokenExpire>} />
            <Route path="/search/:search" element={<TokenExpire><SearchResult /></TokenExpire>} />
            <Route path="/contactus" element={<TokenExpire><ContactUs /></TokenExpire>} />
            <Route path="/cart" element={<TokenExpire><KopiiShopCart /></TokenExpire>} />
            <Route path="/settings" element={<Protected><UserInfo /></Protected>} />
            <Route path="/shoporders" element={<Protected><KopiiShopOrders /></Protected>} />
            <Route path="/shoporders/:toshipID" element={<TokenExpire><Protected><ToShipInfo /></Protected></TokenExpire>} />
            <Route path="/stoporders" element={<TokenExpire><KopiiStopOrders /></TokenExpire>} />
            <Route path="/shopcheckout" element={<TokenExpire><ShopCheckout /></TokenExpire>} />
            <Route path="/shop/ordercomplete" element={<TokenExpire><Protected><ShopOrderComplete /></Protected></TokenExpire>} />
            <Route path="*" element={<ErrorPage />} />
          </Routes>
        </React.Suspense>
      </main>
      <footer className="text-center text-lg-start text-info bg-primary ff-main">
        <React.Suspense fallback={<div id="preloader"></div>}>
          <FooterNav />
        </React.Suspense>
      </footer>
    </BrowserRouter>
  );
}

export default App;