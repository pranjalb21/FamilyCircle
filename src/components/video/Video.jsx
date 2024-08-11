import React, { useState } from "react";
import videoFile from "../../assets/video.mp4";
import { Avatar } from "@mui/material";
import userImage from "../../assets/user.jpg";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { BiLike, BiSolidLike } from "react-icons/bi";

export default function Video({ video }) {
    const [like, setLike] = useState(false);
    return (
        <div className="w-full h-screen flex flex-col p-2 gap-2">
            <div className="w-full md:h-2/3 h-1/2 box-border  flex justify-center bg-white">
                <video className=" h-full w-full" controls muted autoPlay>
                    <source src={videoFile} />
                </video>
            </div>
            <div className="flex p-2 gap-2">
                <Avatar sx={{ width: 50, height: 50 }} src={userImage} />
                <div>
                    <h1>Title</h1>
                    <p>Channel Name</p>
                </div>
                <div className="flex gap-4 md:ml-20 ml-auto items-end mr-5">
                    <div className="flex items-center w-20 px-2 py-1">
                        {like ? (
                            <BiSolidLike
                                className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                                onClick={() => setLike(!like)}
                            />
                        ) : (
                            <BiLike
                                className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                                onClick={() => setLike(!like)}
                            />
                        )}{" "}
                        <span>100</span>
                    </div>
                    <div className="flex items-center w-20 px-2 py-1">
                        <FaRegComment className="inline-block w-10 hover:text-xl duration-300 cursor-pointer" />{" "}
                        <span>100</span>
                    </div>
                </div>
            </div>
        </div>
    );
}
