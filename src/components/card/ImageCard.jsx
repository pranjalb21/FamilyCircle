import React from "react";

import dummyImage from "../../assets/DummyPost.jpg";
import userImage from "../../assets/user.jpg";
import { Avatar } from "@mui/material";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { FaRegComment } from "react-icons/fa6";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { toggleImageLike } from "../../store/postSlice";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";
import { loggedInUser } from "../../store/authSlice";

export default function ImageCard({ post }) {
    const dispatch = useDispatch();
    const user = useSelector(loggedInUser)
    // const post = {
    //     image: dummyImage,
    //     likesCount: 10,
    //     commentsCount: 20,
    //     owner: {
    //         fullName: "Abc",
    //         userName: "username",
    //         avatar: userImage,
    //     },
    //     isLiked:false,
    //     createdAt: "2024-07-16T19:01:25.203+00:00",
    // };
    const toggleLike = async (id, likeValue) => {
        await axios
            .post(`likes/image/${id}`)
            .then((res) => {
                dispatch(toggleImageLike({ id, likeValue }));
            })
            .catch((err) => console.log(err));
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
        <div className="container sm:w-96 w-80 h-80 shadow-sm hover:shadow-md sm:h-96 rounded-md overflow-hidden  flex flex-col border">
            <div className="flex gap-2 p-2">
                <Avatar src={post.owner.avatar} />
                <div>
                    <p className="text-md">
                        {post.owner.fullName}
                        {" • "}
                        <span className="text-sm">
                            {getTime(post.createdAt)}
                        </span>
                    </p>
                    <p className="text-sm hover:underline cursor-pointer inline-block">
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
                </div>
            </div>
            <div className="relative h-72 box-border overflow-hidden">
                <img
                    src={post.image}
                    alt={"unknown"}
                    className="object-cover h-full"
                />
            </div>
            <div className="flex gap-4 justify-start  items-center">
                <div className="flex items-center w-20 px-2 py-1">
                    {post?.isLiked ? (
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
