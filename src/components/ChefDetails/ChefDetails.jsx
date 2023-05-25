import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "../shared/Loading";

const ChefDetails = () => {
    const [chef, setChef] = useState();
    const [recipes, setRecipes] = useState([]);
    const { name } = useParams();

    useEffect(() => {
        fetch(`http://localhost:5000/api/v1/chef/${name}`)
            .then((res) => res.json())
            .then((data) => {
                setChef(data);
                setRecipes(data.recipes);
            });
    }, [name]);

    if (!chef) {
        return <Loading />;
    }
    return (
        <div>
            <div className="">
                <img
                    className="w-full h-96"
                    src="https://images.unsplash.com/photo-1547592180-85f173990554?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80"
                    alt=""
                />

                <div className="container mx-auto">
                    <div className="flex  items-center ">
                        <img
                            className="w-16 h-16 mb-3 rounded-full shadow-lg mr-5"
                            src={chef.image}
                            alt="Bonnie image"
                        />
                        <div>
                            <h5 className=" text-xl font-medium text-gray-900 ">
                                {chef.name}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {chef.cusine}
                            </span>
                        </div>
                    </div>
                    <div className="text-xl">
                        <p>About Chef: {chef.description}</p>
                        <p>Cusine: {chef.cusine}</p>
                        <p>Experience: {chef.experience} Years</p>
                        <p>Likes: {chef.likes}k Likes on Instagram</p>
                        <p>Rating: {chef.rating}</p>
                    </div>
                </div>
            </div>
            <div>
                {recipes.map((recipe) => {
                    return (
                        <div key={recipe.id}>
                            <h2>{recipe.recipe_name}</h2>
                            <p>{recipe.description}</p>
                            <p>{recipe.ingredients}</p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ChefDetails;
