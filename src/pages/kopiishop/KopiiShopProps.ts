// types for kopiishop loading slice
export type LoadingStateShop = {
  isLoadingShop: boolean;
};
export type IsLoggedInProp = {
  isLoggedIn: boolean;
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

// types for shophihglyrated
export type ShopProductProps = {
  product_id: number;
  discount: number;
  product_name: string;
  product_price: string;
  product_img: string;
  product_rating: string
  product_desc: string;
};
export type ShopProductPropsExtended = ShopProductProps & {
  product_stock: number;
  product_desc: string;
};

export type ShopProductInitState = {
  info: ShopProductProps[];
  error: string;
};
export type ShopSelectedProps = {
  shopProducts: ShopProductPropsExtended[];
};
export type KopiiShopProductProps = {
  shopProducts: ShopProductProps[];
  desc: string | undefined;
};

// types for shopselectedproduct
export type ShopSelectedProductProps = {
  map(arg0: (item: unknown, index: unknown) => import("react/jsx-runtime").JSX.Element): unknown;
  product_id: number;
  discount: number;
  product_name: string;
  product_desc: string;
  product_price: string;
  product_stock: number;
  product_img: string;
  category_name: string;
  starting_quantity: number;
};
export type ShopSelectedProductInitState = {
  info: ShopSelectedProductProps[];
  error: string;
};
export type CurrentProductProps = {
  shopSelectedProduct: ShopSelectedProductProps;
};

export type ProductDetailsProps = {
  productCategory: string;
  discount: number;
  productName: string;
  productPrice: string;
  productDesc: string;
  productId: number;
  productStock: number;
  productImg: string;
  addToCart: () => void;
}

export type CheckoutInitialStateProps = {
  address: string;
  city: string;
  zipCode: string;
  error: string | null;
  finalQuantity: number;
  finalPrice: string;
  productId: number;
  productImg: string;
  productName: string;
  productDesc: string;
  shippingFee: number;
  paymentMethod: string;
  orderStatus: string;
  totalAmount: string;
}