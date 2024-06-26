import { Link } from "react-router-dom";
import { CategoryProps } from "../KopiiShopProps";

const Category: React.FC<CategoryProps> = ({ shopCategory }) => {
  return (
    <div className="d-block d-md-none">
      <div className="container">
        <div className="row ff-main bg-primary my-1 rounded">
          {shopCategory.map((item, index) => (
            <Link to={`/category/${item.category}`} key={index} className="btn rounded text-light btn-primary col-3">
              {item.category}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Category;