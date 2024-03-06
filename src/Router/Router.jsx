import { createBrowserRouter } from "react-router-dom";
import Home from "../Components/Home/Home/Home";
import Navbar from "../Components/Home/Navbar/Navbar";
import Main from "../Main/Main";
import HeaderOne from "../Components/Header/HeaderOne";

export const router = createBrowserRouter([
    {
        path: "/", element: <Main></Main>, children: [
            {
                path: "/", element: <Home></Home>
            },

            {
                path: "/", element: <Navbar></Navbar>
            },
            {
                Path: "/*", element: <h1>Not Found || 404</h1>
            }
        ]
    }
])