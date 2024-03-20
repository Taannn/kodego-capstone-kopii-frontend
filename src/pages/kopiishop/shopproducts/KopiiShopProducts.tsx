import { KopiiShopProductProps } from "../KopiiShopProps";
import { Link } from "react-router-dom";

const KopiiShopProducts: React.FC<KopiiShopProductProps> = ({ shopProducts, desc }) => {
  return (
    <section className="categories pt-0 pt-md-5 mt-0 mt-md-5 px-3 px-md-0">
      <div className="container">
        <div className="row bg-secondary rounded">
          <div className="col ff-main text-center text-light pt-1">
            <h2 className="display-6 lead">{desc}</h2>
          </div>
        </div>
        <div className="row mt-3 mb-5 gy-3">
          {shopProducts.map((s, i) => (
            <div className="col-md-3 col-6" key={i}>
              <Link to={`/kopiishop/${s.product_id}`} className="text-decoration-none">
                <div className="card card-hover-secondary rounded overflow-hidden">
                  <div className="category">
                    <img src={s.product_img} className="img-fluid" alt="" />
                  </div>
                  <div className="card-body px-3 pt-3 pb-0">
                    <div className="card-title text-primary ff-main h6 m-0 text-ellipsis">{s.product_name}</div>
                      <div className="pricing d-flex w-100 ff-main gap-1 align-items-center justify-content-between">
                        <p className="text-bold fs-5 text-dark">₱ {s.product_price}</p>
                        <div className="rating d-flex">
                          <i className="fa-solid fa-star pt-1 me-1" style={{ color: 'yellow', fontSize: '1rem'}}></i>
                          <p>{s.product_rating}</p>
                        </div>
                      </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default KopiiShopProducts