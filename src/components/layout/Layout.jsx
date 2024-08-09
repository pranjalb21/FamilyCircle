import React, { useState } from "react";
import { MdInfoOutline, MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { theme, toggleTheme } from "../../store/authSlice";
import SideNav from "../navbar/SideNav";
import { LuHome } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import BottomNav from "../navbar/BottomNav";
import { FaUserCheck } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import Container from "../container/Container";

export default function Layout({ children }) {
    const navOptions = [
        { name: "Home", link: "/", icon: <LuHome /> },
        { name: "Profile", link: "/profile", icon: <CgProfile /> },
        { name: "Subscribers", link: "/subscribers", icon: <FiUserCheck /> },
        { name: "About Us", link: "/about", icon: <MdInfoOutline /> },
    ];
    const dispatch = useDispatch();
    const selectedTheme = useSelector(theme);
    return (
        <div className="flex bg-grey-100 w-full min-h-screen">
            <SideNav navOptions={navOptions} />
            <Container>{children}</Container>
            <BottomNav navOptions={navOptions} />
        </div>
    );
}
