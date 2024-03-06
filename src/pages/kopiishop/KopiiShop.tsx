import React from "react"
import Carousel from "./Carousel"
import Category from "./Category"
import SearchBarCart from "./SearchBarCart"

const KopiiShop: React.FC = () => {
  return (
    <>
      <SearchBarCart />
      <Category />
      <Carousel />
    </>
  )
}

export default KopiiShop
