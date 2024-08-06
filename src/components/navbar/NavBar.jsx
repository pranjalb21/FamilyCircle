import React from "react";
import { FaSearch, Logo } from "..";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { loggedInUser } from "../../store/authSlice";

export default function NavBar() {
    const loginStatus = useSelector(loggedInUser);
    return (
        <header className="w-full shadow-md box-border">
            <nav className="mx-auto flex justify-around items-center bg-slate-200 p-2">
                <Logo />
                <div className="bg-transparent flex items-center gap-1 px-2 rounded-2xl overflow-hidden sm:border-2 sm:border-black sm:shadow-sm">
                    <FaSearch className="text-xl cursor-pointer" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 outline-none bg-transparent sm:block hidden"
                    />
                </div>
                {loginStatus ? null:(
                    <div className=" gap-4 font-semibold">
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
                )}
            </nav>
        </header>
    );
}
