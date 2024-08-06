import { useEffect, useState } from "react";
import { BottomBar, Footer, NavBar, SideBar, store } from "./components";
import { Outlet } from "react-router-dom";
import { Provider, useDispatch } from "react-redux";
import { ToastContainer } from "react-toastify";
import { login } from "./store/authSlice";

function App() {
    const user = localStorage.getItem("user");
    const dispatch = useDispatch();
    useEffect(() => {
        if (user) {
            console.log(user);
            const parsedUser = JSON.parse(user);
            console.log(parsedUser);
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
