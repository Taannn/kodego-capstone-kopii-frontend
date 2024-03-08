import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { setLoadingShop } from './loadingSliceShop';
import SearchBarCart from './shopsearch/SearchBarCart';
import { fetchShopCategory } from './shopcategory/shopCategorySlice';
import Category from './shopcategory/Category';
import { fetchShopCarousel } from './shopcarousel/shopCarouselSlice';
import Carousel from './shopcarousel/Carousel';
import { fetchShopHighlyRated } from './shopproducts/shopHighlyRatedSlice';
import { fetchShopDailyDiscover } from './shopproducts/shopDailyDiscoverSlice';
import KopiiShopProducts from './shopproducts/KopiiShopProducts';

const KopiiShop: React.FC = () => {
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const shopCategory = useAppSelector((state) => state.shopcategory);
  const shopCarousel = useAppSelector((state) => state.shopcarousel);
  const shopHighlyRated = useAppSelector((state) => state.shophighlyRated)
  const shopDailyDiscover = useAppSelector((state) => state.shopdailyDiscover)

  const dispatch = useAppDispatch();
  useEffect(() => {
    dispatch(fetchShopCategory())
    dispatch(fetchShopCarousel())
    dispatch(fetchShopHighlyRated())
    dispatch(fetchShopDailyDiscover())

    return () => {
      dispatch(setLoadingShop(false))
    }
  }, [dispatch]);
  return (
    <>
      {loading && <div id='preloader'></div>}
      {!loading && shopCategory.error ?<div>Error: {shopCategory.error}</div> : null }
      {!loading && shopCategory.info.length ? (
        <div>
          <SearchBarCart />
          <Category shopCategory={shopCategory.info} />
          <Carousel shopCarousel={shopCarousel.info} />
          <KopiiShopProducts shopProducts={shopHighlyRated.info} desc="Best Selling" />
          <KopiiShopProducts shopProducts={shopDailyDiscover.info} desc="Daily Discover" />
        </div>
      ) : null}
    </>
  );
};

export default KopiiShop;
