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
    store,
} from "./components/index.js";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "react-redux";

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
    
    <Provider store={store}>
    <React.StrictMode>
        <RouterProvider router={router} />
        <ToastContainer
            position="top-right"
            autoClose={2000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            transition:Bounce
        />
    </React.StrictMode>
    </Provider>
);
