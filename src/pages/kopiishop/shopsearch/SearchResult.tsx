import { useParams } from "react-router-dom";
import { useAppSelector, useAppDispatch } from "../../../app/hooks";
import BreadCrumb from "../../../components/BreadCrumb";
import { useEffect } from "react";
import { fetchShopDailyDiscover } from "../shopproducts/shopDailyDiscoverSlice";
import ProductsWithSidebar from "../shopproducts/ProductsWithSidebar";

const SearchResult = () => {
  const products = useAppSelector((state) => state.shopdailyDiscover.info);
  const loading = useAppSelector((state) => state.loadingShop.isLoadingShop);
  const { search } = useParams<{ search: string}>();
  const dispatch = useAppDispatch();

  const searchItem = search || "";
  // an easy fix if you're dealing with something that might be undefined, just give it a default value as a fallback :)
  useEffect(() => {
    dispatch(fetchShopDailyDiscover());
  }, [dispatch]);


  const filteredResult = products.filter((product) => {
    return product.product_name.toLowerCase().includes(searchItem.toLowerCase());
  })

  return (
    // <div className="display-1 ff-main mt-6">SearchResullt</div>
    <>
      {loading && <div id='preloader'></div>}
      {!filteredResult.length &&
      <div className=" mt-5 full-dimension align-items-center">
        <BreadCrumb currentProduct={"Search Result"} link={"/kopiishop"} />
        <h1 className="text-center text-dark ff-main op-mid display-1">No Items Found</h1>
      </div>}
      {!loading && filteredResult.length ? (
        <div>
          <BreadCrumb currentProduct={"Search Result"} link={"/kopiishop"} />
          <ProductsWithSidebar shopProducts={filteredResult} desc={`Search for "${searchItem}"`}  />
        </div>
      ) : null}
    </>
  );
};

export default SearchResult;