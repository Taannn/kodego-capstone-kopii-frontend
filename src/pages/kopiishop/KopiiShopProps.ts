// types for kopiishop loading slice
export type LoadingStateShop = {
  isLoadingShop: boolean;
};

// types for shopcategory
export type ShopCategoryProps = {
  category: string;
};
export type ShopCategoryInitState = {
  info: ShopCategoryProps[];
  error: string;
};
export type CategoryProps = {
  shopCategory: ShopCategoryProps[];
};

// types for shopcarousel
export type ShopCarouselProps = {
  id: number;
  img: string;
  title: string;
  about: string;
};
export type ShopCarouselInitState = {
  info: ShopCarouselProps[];
  error: string;
};
export type CarouselProps = {
  shopCarousel: ShopCarouselProps[];
};