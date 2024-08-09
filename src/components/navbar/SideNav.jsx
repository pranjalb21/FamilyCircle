import React, { useId } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function SideNav({ navOptions }) {
    return (
        <div className="md:w-52 sm:items-center sm:flex sm:flex-col sm:gap-2 hidden text-xl bg-red-200">
            <div className="w-full">
                <NavLink to={"/"} className="p-4 cursor-pointer flex items-center gap-2 w-full">
                    <p className="inline-block">
                        <FaPeopleRoof />
                    </p>
                    <p className="md:inline-block hidden">FamilyCircle</p>
                </NavLink>
            </div>
            <div className="w-full">
                {navOptions.map((opt) => (
                    <NavLink
                        key={useId()}
                        className="md:py-4 md:px-4 p-4 md:justify-start justify-center hover:bg-green-100 cursor-pointer flex items-center gap-2 md:text-xl sm:text-2xl duration-300"
                        to={opt.link}
                    >
                        <p className="inline-block">{opt.icon}</p>
                        <p className="md:inline-block hidden">{opt.name}</p>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
