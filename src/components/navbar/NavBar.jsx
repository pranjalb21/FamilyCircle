import React from "react";
import { FaSearch, Logo } from "..";

export default function NavBar() {
    return (
        <header className="w-full">
            <nav className="mx-auto flex justify-around items-center bg-green-100 shadow-md">
                <Logo />
                <div className="bg-transparent flex items-center gap-1 px-2 rounded-2xl overflow-hidden border-2 border-black">
                    <FaSearch className="text-xl" />
                    <input
                        type="text"
                        placeholder="Search"
                        className="px-2 py-1 outline-none bg-transparent"
                    />
                </div>
                <div className="flex gap-4 font-semibold">
                    <button>LogIn</button>
                    <button>SignUp</button>
                </div>
            </nav>
        </header>
    );
}
