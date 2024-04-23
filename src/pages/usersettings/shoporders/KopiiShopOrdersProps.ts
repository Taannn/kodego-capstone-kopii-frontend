// types for shopcarousel
export type ShopCustomerOrdersProps = {
  order_id: number;
  quantity: number;
  created_at: string;
  updated_at: string;
  shipment_id: string;
  shipment_date: string;
  status: string;
  status_message: string;
  address: string;
  city: string;
  zip_code: string;
  payment_method: string;
  amount: string;
  product_name: string;
  product_desc: string;
  product_img: string;
  product_price: string;
  discount: number;
};

export type ShopCustomerOrdersInitState = {
  info: ShopCustomerOrdersProps[];
  error: string;
};
export type ShopOrders = {
  shopOrders: ShopCustomerOrdersProps[];
};
export type ShopOrdersExtended = {
  shopOrders: ShopCustomerOrdersProps[];
};
