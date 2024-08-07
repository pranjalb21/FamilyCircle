import { useEffect, useState } from "react";
import { BottomBar, conf, Footer, NavBar, SideBar, store } from "./components";
import { Outlet, RouterProvider } from "react-router-dom";
import { Provider, useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import { accessToken, login } from "./store/authSlice";
import axios from "axios";

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

function App() {
    const dispatch = useDispatch();
    const userToken = useSelector(accessToken);
    const loadUser = async () => {
        if (!userToken) {
            const token = await axios.post(`${conf.api}users/generate-token`);
        }
    };
    useEffect(() => {
        loadUser();
    }, []);
    return <RouterProvider router={router} />;
}

export default App;
