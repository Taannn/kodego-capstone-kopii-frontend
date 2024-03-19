// types for shopcarousel
export type ShopCustomerOrdersProps = {
  order_id: number;
  quantity: number;
  order_date: string;
  shipment_id: string;
  shipment_date: string;
  address: string;
  city: string;
  zip_code: string;
  payment_method: string;
  amount: string;
  product_name: string;
  product_desc: string;
  product_img: string;
};
export type ShopCustomerOrdersInitState = {
  info: ShopCustomerOrdersProps[];
  error: string;
};
export type CustomerOrdersProps = {
  shopCustomerOrders: ShopCustomerOrdersProps[];
};