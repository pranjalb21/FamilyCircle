import { useEffect, useState } from "react";
import { BottomBar, Footer, NavBar, SideBar, store } from "./components";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { login } from "./store/authSlice";

function App() {
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            const parsedUser = JSON.parse(user);
            dispatch(login(parsedUser));
        }
    }, []);
    return (
        <div className="flex flex-col w-full font-[Open Sans]">
            <NavBar />
            <div className="flex w-full ">
                <SideBar />
                <Outlet />
                <BottomBar />
            </div>
            <Footer />
        </div>
    );
}

export default App;
