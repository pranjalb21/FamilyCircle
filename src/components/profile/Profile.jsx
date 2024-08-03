import React from "react";
import { RiSettings2Fill, userImage } from "..";
import { NavLink } from "react-router-dom";
import { isPending } from "@reduxjs/toolkit";

export default function Profile() {
    return (
        <div className="flex flex-col  bg-slate-400 text-white">
            <div className="flex gap-4 p-4">
                <div className="w-32 h-32 rounded-full overflow-hidden bg-gray-500">
                    <img src={userImage} alt="" className="object-contain" />
                </div>
                <div className=" p-4">
                    <h1 className="text-2xl font-bold">Name</h1>
                    <h4>@username</h4>
                    <p>
                        <span className="hover:underline cursor-pointer">
                            100k Subrcribers
                        </span>{" "}
                        |{" "}
                        <span className="hover:underline cursor-pointer">
                            100 Subscribed
                        </span>
                    </p>
                </div>
                <button className="bg-blue-200 h-10 w-32 shadow-md rounded-md text-black hover:bg-blue-300 active:translate-y-0.5 flex justify-center items-center gap-1">
                    <RiSettings2Fill className="text-gray-700" /> Edit profile
                </button>
            </div>
            <div className="">
                <ul className="flex">
                    <NavLink
                        to={"/profile/videos"}
                        className={({ isActive }) =>
                            isActive ? "bg-slate-300 text-black" : "text-white"
                        }
                    >
                        <li className=" items-center flex gap-2 hover:drop-shadow-sm px-6 cursor-pointer py-2 hover:bg-slate-300 duration-200 hover:text-black">
                            Videos
                        </li>
                    </NavLink>
                    <NavLink
                        to={"/profile/images"}
                        className={({ isActive }) =>
                            isActive ? "bg-slate-300 text-black" : "text-white"
                        }
                    >
                        <li className=" items-center flex gap-2 hover:drop-shadow-sm px-6 cursor-pointer py-2 hover:bg-slate-300 duration-200 hover:text-black">
                            Images
                        </li>
                    </NavLink>
                    <NavLink
                        to={"/profile/tweets"}
                        className={({ isActive }) =>
                            isActive ? "bg-slate-300 text-black" : "text-white"
                        }
                    >
                        <li className="items-center flex gap-2 hover:drop-shadow-sm px-6 cursor-pointer py-2 hover:bg-slate-300 duration-200 hover:text-black">
                            Tweets
                        </li>
                    </NavLink>
                </ul>
            </div>
        </div>
    );
}
