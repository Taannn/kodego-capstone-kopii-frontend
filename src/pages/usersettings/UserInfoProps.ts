// types for shopcarousel
export type ShopUserInfoProps = {
  first_name: string;
  last_name: string;
  email: string;
};
export type ShopUserInfoInitState = {
  info: ShopUserInfoProps[];
  error: string;
};
export type UserInfoProps = {
  shopUserInfo: ShopUserInfoProps[];
};