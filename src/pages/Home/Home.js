import BestSellerProduct from "./BestSellerProduct";
import FeatureProduct from "./FeatureProduct";
import HomeSlide from "./HomeSlide";

function Home() {
  return (
    <div className="bg-white">
      <HomeSlide />
      <FeatureProduct />
      <BestSellerProduct />
    </div>
  );
}

export default Home;
