import React from "react";
import { Profile } from "..";
import { Outlet } from "react-router-dom";
export default function MyProfile() {
    return (
        <>
            <Profile />
            <Outlet />
        </>
    );
}
