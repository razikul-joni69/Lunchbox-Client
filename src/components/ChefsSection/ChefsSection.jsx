import { Rating } from "@smastrom/react-rating";
import React, { useState } from "react";

import "@smastrom/react-rating/style.css";

const ChefsSection = () => {
    const [chefs, setChefs] = useState([]);

    useState(() => {
        fetch("/chefs.json")
            .then((res) => res.json())
            .then((data) => setChefs(data));
    }, []);
    return (
        <div className="grid grid-cols-3 gap-y-5 justify-items-center container mx-auto my-12">
            {chefs.map((chef) => (
                <div
                    key={chef.id}
                    className="w-full p-3 max-w-sm bg-white border border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
                >
                    <div className="flex  items-center pb-10">
                        <img
                            className="w-16 h-16 mb-3 rounded-full shadow-lg mr-5"
                            src={chef.image}
                            alt="Bonnie image"
                        />
                        <div>
                            <h5 className=" text-xl font-medium text-gray-900 dark:text-white">
                                {chef.name}
                            </h5>
                            <span className="text-sm text-gray-500 dark:text-gray-400">
                                {chef.cusine}
                            </span>
                        </div>
                    </div>
                    <hr />
                    <div className="text-white flex justify-between my-7">
                        <div className="text-center text-base">
                            <p className="mb-2 text-xl">
                                {chef.experience} Year's
                            </p>{" "}
                            Experience
                        </div>
                        <div className="text-center text-base">
                            <p className="mb-2 text-xl">{chef.likes} K</p> Likes
                        </div>
                        <div className="text-center text-base">
                            <p className="mb-2 text-xl">
                                <div>
                                    <Rating
                                        style={{ maxWidth: 100 }}
                                        readOnly
                                        orientation="horizontal"
                                        value={chef.rating}
                                    />
                                </div>
                            </p>{" "}
                            Rating
                        </div>
                    </div>
                    <hr />
                    <div className="flex mt-4 space-x-3 md:mt-6">
                        <a
                            href="#"
                            className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        >
                            View Recipies
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ChefsSection;
