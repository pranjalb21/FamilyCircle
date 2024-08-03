import React from "react";
import { Profile } from "..";
import { Outlet } from "react-router-dom";
export default function Body() {
    return (
        <div className="bg-green-50 w-full min-h-svh">
            <Profile />
            <Outlet />
        </div>
    );
}
