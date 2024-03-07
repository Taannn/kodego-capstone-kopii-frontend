import { CategoryProps } from "../KopiiShopProps"

const Category: React.FC<CategoryProps> = ({ shopCategory }) => {
  return (
    <div className="">
      <div className="container">
        <div className="row ff-main py-1 ">
          {shopCategory.map((s, i) => (
            <button key={i} className="btn rounded-0 text-light btn-primary col-3">
              {s.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category