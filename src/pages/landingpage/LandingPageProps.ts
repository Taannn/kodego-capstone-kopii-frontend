// types for landingpage loading slice
export type LoadingStateLanding = {
  isLoadingLanding: boolean;
};

// types for lphero
export type LandingHeroProps = {
  hero_title: string;
  hero_about: string;
  hero_btn: string;
}
export type LandingHeroInitState = {
  info: LandingHeroProps[];
  error: string;
}
export type KopiiHeroProps = {
  landingHeroProp: LandingHeroProps[];
};

// types for lpabout data
export type LandingAboutDataProps = {
  img_src: string;
  title: string;
  text: string;
}
export type LandingAboutDataInitState = {
  info: LandingAboutDataProps[];
  error: string;
}

// types for lpabbout list
export type LandingAboutListProps = {
  icon_class: string;
  title: string;
  text: string;
}
export type LandingAboutListInitState = {
  info: LandingAboutListProps[];
  error: string;
}
export type KopiiAboutProps = {
  landingAboutData: LandingAboutDataProps[];
  landingAboutList: LandingAboutListProps[];
};

// types for lpstopintro
export type LandingStopIntroProps = {
  title: string;
  about: string;
  btn: string;
  img: string;
}
export type LandingStopIntroInitState = {
  info: LandingStopIntroProps[];
  error: string;
}
export type KopiiStopFeaturedProps = {
  landingStopIntro: LandingStopIntroProps[];
};

// types for lptestimonials
export type LandingTestimonialsProps = {
  name: string;
  role: string;
  avatar_src: string;
  text: string;
}
export type LandingTestimonialsInitState = {
  info: LandingTestimonialsProps[];
  error: string;
}
export type KopiiTestimonialsProps = {
  landingTestimonials: LandingTestimonialsProps[];
};

// types for lpdiscover
export type LandingDiscoverProps = {
  title: string;
  img1: string;
  im2: string;
}
export type LandingDiscoverInitState = {
  info: LandingDiscoverProps[];
  error: string;
}
export type KopiiDiscoverProps = {
  landingDiscover: LandingDiscoverProps[];
};
