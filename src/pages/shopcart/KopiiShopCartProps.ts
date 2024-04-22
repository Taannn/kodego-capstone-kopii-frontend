export type ShopCustomerCartProps = {
  cart_id: number;
  product_id: number;
  discount: number;
  product_img: string;
  product_name: string;
  product_desc: string;
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