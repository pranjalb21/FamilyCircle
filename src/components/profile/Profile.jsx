import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { FaCog } from "react-icons/fa";
import { FaGear, FaUser } from "react-icons/fa6";
import { Avatar } from "@mui/material";
import avatar from "../../assets/user.jpg";
import dummyImage from "../../assets/DummyPost.jpg";
import VideoCard from "../card/VideoCard";
import userImage from "../../assets/user.jpg";
import TopBar from "../navbar/TopBar";

function Profile() {
    const posts = [
        {
            _id: 1,
            thumbnail: dummyImage,
            title: "Title",
            views: "5K",
            duration: 10.03,
            createdAt: "10 months",
            owner: {
                fullName: "Name",
                userName: "Username",
                avatar: userImage,
            },
        },
        {
            _id: 2,
            thumbnail:
                "http://res.cloudinary.com/dw0vujhhh/image/upload/v1721157733/xbrurwmasw1e3xojhvwq.png",
            title: "Title",
            views: "5K",
            duration: 10.03,
            createdAt: "10 months",
            owner: {
                fullName: "Name",
                userName: "Username",
                avatar: userImage,
            },
        },
        {
            _id: 3,
            thumbnail:
                "http://res.cloudinary.com/dw0vujhhh/image/upload/v1721157733/xbrurwmasw1e3xojhvwq.png",
            title: "Title",
            views: "5K",
            duration: 10.03,
            createdAt: "10 months",
            owner: {
                fullName: "Name",
                userName: "Username",
                avatar: userImage,
            },
        },
        {
            _id: 4,
            thumbnail:
                "http://res.cloudinary.com/dw0vujhhh/image/upload/v1721157733/xbrurwmasw1e3xojhvwq.png",
            title: "Title",
            views: "5K",
            duration: 10.03,
            createdAt: "10 months",
            owner: {
                fullName: "Name",
                userName: "Username",
                avatar: userImage,
            },
        },
        {
            _id: 2,
            thumbnail:
                "http://res.cloudinary.com/dw0vujhhh/image/upload/v1721157733/xbrurwmasw1e3xojhvwq.png",
            title: "Title",
            views: "5K",
            duration: 10.03,
            createdAt: "10 months",
            owner: {
                fullName: "Name",
                userName: "Username",
                avatar: userImage,
            },
        },
    ];
    return (
        <div className=" w-full">
            <div className="relative bg-gray-100 flex items-center justify-center sm:flex-row flex-col  p-4 md:gap-8 gap-4">
                <Avatar
                    sx={{
                        width: { xs: 100, sm: 100, md: 120, lg: 140 },
                        height: { xs: 100, sm: 100, md: 120, lg: 140 },
                    }}
                    src={avatar}
                    className="border-2"
                />
                <div className="sm:text-start text-center">
                    <p>Name</p>
                    <p>UserName</p>
                    <p>
                        {" "}
                        <span>100 Subscribers</span> |{" "}
                        <span>100 Subscribed</span>{" "}
                    </p>
                </div>
                <div className="sm:self-start py-2 px-4 flex gap-3 items-center justify-center bg-gray-400 rounded-lg text-sm md:text-xl cursor-pointer hover:bg-gray-500 duration-300 hover:text-white">
                    <FaGear className="md:text-2xl text-xl" />{" "}
                    <span className="md:block sm:hidden ">Edit Profile</span>{" "}
                </div>
            </div>
            <TopBar />
            <div className="flex flex-wrap lg:justify-start justify-center gap-3 p-4 mb-10 bg-gray-50">
                {posts.map((post) => (
                    <VideoCard post={post} key={post._id} />
                ))}
            </div>
        </div>
    );
}

export default Profile;
