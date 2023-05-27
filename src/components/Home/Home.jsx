import ChefsSection from "../ChefsSection/ChefsSection";
import FeelsLikeHome from "../FeelsLikeHome/FeelsLikeHome";
import HeroSection from "../HeroSection/HeroSection";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Recipes />
            <ChefsSection />
            <FeelsLikeHome/>
        </div>
    );
};

export default Home;
