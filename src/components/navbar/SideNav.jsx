import { Tooltip } from "@mui/material";
import React, { useId } from "react";
import { FaPeopleRoof } from "react-icons/fa6";
import { NavLink } from "react-router-dom";

export default function SideNav({ navOptions }) {
    return (
        <div className="md:w-52 sm:items-center sm:flex sm:flex-col sm:gap-2 hidden text-xl bg-gray-400">
            <div className="w-full flex flex-col">
                <NavLink
                    to={"/"}
                    className="p-4 cursor-pointer flex items-center gap-2 w-full"
                >
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
                        className={({ isActive }) =>
                            isActive
                                ? " md:justify-start hover:bg-gray-300 bg-gray-300 cursor-pointer flex  duration-300"
                                : "md:justify-start hover:bg-gray-300 cursor-pointer flex items-center duration-300"
                        }
                        to={opt.link}
                    >
                        <Tooltip
                            title={opt.name}
                            placement="right-start"
                            className="flex items-center gap-2 md:text-xl sm:text-2xl w-full justify-start md:py-4 md:px-4 p-4"
                        >
                            <p className="inline-block">{opt.icon}</p>
                            <p className="md:inline-block hidden">{opt.name}</p>
                        </Tooltip>
                    </NavLink>
                ))}
            </div>
        </div>
    );
}
