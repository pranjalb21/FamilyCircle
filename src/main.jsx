import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import { ImageContainer, TweetContainer, VideoContainer } from "./components/index.js";

const router = createBrowserRouter([
    {
        path:"/",
        element: <App />,
        children:[
            {
                path:"profile",
                element: <ProfilePage />,
                children:[
                    {
                        path:"videos",
                        element:<VideoContainer/>
                    },
                    {
                        path:"tweets",
                        element:<TweetContainer/>
                    },
                    {
                        path:"images",
                        element:<ImageContainer/>
                    },
                ]
            }
        ]
    }
])

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
