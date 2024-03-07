interface CardData {
  id: number;
  imageUrl: string;
  categoryLink: string;
  categoryName: string;
}

const cardData: CardData[] = [
  {
    id: 1,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-breakfast-fruit-pancake.jpg',
    categoryLink: '#',
    categoryName: 'Breakfast',
  },
  {
    id: 2,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-cookies-dark-chocolate-cookies.jpg',
    categoryLink: 'stop-category-logged-ver.html',
    categoryName: 'Cookies',
  },
  {
    id: 3,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-pastries-donuts.jpg',
    categoryLink: '#',
    categoryName: 'Pastries',
  },
  {
    id: 4,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-desserts-red-velvet-slice.jpg',
    categoryLink: '#',
    categoryName: 'Desserts',
  },
  {
    id: 5,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-desserts-red-velvet-slice.jpg',
    categoryLink: '#',
    categoryName: 'Desserts',
  },
  {
    id: 6,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-desserts-red-velvet-slice.jpg',
    categoryLink: '#',
    categoryName: 'Desserts',
  },
  {
    id: 7,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-desserts-red-velvet-slice.jpg',
    categoryLink: '#',
    categoryName: 'Desserts',
  },
  {
    id: 8,
    imageUrl: 'https://kopiiiiiimg.netlify.app/assets/images/category-desserts-red-velvet-slice.jpg',
    categoryLink: '#',
    categoryName: 'Desserts',
  },
];

const Categories: React.FC = () => {
  return (
    <section className="categories pt-0 pt-md-5 mt-0 mt-md-5 px-3 px-md-0">
      <div className="container">
        <div className="row">
          <div className="col ff-main mt-5">
            <h2 className="display-5">Categories</h2>
          </div>
        </div>
        <div className="row mt-3 mb-5 gy-3">
          {cardData.map((card) => (
            <div className="col-3" key={card.id}>
              <a href={card.categoryLink} className="text-decoration-none">
                <div className="card rounded overflow-hidden">
                  <div className="category">
                    <img src={card.imageUrl} className="img-fluid" alt="" />
                  </div>
                  <div className="card-body">
                    <div className="card-title text-primary ff-main h2">{card.categoryName}</div>
                  </div>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
