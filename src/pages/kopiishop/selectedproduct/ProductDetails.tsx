type ProductDetailsProps = {
  productCategory: string;
  productName: string;
  productPrice: string;
  startingQuantity: number;
  productDesc: string;
  increment: () => void;
  decrement: () => void;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({
  productCategory,
  productName,
  productPrice,
  startingQuantity,
  productDesc,
  increment,
  decrement
}) => {
  return (
    <div className="col-md-7">
      <div className="main-description px-2">
        <div className="category text-bold text-secondary">
          Category: {productCategory}
        </div>
        <div className="product-title text-bold my-2">
          {productName}
        </div>
        <div className="price-area mt-2 mb-4">
          <p className="new-price text-bold mb-1">₱ {productPrice}</p>
        </div>
        <div className="buttons d-flex my-5">
          <div className="block">
            <a href="cart.html" className="shadow btn btn-lg btn-secondary bs-secondary rounded">Buy Now</a>
          </div>
          <div className="block">
            <a href="signup.html" className="shadow btn btn-lg btn-secondary add-to-cart-btn bs-secondary rounded">Add to cart</a>
          </div>
          <div className="block quantity d-flex gap-1 ms-2">
            <button onClick={increment} className="btn btn-lg rounded bg-info">+</button>
            <span className="btn btn-lg btn-disabled rounded bg-info">{startingQuantity}</span>
            <button onClick={decrement} className="btn btn-lg rounded bg-info">-</button>
          </div>
        </div>
      </div>
      <div className="product-details my-4">
        <p className="details-title text-color mb-1">Product Details</p>
        <p className="description">{productDesc}</p>
      </div>
      <div className="row questions bg-light p-3">
        <div className="col-md-1 icon">
          <i className="fa-solid fa-ellipsis"></i>
        </div>
        <div className="col-md-11 text">
          Have a question about our products at Kopii? Feel free to contact our representatives via Contact Us or email.
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;