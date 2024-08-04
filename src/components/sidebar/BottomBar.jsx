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

export default function BottomBar() {
    const menuBar = [
        {
            link: "/",
            icon: <IoHomeOutline className="inline-block" />,
        },
        {
            link: "/profile",
            icon: <CgProfile className="inline-block" />,
        },
        {
            link: "/subscribers",
            icon: <FaUserCheck className="inline-block" />,
        },
        {
            link: "/history",
            icon: <IoVideocam className="inline-block" />,
        },
        {
            link: "/liked-videos",
            icon: <SlLike className="inline-block" />,
        },
        {
            link: "/collections",
            icon: <TiDocumentText className="inline-block" />,
        },
    ];
    return (
        <div className="w-full fixed bottom-0 flex bg-slate-600 text-white md:hidden">
            <ul className="bg-red-300 w-full flex justify-center">
                {menuBar.map((menu) => (
                    <NavLink
                        to={menu.link}
                        key={useId()}
                        className={({ isActive }) =>
                            isActive ? "bg-slate-300 text-black" : ""
                        }
                    >
                        <li className="inline-block px-4 py-2">
                            {menu.icon}
                        </li>
                    </NavLink>
                ))}
            </ul>
        </div>
    );
}
