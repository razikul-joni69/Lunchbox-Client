import { Rating } from "@smastrom/react-rating";
import { useEffect, useState } from "react";

const Recipes = () => {
    const [popular, setPopular] = useState([]);
    const [bestseller, setBestseller] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5000/api/v1/recipes/popular")
            .then((res) => res.json())
            .then((data) => setPopular(data));

        fetch("http://localhost:5000/api/v1/recipes/bestseller")
            .then((res) => res.json())
            .then((data) => setBestseller(data));
    }, []);

    return (
        <div className="container mx-auto my-20 flex">
            <div className=" w-1/4 mt-24 mr-5">
                <div className=" ">
                    <h2 className="mb-5 py-5 badge badge-success font-serif  uppercase text-xl">
                        BestSeller Recipes
                    </h2>
                    <div>
                        {bestseller?.map((recipe) => {
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
                    <h2 className="mb-5 py-5 badge badge-info font-serif  uppercase text-xl ">
                        BestSeller Recipes
                    </h2>
                    <div>
                        {bestseller?.map((recipe) => {
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
            <div className=" w-4/5">
                <h2 className="mb-10 text-center font-serif  uppercase text-4xl xl:text-5xl">
                    Popular Recipes
                </h2>
                <div className="grid grid-cols-2 gap-4">
                    {popular?.slice(0, 8).map((recipe) => {
                        return (
                            <div
                                key={recipe.id}
                                className="p-3 rounded-xl flex items-center shadow-lg shadow-zinc-300 "
                            >
                                <img
                                    className="h-36 w-36 rounded-full bg-white mr-5"
                                    src={recipe.img}
                                    alt=""
                                />
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
