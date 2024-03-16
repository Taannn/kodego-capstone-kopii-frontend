import { Link } from "react-router-dom";

type BreadCrumbProps = {
  currentProduct: string | undefined;
  link: string;
}

const BreadCrumb:React.FC<BreadCrumbProps> = ({ currentProduct, link }) => {
  return (
    <div className="container mt-5 pt-3 ff-main">
      <nav aria-label="breadcrumb">
        <ol className="breadcrumb">
          <li className="breadcrumb-item"><Link to={link}>Back</Link></li>
          <li className="breadcrumb-item active" aria-current="page">{currentProduct}</li>
        </ol>
      </nav>
    </div>
  );
};

export default BreadCrumb;