import React, { useState } from "react";

import { Avatar } from "@mui/material";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import { useDispatch } from "react-redux";
import { toggleTweetLike } from "../../store/postSlice";
import { toast } from "react-toastify";
import axios from "axios";

export default function TweetCard({ post }) {
    const [showMore, setShowMore] = useState(false);
    const dispatch = useDispatch();
    // const post = {
    //     content:
    //         "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vitae, minima reprehenderit. Temporibus molestias rerum fugiat distinctio numquam eaque quo et amet perferendis, repellat dolores ex quis, iste pariatur? Cumque deleniti, laudantium repudiandae, provident excepturi molestiae sunt minima eum voluptatum numquam aut est! Corrupti fuga ipsum quidem laborum voluptatem, voluptates dolores itaque eligendi suscipit amet sunt neque placeat ducimus expedita tempora, quod rem hic vel aliquam facilis minima quasi! Quia harum sapiente, nisi officia illo earum facere porro velit. Est esse quaerat odio quis, maxime officiis aliquid ex optio alias autem, beatae dicta eaque placeat. Eligendi voluptate consequatur nisi tenetur distinctio!",
    //     likesCount: 10,
    //     commentsCount: 20,
    //     owner: {
    //         fullName: "Abc",
    //         userName: "username",
    //         avatar: userImage,
    //     },
    //     isLiked: false,
    //     createdAt: "2024-07-16T19:01:25.203+00:00",
    // };

    const toggleLike = async (id, likeValue) => {
        await axios
            .post(`likes/tweet/${id}`)
            .then((res) => {
                dispatch(toggleTweetLike({ id, likeValue }));
            })
            .catch((err) => toast.error(err.response.data.message));
    };
    const getTime = (time) => {
        const mongoTime = new Date(time);
        const currTime = new Date();
        // console.log(mongoTime);
        // console.log(currTime);
        const seconds = Math.floor((currTime - mongoTime) / 1000);
        // console.log(seconds, (3600 * 24 * 365));
        if (seconds >= 3600 * 24 * 365) {
            return `${Math.floor(seconds / (3600 * 24 * 365))}y`;
        } else if (seconds >= 3600 * 24 * 7) {
            return `${Math.floor(seconds / (3600 * 24 * 7))}w`;
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
        <div className="container sm:w-80 w-80 h-72 shadow-sm hover:shadow-md rounded-md overflow-hidden flex flex-col border">
            <div className="flex gap-2 p-2">
                <Avatar src={post.owner.avatar} />
                <div>
                    <p className="text-md hover:underline inline">
                        {post.owner.fullName}
                        {" • "}
                        <span className="text-sm">
                            {getTime(post.createdAt)}
                        </span>
                    </p>
                    <p className="text-sm">{post.owner.fullName}</p>
                </div>
            </div>
            <div className="relative h-72 box-border overflow-hidden">
                {post.content.length > 100 ? (
                    <p className={`px-4 overflow-auto h-48`}>
                        {showMore ? post.content : post.content.slice(0, 240)}{" "}
                        <span
                            className="text-blue-500 cursor-pointer"
                            onClick={() => setShowMore(!showMore)}
                        >
                            {showMore ? "...less" : "...more"}
                        </span>
                    </p>
                ) : (
                    <p className={`px-4 overflow-auto h-48`}>{post.content}</p>
                )}
            </div>
            <div className="flex gap-4 justify-start  items-center">
                <div className="flex items-center w-20 px-2 py-1">
                    {post.isLiked ? (
                        <BiSolidLike
                            className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                            onClick={() => toggleLike(post?._id, -1)}
                        />
                    ) : (
                        <BiLike
                            className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                            onClick={() => toggleLike(post?._id, 1)}
                        />
                    )}{" "}
                    <span>{post.likesCount}</span>
                </div>
                <div className="flex items-center w-20 px-2 py-1">
                    <FaRegComment className="inline-block w-10 hover:text-xl duration-300 cursor-pointer" />{" "}
                    <span>100</span>
                </div>
            </div>
        </div>
    );
}
