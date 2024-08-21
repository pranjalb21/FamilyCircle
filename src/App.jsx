import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import HomePage from "./pages/HomePage";
import AboutPage from "./pages/AboutPage";
import ProfilePage from "./pages/ProfilePage";
import SubscriberPage from "./pages/SubscriberPage";
import VideoPage from "./pages/VideoPage";
import LoginPage from "./pages/LoginPage";
import SignupPage from "./pages/SignupPage";
import axios from "axios";
import Logout from "./components/logout/Logout";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser, login } from "./store/authSlice";
import AddPostPage from "./pages/AddPostPage";
import EditProfilePage from "./pages/EditProfilePage";

axios.defaults.baseURL = "http://localhost:3000/api/v1/";

const router = createBrowserRouter([
    {
        path: "/",
        element: <HomePage title="Home" />,
    },
    {
        path: "/about",
        element: <AboutPage title="About" />,
    },
    {
        path: "/profile",
        element: <ProfilePage title="Profile" self={true} />,
    },
    {
        path: "/profile/update",
        element: <EditProfilePage title="Update Profile" />,
    },
    {
        path: "/profiles/:username",
        element: <ProfilePage title="Profile" self={false} />,
    },
    {
        path: "/subscribers",
        element: <SubscriberPage title="Subscriber" />,
    },
    {
        path: "/:videoId",
        element: <VideoPage title="Video" />,
    },
    {
        path: "/login",
        element: <LoginPage title="Login" />,
    },
    {
        path: "/signup",
        element: <SignupPage title="Sign Up" />,
    },
    {
        path:"/add-post",
        element:<AddPostPage title="Add Post" />
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);
export default function App() {
    return <RouterProvider router={router} />;
}
