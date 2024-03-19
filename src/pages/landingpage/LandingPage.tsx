import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { setLoadingLanding } from '../preloader/loadingSliceLanding'
import KopiiHero from './lphero/KopiiHero'
import { fetchLandingHero } from './lphero/landingHeroSlice'
import { fetchLandingAboutData } from './lpabout/landingAboutDataSlice'
import KopiiAbout from './lpabout/KopiiAbout'
import { fetchLandingAboutList } from './lpabout/landingAboutListSlice'
import { fetchLandingStopIntro } from './lpstopintro/landingStopIntroSlice'
import KopiiStopFeatured from './lpstopintro/KopiiStopFeatured'
import KopiiTestimonials from './lptestimonials/KopiiTestimonials'
import KopiiSubscription from './lpsubscription/KopiiSubscription'
import { fetchLandingTestimonials } from './lptestimonials/landingTestimonialsSlice'
// import { fetchLandingDiscover } from './lpdiscover/landingDiscoverSlice'
// import KopiiDiscover from './lpdiscover/KopiiDiscover'

const LandingPage = () => {
  const loading = useAppSelector((state) => state.loadingLanding.isLoadingLanding)
  const landingHero = useAppSelector((state) => state.lphero)
  const landingAboutData = useAppSelector((state) => state.lpaboutData)
  const landingAboutList = useAppSelector((state) => state.lpaboutList)
  const landingStopIntro = useAppSelector((state) => state.lpstopIntro)
  const landingTestimonials = useAppSelector((state) => state.lpTestimonials)
  // const landingDiscover = useAppSelector((state) => state.lpdiscover)

  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchLandingHero())
    // dispatch(fetchLandingDiscover())
    dispatch(fetchLandingAboutData())
    dispatch(fetchLandingAboutList())
    dispatch(fetchLandingStopIntro())
    dispatch(fetchLandingTestimonials())

    return () => {
      dispatch(setLoadingLanding(false))
    }
  }, [dispatch])

  return (
    <>
      {loading && <div id='preloader'></div>}
      {!loading && landingHero.error ?<div>Error: {landingHero.error}</div> : null }
      {!loading && landingHero.info.length ? (
        <div>
          <KopiiHero landingHeroProp={landingHero.info} />
          {/* <KopiiDiscover landingDiscover={landingDiscover.info} /> */}
          <KopiiAbout landingAboutData={landingAboutData.info} landingAboutList={landingAboutList.info} />
          <KopiiStopFeatured landingStopIntro={landingStopIntro.info} />
          <KopiiTestimonials landingTestimonials={landingTestimonials.info} />
          <KopiiSubscription />
        </div>
      ) : null}
    </>
  )
}

export default LandingPage