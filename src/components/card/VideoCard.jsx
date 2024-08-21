import { Avatar } from "@mui/material";
import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, NavLink } from "react-router-dom";
import { loggedInUser } from "../../store/authSlice";

export default function VideoCard({ post }) {
    const user = useSelector(loggedInUser);
    const getTime = (time) => {
        const mongoTime = new Date(time);
        const currTime = new Date();
        // console.log(mongoTime);
        // console.log(currTime);
        const seconds = Math.floor((currTime - mongoTime) / 1000);
        // console.log(seconds, (3600 * 24 * 365));
        if (seconds >= 3600 * 24 * 365) {
            const year = Math.floor(seconds / (3600 * 24 * 365));
            return year > 1 ? `${year} years` : `${year} year`;
        } else if (seconds >= 3600 * 24 * 30) {
            const month = Math.floor(seconds / (3600 * 24 * 30));
            return month > 1 ? `${month} months` : `${month} month`;
        } else if (seconds >= 3600 * 24 * 7) {
            const week = Math.floor(seconds / (3600 * 24 * 7));
            return week > 1 ? `${week} weeks` : `${week} week`;
        } else if (seconds >= 3600 * 24) {
            const day = Math.floor(seconds / (3600 * 24));
            return day > 1 ? `${day} days` : `${day} day`;
        } else if (seconds >= 3600) {
            const hour = Math.floor(seconds / 3600);
            return hour > 1 ? `${hour} hours` : `${hour} hour`;
        } else if (seconds >= 60) {
            const minute = Math.floor(seconds / 60);
            return minute > 1 ? `${minute} minutes` : `${minute} minute`;
        } else {
            return seconds > 1 ? `${seconds} seconds` : `${seconds} second`;
        }
    };
    return (
        <NavLink
            to={`/${post._id}`}
            className="container sm:w-60 w-72 h-64 shadow-sm hover:shadow-md sm:h-64 rounded-md overflow-hidden cursor-pointer flex flex-col gap-2"
        >
            <div className="relative h-40 box-border overflow-hidden">
                <img
                    src={post.thumbnail}
                    alt={post.title}
                    className="object-cover"
                />
                <p className="bg-gray-900 bg-opacity-60 inline-block absolute bottom-1 right-1 z-10 text-white p-1 text-xs rounded-md">
                    {post.duration}
                </p>
            </div>
            <div className="flex gap-2 px-2">
                <Avatar src={post.owner.avatar} />
                <div>
                    <p className="text-xl">{post.title}</p>
                    <p className="text-sm hover:underline inline">
                        <Link
                            to={
                                user?.userName === post.owner.userName
                                    ? `/profile`
                                    : `/profiles/${post.owner.userName}`
                            }
                        >
                            {post.owner.userName}
                        </Link>
                    </p>
                    <p className="text-sm">
                        {post.views} views • {getTime(post.createdAt)} ago
                    </p>
                </div>
            </div>
        </NavLink>
    );
}
