import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";
import LazyLoad from "react-lazy-load";

const Recipes = () => {
    const [popular, setPopular] = useState([]);
    const [bestseller, setBestseller] = useState([]);
    const [newRecipes, setNewRecipes] = useState([]);

    useEffect(() => {
        fetch("https://lunchbox-server.vercel.app/api/v1/recipes/popular")
            .then((res) => res.json())
            .then((data) => setPopular(data));

        fetch("https://lunchbox-server.vercel.app/api/v1/recipes/bestseller")
            .then((res) => res.json())
            .then((data) => setBestseller(data));

        fetch("https://lunchbox-server.vercel.app/api/v1/recipes/new")
            .then((res) => res.json())
            .then((data) => setNewRecipes(data));
    }, []);

    return (
        <div className="container mx-auto my-20 md:flex">
            <div className="w-full md:w-2/5 lg:w-1/4  mt-24 mr-5 m-6 md:m-0">
                <div className="mt-20">
                    <h2 className="mb-5 py-5 badge badge-success font-serif  uppercase text-xl">
                        BestSeller Recipes
                    </h2>
                    <div>
                        {bestseller?.slice(0, 10).map((recipe) => {
                            return (
                                <div key={recipe.id}>
                                    <p className="text-[18px] ">
                                        <li>{recipe.recipe_name}</li>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
                <div className="mt-8 ">
                    <h2 className="mb-5 py-5 badge badge-info font-serif uppercase text-xl ">
                        New Recipes
                    </h2>
                    <div>
                        {newRecipes?.slice(0, 10).map((recipe) => {
                            return (
                                <div key={recipe.id}>
                                    <p className="text-[18px]">
                                        <li>{recipe.recipe_name}</li>
                                    </p>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <div className="w-full md:w-3/5 lg:w-4/5">
                <h2 className="mb-10 text-center font-serif mt-10 sm:mt-0  uppercase text-4xl xl:text-5xl">
                    Popular Recipes
                </h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                    {popular?.slice(0, 8).map((recipe) => {
                        return (
                            <div
                                key={recipe.id}
                                className="p-3 rounded-xl flex items-center shadow-lg shadow-zinc-300 "
                            >
                                <LazyLoad className="w-full">
                                    <img
                                        className="h-36 w-36 rounded-full bg-white mr-5"
                                        src={recipe.img}
                                        alt=""
                                    />
                                </LazyLoad>
                                <div>
                                    <h3 className="text-[20px]">
                                        {recipe.recipe_name}
                                    </h3>
                                    <p className="badge">{recipe.cusine}</p>
                                    <p>
                                        {recipe.cooking_method.slice(0, 120)}...
                                    </p>
                                    <p>
                                        <Rating
                                            style={{ maxWidth: 120 }}
                                            readOnly
                                            orientation="horizontal"
                                            value={recipe.rating}
                                        />
                                    </p>
                                    <p className="text-[18px]">
                                        Price: ${recipe.price}
                                    </p>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </div>
    );
};

export default Recipes;
