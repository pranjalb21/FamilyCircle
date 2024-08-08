import { Avatar } from "@mui/material";
import React from "react";

export default function VideoCard({ post }) {
    return (
        <div className="container sm:w-60 w-72 h-64 shadow-sm hover:shadow-md sm:h-64 rounded-md overflow-hidden cursor-pointer flex flex-col gap-2">
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
                        {post.owner.userName}
                    </p>
                    <p className="text-sm">
                        {post.views} views • {post.createdAt} ago
                    </p>
                </div>
            </div>
        </div>
    );
}
