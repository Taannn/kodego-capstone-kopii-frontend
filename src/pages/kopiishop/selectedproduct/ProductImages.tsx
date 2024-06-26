type ProductImagesProps = {
  productImg: string;
  productName: string;
}

const ProductImages: React.FC<ProductImagesProps> = ({ productImg, productName }) => {
  return (
    <div className="col-md-5">
      <div className="main-img">
        <div className="d-none d-lg-block">
          <img className="img-fluid" src={productImg ? productImg : 'https://placehold.jp/600x400.png'} alt={productName} />
        </div>
        <div className="d-block d-lg-none">
          <img className="img-fluid" src={productImg ? productImg : 'https://placehold.jp/600x400.png'} alt={productName} />
        </div>
        <div className="row my-3 previews">
          <div className="col-md-6">
            <img className="w-100 d-none d-lg-block" src={productImg ? productImg : 'https://placehold.jp/600x400.png'} alt={productName} />
          </div>
          <div className="col-md-6">
            <img className="w-100 d-none d-lg-block" src={productImg ? productImg : 'https://placehold.jp/600x400.png'} alt={productName} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductImages;