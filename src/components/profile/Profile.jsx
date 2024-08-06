import React from "react";
import { Avatar, RiSettings2Fill, userImage } from "..";
import { NavLink } from "react-router-dom";
import { isPending } from "@reduxjs/toolkit";
import { useSelector } from "react-redux";
import { loggedInUser } from "../../store/authSlice";

export default function Profile() {
    const user = useSelector(loggedInUser)
    return (
        <div className="flex flex-col  bg-slate-400 text-white">
            <div className="flex gap-4 p-4">
                <Avatar image={user?user.avatar:userImage} title={'title'} size={'large'} />
                <div className=" p-4">
                    <h1 className="text-2xl font-bold">{user?user.fullName:"Name"}</h1>
                    <h4>@{user?user.userName:"username"}</h4>
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
