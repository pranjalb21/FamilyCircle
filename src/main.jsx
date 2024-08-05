import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ProfilePage from "./pages/ProfilePage.jsx";
import {
    ImageContainer,
    TweetContainer,
    VideoContainer,
    HomePage,
    SubscriberPage,
    CollectionPage,
    HistoryPage,
    LikedVideoPage,
    LoginPage,
    SignupPage,
    VideoPage,
} from "./components/index.js";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "",
                element: <HomePage />,
            },
            {
                path: "subscribers",
                element: <SubscriberPage />,
            },
            {
                path: "collections",
                element: <CollectionPage />,
            },
            {
                path: "history",
                element: <HistoryPage />,
            },
            {
                path: "liked-videos",
                element: <LikedVideoPage />,
            },
            {
                path: "profile",
                element: <ProfilePage />,
                children: [
                    {
                        path: "videos",
                        element: <VideoContainer />,
                    },
                    {
                        path: "tweets",
                        element: <TweetContainer />,
                    },
                    {
                        path: "images",
                        element: <ImageContainer />,
                    },
                ],
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SignupPage />,
            },
            {
                path: "videos/:id",
                element: <VideoPage />,
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
