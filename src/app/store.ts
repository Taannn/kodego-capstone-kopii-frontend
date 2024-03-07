import { configureStore } from '@reduxjs/toolkit'
import loadingLandingReducer from '../pages/landingpage/loadingSliceLanding'
import landingHeroReducer from '../pages/landingpage/lphero/landingHeroSlice'
import landingAboutDataReducer from '../pages/landingpage/lpabout/landingAboutDataSlice'
import landingAboutListReducer from '../pages/landingpage/lpabout/landingAboutListSlice'
import landingStopIntroReducer from '../pages/landingpage/lpstopintro/landingStopIntroSlice'
import landingTestimonialsReducer from '../pages/landingpage/lptestimonials/landingTestimonialsSlice'
import loadingShopReducer from '../pages/kopiishop/loadingSliceShop'

const store = configureStore({
  reducer: {
    loadingLanding: loadingLandingReducer,
    loadingshop: loadingShopReducer,
    lphero: landingHeroReducer,
    lpaboutData: landingAboutDataReducer,
    lpaboutList: landingAboutListReducer,
    lpstopIntro: landingStopIntroReducer,
    lpTestimonials: landingTestimonialsReducer,
  },

})

export default store

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
