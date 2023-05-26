import ChefsSection from "../ChefsSection/ChefsSection";
import HeroSection from "../HeroSection/HeroSection";
import Recipes from "../Recipes/Recipes";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Recipes />
            <ChefsSection />
        </div>
    );
};

export default Home;
