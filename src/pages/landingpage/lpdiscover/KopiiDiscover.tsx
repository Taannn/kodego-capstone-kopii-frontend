import { KopiiDiscoverProps } from '../LandingPageProps';

const KopiiDiscover: React.FC<KopiiDiscoverProps> = ({ landingDiscover }) => {
  return (
    <>
      {landingDiscover.map((item, index) => (
      <section key={index} className="bg-danger pt-5 pb-3">
        <div className="container">
          <div className="row gap-5">
            <div className="col text-success ff-main">
              <h1 className="text-info">{item.title}</h1>
            </div>
            <div className="col text-center d-none d-lg-block">
              <img src={item.img1} alt="" width="180" />
              <img src={item.im2} alt="" width="180" />
            </div>
          </div>
        </div>
      </section>
      ))}
    </>
  )
}

export default KopiiDiscover