const categories = [
  { category: 'Mugs' },
  { category: 'Coffee' },
  { category: 'Teacups' },
  { category: 'Merchandise' },
]


const Category = () => {
  return (
    <div className="">
      <div className="container">
        <div className="row ff-main py-1 ">
          {categories.map(c => (
            <button className="btn rounded-0 text-light btn-primary col-3">
              {c.category}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Category