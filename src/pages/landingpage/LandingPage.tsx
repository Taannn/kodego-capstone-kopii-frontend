import KopiiAbout from "./KopiiAbout"
import KopiiDiscover from "./KopiiDiscover"
import KopiiHero from "./KopiiHero"
import KopiiStopFeatured from "./KopiiStopFeatured"
import KopiiSubscription from "./KopiiSubscription"
import KopiiTestimonials from "./KopiiTestimonials"

const LandingPage = () => {
  return (
    <>
      <KopiiHero />
      <KopiiDiscover />
      <KopiiAbout />
      <KopiiStopFeatured />
      <KopiiTestimonials />
      <KopiiSubscription />
    </>
  )
}

export default LandingPage