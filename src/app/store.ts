import { configureStore } from '@reduxjs/toolkit';
import loadingLandingReducer from '../pages/preloader/loadingSliceLanding';
import landingHeroReducer from '../pages/landingpage/lphero/landingHeroSlice';
import landingAboutDataReducer from '../pages/landingpage/lpabout/landingAboutDataSlice';
import landingAboutListReducer from '../pages/landingpage/lpabout/landingAboutListSlice';
import landingStopIntroReducer from '../pages/landingpage/lpstopintro/landingStopIntroSlice';
import landingTestimonialsReducer from '../pages/landingpage/lptestimonials/landingTestimonialsSlice';
import loadingShopReducer from '../pages/preloader/loadingSliceShop';
import shopCategoryReducer from '../pages/kopiishop/shopcategory/shopCategorySlice';
import shopCarouselReducer from '../pages/kopiishop/shopcarousel/shopCarouselSlice';
import landingDiscoverReducer from '../pages/landingpage/lpdiscover/landingDiscoverSlice';
import shopHighlyRatedReducer from '../pages/kopiishop/shopproducts/shopHighlyRatedSlice';
import shopDailyDiscoverReducer from '../pages/kopiishop/shopproducts/shopDailyDiscoverSlice';
import shopSelectedProductReducer from '../pages/kopiishop/selectedproduct/kopiiShopSelectedSlice';
import signupReducer from '../pages/signup/signupSlice';
import loginReducer from '../pages/login/loginSlice';
import shopCustomerCartReducer from '../pages/shopcart/shopCustomerCartSlice';
import successfullyAddedReducer from '../pages/kopiishop/selectedproduct/addToCartSlice';
import shopCheckoutReducer from '../pages/kopiishop/orderpage/shopCheckoutSlice';
import shopUserInfoReducer from '../pages/usersettings/userInfoSlice';
import shopOrdersReducer from '../pages/usersettings/shoporders/kopiiShopOrdersSlice';

const store = configureStore({
  reducer: {
    loadingLanding: loadingLandingReducer,
    loadingShop: loadingShopReducer,
    lphero: landingHeroReducer,
    lpaboutData: landingAboutDataReducer,
    lpaboutList: landingAboutListReducer,
    lpstopIntro: landingStopIntroReducer,
    lpTestimonials: landingTestimonialsReducer,
    shopcategory: shopCategoryReducer,
    shopcarousel: shopCarouselReducer,
    lpdiscover: landingDiscoverReducer,
    shophighlyRated: shopHighlyRatedReducer,
    shopdailyDiscover: shopDailyDiscoverReducer,
    shopselectedProduct: shopSelectedProductReducer,
    kopiisignup: signupReducer,
    kopiilogin: loginReducer,
    shopcustomerCart: shopCustomerCartReducer,
    cartsuccessful: successfullyAddedReducer,
    shopCheckout: shopCheckoutReducer,
    shopUserInfo: shopUserInfoReducer,
    kopiishopOrders: shopOrdersReducer,
  },
  middleware: (getDefaultMiddleware) =>
    // to avoid thw warning not sure though if this will do, hoping the code still works
    getDefaultMiddleware({
      immutableCheck: false,
      serializableCheck: false,
    }),
});
export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
