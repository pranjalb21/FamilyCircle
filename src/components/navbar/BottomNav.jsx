import { Tooltip } from "@mui/material";
import React, { useId } from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav({ navOptions }) {
    const classNames =
        "justify-center  cursor-pointer flex items-center gap-2 box-border  duration-200 hover:text-2xl hover:py-0 hover:px-1.5 w-20";
    return (
        <div className="sm:hidden fixed bottom-0 flex bg-gray-400 w-full justify-evenly box-border z-10">
            {navOptions.map((opt) => (
                <div className="w-12 flex justify-center h-10 text-2xl items-center " key={opt.name}>
                    <Tooltip title={opt.name} placement="top">
                        <NavLink className={"hover:text-3xl duration-200"} to={opt.link}>{opt.icon}</NavLink>
                    </Tooltip>
                </div>
            ))}
        </div>
    );
}
