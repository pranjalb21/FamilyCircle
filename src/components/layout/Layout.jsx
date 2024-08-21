import React, { useEffect, useState } from "react";
import { MdInfoOutline, MdLightMode, MdOutlineLightMode } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import {
    loggedInUser,
    login,
    theme,
    toggleTheme,
    userLoginStatus,
} from "../../store/authSlice";
import SideNav from "../navbar/SideNav";
import { LuHome } from "react-icons/lu";
import { CgProfile } from "react-icons/cg";
import BottomNav from "../navbar/BottomNav";
import { FaUserCheck } from "react-icons/fa";
import { FiUserCheck } from "react-icons/fi";
import Container from "../container/Container";
import { BiExit } from "react-icons/bi";
import { Navigate } from "react-router-dom";
import axios from "axios";

export default function Layout({ children }) {
    const userStatus = useSelector(userLoginStatus);
    const navOptions = [
        { name: "Home", link: "/", icon: <LuHome />, active: userStatus },
        {
            name: "Profile",
            link: "/profile",
            icon: <CgProfile />,
            active: userStatus,
        },
        {
            name: "Subscribers",
            link: "/subscribers",
            icon: <FiUserCheck />,
            active: userStatus,
        },
        {
            name: "About Us",
            link: "/about",
            icon: <MdInfoOutline />,
            active: userStatus,
        },
        {
            name: "Logout",
            link: "/logout",
            icon: <BiExit />,
            active: userStatus,
        },
    ];
    const dispatch = useDispatch();
    const user = useSelector(loggedInUser);
    const handleLoad = async () => {
        const token = localStorage.getItem("accessToken");
        if (!(token === null)) {
            axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        }
        if (!user) {
            const result = await axios
                .get("users/current", { withCredentials: true })
                .then((res) =>
                    dispatch(login({ user: res.data.data, accessToken: token }))
                )
                .catch((error) => console.log(error));
        }
    };
    useEffect(() => {
        handleLoad();
    }, []);

    if (!user) {
        return <Navigate to="/login" replace={true}></Navigate>;
    } else
        return (
            <div className="flex bg-grey-100 w-full min-h-screen">
                <SideNav navOptions={navOptions} />
                <Container>{children}</Container>
                <BottomNav navOptions={navOptions} />
            </div>
        );
}
