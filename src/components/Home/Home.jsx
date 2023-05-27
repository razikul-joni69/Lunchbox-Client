import ChefsSection from "../ChefsSection/ChefsSection";
import FeelsLikeHome from "../FeelsLikeHome/FeelsLikeHome";
import FoodsGallery from "../FoodsGallery/FoodsGallery";
import HeroSection from "../HeroSection/HeroSection";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Recipes />
            <ChefsSection />
            <FoodsGallery />
            <FeelsLikeHome />
        </div>
    );
};

export default Home;
