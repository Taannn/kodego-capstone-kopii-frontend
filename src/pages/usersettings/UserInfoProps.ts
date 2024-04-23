// types for shopcarousel
export type ShopUserInfoProps = {
  first_name: string;
  last_name: string;
  email: string;
  address: string;
  city: string;
  zip_code: string;
  phone_number: string;
};
export type ShopUserInfoInitState = {
  info: ShopUserInfoProps[];
  error: string;
};
export type UserInfoProps = {
  shopUserInfo: ShopUserInfoProps[];
};
export type UserInfoPropsExtended = UserInfoProps & {
  updateToggle: boolean;
}