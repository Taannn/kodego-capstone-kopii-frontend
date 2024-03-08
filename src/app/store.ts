import { configureStore } from '@reduxjs/toolkit'
import loadingLandingReducer from '../pages/landingpage/loadingSliceLanding'
import landingHeroReducer from '../pages/landingpage/lphero/landingHeroSlice'
import landingAboutDataReducer from '../pages/landingpage/lpabout/landingAboutDataSlice'
import landingAboutListReducer from '../pages/landingpage/lpabout/landingAboutListSlice'
import landingStopIntroReducer from '../pages/landingpage/lpstopintro/landingStopIntroSlice'
import landingTestimonialsReducer from '../pages/landingpage/lptestimonials/landingTestimonialsSlice'
import loadingShopReducer from '../pages/kopiishop/loadingSliceShop'
import shopCategoryReducer from '../pages/kopiishop/shopcategory/shopCategorySlice'
import shopCarouselReducer from '../pages/kopiishop/shopcarousel/shopCarouselSlice'
import landingDiscoverReducer from '../pages/landingpage/lpdiscover/landingDiscoverSlice'
import shopHighlyRatedReducer from '../pages/kopiishop/shopproducts/shopHighlyRatedSlice'
import shopDailyDiscoverReducer from '../pages/kopiishop/shopproducts/shopDailyDiscoverSlice'
import shopSelectedProductReducer from '../pages/kopiishop/selectedproduct/kopiiShopSelectedSlice'

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
  },
});

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
