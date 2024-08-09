import React, { useId } from "react";
import { NavLink } from "react-router-dom";

export default function BottomNav({ navOptions }) {
    const classNames =
        "justify-center  cursor-pointer flex items-center gap-2 box-border  duration-200 hover:text-2xl hover:py-0 hover:px-1.5 w-20";
    return (
        <div className="sm:hidden fixed bottom-0 flex bg-red-300 w-full justify-evenly box-border z-10">
            {navOptions.map((opt) => (
                <NavLink
                    className={({ isActive }) =>
                        isActive
                            ? `${classNames} py-0 px-1.5 text-2xl`
                            : `${classNames} py-3 px-3 text-xl`
                    }
                    key={useId()}
                    to={opt.link}
                >
                    <p className="inline-block box-border">{opt.icon}</p>
                    <p className="md:inline-block hidden">{opt.name}</p>
                </NavLink>
            ))}
        </div>
    );
}
