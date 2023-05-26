import { Autoplay, EffectCards } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "./HeroSection.css";

const HeroSection = () => {
    return (
        <div className=" bg-slate-600 bg-blend-soft-light bg-[url(https://images.unsplash.com/photo-1504674900247-0877df9cc836?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80)] bg-cover bg-no-repeat bg-center  w-full h-[600px] ">
            <div className=" py-20 container mx-auto">
                <div className="hero-content flex-col lg:flex-row-reverse md:gap-x-20">
                    <div className="swiper__container">
                        <Swiper
                            effect={"cards"}
                            grabCursor={true}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[EffectCards, Autoplay]}
                            className="mySwiper"
                        >
                            <SwiperSlide>
                                <img
                                    src="https://clipartix.com/wp-content/uploads/2016/03/Junk-food-clipart-free-clipart-images.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://clipartix.com/wp-content/uploads/2016/03/Junk-food-snacks-clipart-free-clipart-images.gif"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://publicdomainvectors.org/tn_img/tramezzino.webp"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://static.vecteezy.com/system/resources/previews/009/345/591/original/stir-fry-salad-with-sushi-and-shrimps-in-a-bowl-with-a-slate-background-top-view-copy-space-shrimp-and-vegetables-served-with-salad-chopsticks-with-asian-food-vector-free-png.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/34967/salad-food-clipart-xl.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f372.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/3152108/turkey-clipart-xl.png"
                                    alt=""
                                />
                            </SwiperSlide>
                            <SwiperSlide>
                                <img
                                    src="https://creazilla-store.fra1.digitaloceanspaces.com/cliparts/59743/pizza-slice-food-clipart-md.png"
                                    alt=""
                                />
                            </SwiperSlide>
                        </Swiper>
                    </div>
                    <div className="">
                        <h1 className="text-5xl font-bold text-white">
                            All of your favourite foods in one place!
                        </h1>
                        <p className="py-6 text-white">
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                            Provident cupiditate voluptatem et in. Quaerat
                            fugiat ut assumenda excepturi exercitationem quasi.
                            In deleniti eaque aut repudiandae et a id nisi.
                        </p>
                        <button className="btn btn-primary">
                            Explore Foods
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HeroSection;
