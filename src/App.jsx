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

axios.defaults.baseURL = "http://localhost:3000/api/v1/";

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
        path: "/:videoId",
        element: <VideoPage />,
    },
    {
        path: "/login",
        element: <LoginPage />,
    },
    {
        path: "/signup",
        element: <SignupPage />,
    },
    {
        path: "/logout",
        element: <Logout />,
    },
]);
export default function App() {
    const user = useSelector(loggedInUser);
    const dispatch = useDispatch();
    const handleLoad = async () => {
        const token = localStorage.getItem("accessToken");
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        if (!user) {
            const result = await axios
                .get("users/current", { withCredentials: true })
                .then((res) =>
                    dispatch(login({ user: res.data.data, accessToken: token }))
                )
                .catch((error) => console.log(error.response));
        }
    };
    useEffect(() => {
        handleLoad();
    }, [user]);
    return <RouterProvider router={router} />;
}
