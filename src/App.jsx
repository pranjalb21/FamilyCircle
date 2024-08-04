import { useState } from "react";
import { BottomBar, Footer, NavBar, SideBar } from "./components";
import { Outlet } from "react-router-dom";

function App() {
    return (
        <div className="flex flex-col w-full h-screen bg-slate-200 font-[Open Sans]">
            <NavBar />
            <div className="flex w-full bg-red-50">
                <SideBar/>
                <Outlet />
                <BottomBar/>
            </div>
            <Footer />
        </div>
    );
}

export default App;
