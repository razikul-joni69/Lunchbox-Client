import { Outlet } from "react-router-dom";
import ChefsSection from "./components/ChefsSection/ChefsSection";
import HeroSection from "./components/HeroSection/HeroSection";
import Footer from "./components/shared/Footer";
import Header from "./components/shared/Header";

function App() {
    return (
        <>
            <Header />
            <Outlet/>
            <Footer/>
        </>
    );
}

export default App;
