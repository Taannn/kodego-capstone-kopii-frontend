import { BrowserRouter, Routes, Route } from "react-router-dom"
import HeaderNav from "./components/HeaderNav"
import LandingPage from "./pages/landingpage/LandingPage"
import Login from "./pages/login/Login"
import Signup from "./pages/signup/Signup"
import KopiiShop from "./pages/kopiishop/KopiiShop"
import KopiiStop from "./pages/kopiistop/KopiiStop"
import ContactUs from "./pages/contactus/ContactUs"
import ErrorPage from "./pages/error/ErrorPage"
import FooterNav from "./components/FooterNav"

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
          <Route path="/signup" element={<Signup />} />
          <Route path="/kopiishop" element={<KopiiShop />} />
          <Route path="/kopiistop" element={<KopiiStop />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route path="/*" element={<ErrorPage />} />
        </Routes>
      </main>
      <footer id="contact_us" className="text-center text-lg-start text-info bg-primary ff-main">
        <FooterNav />
      </footer>
    </BrowserRouter>
  )
}

export default App
