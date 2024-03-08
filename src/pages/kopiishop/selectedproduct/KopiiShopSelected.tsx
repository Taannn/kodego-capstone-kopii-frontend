import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { setLoadingShop } from '../loadingSliceShop';
import { fetchShopSelectedProduct } from './kopiiShopSelectedSlice';
import { useParams } from 'react-router-dom';
import CurrentProduct from './CurrentProduct';

const KopiiShopSelected: React.FC = () => {
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop)
  const shopSelected = useAppSelector((state) => state.shopselectedProduct.info)
  const { index } = useParams<{ index: string }>()

  const currentProduct = shopSelected.find((s) => s.product_id === +index!);
  const dispatch = useAppDispatch();

  if (!currentProduct) {
    <div>Item not found!</div>
  }

  useEffect(() => {
    dispatch(fetchShopSelectedProduct())

    return () => {
      dispatch(setLoadingShop(false))
    }
  }, [dispatch])

  return (
    <div>
      {loading && <div id='preloader'></div>}
      {/* {!loading && currentProduct.error ?<div>Error: {currentProduct.error}</div> : null } */}
      {!loading && currentProduct ? (
        <CurrentProduct shopSelectedProduct={currentProduct} />
      ) : null}
    </div>
  )
}

export default KopiiShopSelected