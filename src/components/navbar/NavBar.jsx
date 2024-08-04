import React from "react";
import { FaSearch, Logo } from "..";
import { NavLink } from "react-router-dom";

export default function NavBar() {
    return (
        <header className="w-full shadow-lg p-2">
            <nav className="mx-auto flex justify-around items-center bg-slate-200">
                <Logo />
                <div className="bg-transparent flex items-center gap-1 px-2 rounded-2xl overflow-hidden sm:border-2 sm:border-black sm:shadow-sm">
                    <FaSearch className="text-xl cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 outline-none bg-transparent sm:block hidden"
                    />
                </div>
                <div className="sm:block hidden gap-4 font-semibold">
                    <NavLink
                        to={"/login"}
                        className={({ isActive }) =>
                            isActive ? "text-red-600" : ""
                        }
                    >
                        <button className="hover:text-red-600 p-2">
                            LogIn
                        </button>
                    </NavLink>
                    <NavLink
                        to={"/signup"}
                        className={({ isActive }) =>
                            isActive ? "text-red-600" : ""
                        }
                    >
                        <button className="hover:text-red-600 p-2">
                            SignUp
                        </button>
                    </NavLink>
                </div>
            </nav>
        </header>
    );
}
