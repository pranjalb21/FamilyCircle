import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import SubscriberPage from "./pages/SubscriberPage";
import VideoPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
    },
    {
        path: "/about",
        element: <AboutPage />,
    },
    {
        path: "/profile",
        element: <ProfilePage />,
    },
    {
        path: "/subscribers",
        element: <SubscriberPage />,
    },
    {
        path: "/:postId",
        element: <VideoPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
