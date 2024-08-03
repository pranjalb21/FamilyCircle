import React, { useId } from "react";
import {
    IoHomeOutline,
    SlLike,
    FaHistory,
    IoVideocam,
    FaUserCheck,
    TiDocumentText,
    CgProfile,
} from "..";
import { NavLink } from "react-router-dom";

export default function SideBar() {
    const menuBar = [
        {
            name: "Home",
            link: "/",
            icon: <IoHomeOutline className="inline-block" />,
        },
        {
            name: "My Profile",
            link: "/profile",
            icon: <CgProfile className="inline-block" />,
        },
        {
            name: "Subscribers",
            link: "/profile/subscribers",
            icon: <FaUserCheck className="inline-block" />,
        },
        {
            name: "History",
            link: "/profile/history",
            icon: <IoVideocam className="inline-block" />,
        },
        {
            name: "Liked Videos",
            link: "/profile/liked-videos",
            icon: <SlLike className="inline-block" />,
        },
        {
            name: "Collection",
            link: "/profile/collection",
            icon: <TiDocumentText className="inline-block" />,
        },
    ];
    return (
        <div className="w-60 min-h-svh bg-slate-600 text-white">
            <ul className="flex flex-col">
                {menuBar.map((menu) => (
                    <NavLink
                        to={menu.link}
                        key={useId()}
                        className={({ isActive }) =>
                            isActive ? "bg-slate-300 text-black" :""
                        }
                    >
                        <li className="border-b-2  items-center flex gap-2 hover:drop-shadow-md px-6 cursor-pointer py-2 hover:bg-slate-300 duration-200 hover:text-black">
                            {menu.icon} <span>{menu.name}</span>
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
