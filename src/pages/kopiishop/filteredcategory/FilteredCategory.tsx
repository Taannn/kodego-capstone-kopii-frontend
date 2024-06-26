import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../app/hooks";
import axios from "axios";
import { useParams } from "react-router-dom";
import { setLoadingShop } from "../../preloader/loadingSliceShop";
// import KopiiShopProducts from "../shopproducts/KopiiShopProducts";
import BreadCrumb from "../../../components/BreadCrumb";
import ProductsWithSidebar from "../shopproducts/ProductsWithSidebar";

const FilteredCategory = () => {
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop)
  const { category } = useParams<{ category: string }>()
  const [products, setProducts] = useState([])
  const dispatch = useAppDispatch()

  useEffect(() => {
    const fetchCategory = async () => {
      dispatch(setLoadingShop(true));
    try {
      const response = await axios.get(`/shop/category/${category}`);
      setProducts(response.data.data);
    } catch (error) {
      console.error(`Error fetching: ${error}`);
    } finally {
      dispatch(setLoadingShop(false));
    }
    }
    fetchCategory()

    return () => {
      dispatch(setLoadingShop(false))
    }
  }, [dispatch])
  return (
    <>
      {loading && <div id='preloader'></div>}
      {!loading && products.length ? (
        <div>
          <BreadCrumb currentProduct={category} link={"/kopiishop"} />
          {/* <KopiiShopProducts shopProducts={products} desc={`Category: ${category}`}  /> */}
          <ProductsWithSidebar shopProducts={products} desc={`Category: ${category}`} />
        </div>
      ) : null}
    </>
  );
};

export default FilteredCategory;