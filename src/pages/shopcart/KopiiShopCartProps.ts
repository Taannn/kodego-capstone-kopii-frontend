// types for shopcarousel
export type ShopCustomerCartProps = {
  product_id: number;
  product_img: string;
  product_name: string;
  quantity: number;
  product_price: string;
};
export type ShopCustomerCartInitState = {
  info: ShopCustomerCartProps[];
  error: string;
};
export type CustomerCartProps = {
  shopCustomerCart: ShopCustomerCartProps[];
};