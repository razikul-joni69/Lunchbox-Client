import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ChefsRecipes from "./components/ChefsRecipes/ChefsRecipes.jsx";
import Home from "./components/Home/Home.jsx";
import Layout from "./components/Layout/Layout.jsx";
import "./index.css";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/chefs/:id",
                element: <ChefsRecipes />,
                // ! Not finding expected data
                loader: async ({ params }) => {
                    const chefs = await fetch(`/chefs.json`);
                    // const searchedChef = await chefs.find(
                    //     (chef) => chef.id === params.id
                    // );
                    return chefs;
                },
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
