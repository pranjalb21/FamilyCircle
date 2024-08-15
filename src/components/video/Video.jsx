import React, { useEffect, useState } from "react";
import videoFile from "../../assets/video.mp4";
import { Avatar } from "@mui/material";
import userImage from "../../assets/user.jpg";
import { SlLike } from "react-icons/sl";
import { FaRegComment } from "react-icons/fa";
import { BiLike, BiSolidLike } from "react-icons/bi";
import { useParams } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

export default function Video() {
    const { videoId } = useParams();
    const [video, setVideo] = useState(null);
    const fetchVideo = async (id) => {
        axios
            .patch(`videos/view/${id}`)
            .catch((err) => toast.error(err.response.data.message));
        axios
            .get(`videos/${id}`)
            .then((res) => {
                setVideo(res.data.data);
            })
            .catch((err) => toast.error(err.response.data.message));
    };

    const toggleLike = async (id) => {
        axios
            .post(`likes/video/${id}`)
            .then((res) => {
                fetchVideo(id);
            })
            .catch((err) => toast.error(err.response.data.message));
    };
    useEffect(() => {
        fetchVideo(videoId);
    }, []);
    if (!video) {
        return <p>Video not found</p>;
    } else
        return (
            <div className="w-full h-screen flex flex-col p-2 gap-2">
                <div className="w-full md:h-2/3 h-1/2 box-border  flex justify-center bg-white">
                    <video className=" h-full w-full" controls muted autoPlay>
                        <source src={video.videoFile} />
                    </video>
                </div>
                <div className="flex p-2 gap-2">
                    <Avatar
                        sx={{ width: 50, height: 50 }}
                        src={video.owner.avatar}
                    />
                    <div>
                        <h1>{video.title}</h1>
                        <p>{video.owner.userName}</p>
                    </div>
                    <div className="flex gap-4 md:ml-20 ml-auto items-end mr-5">
                        <div className="flex items-center w-20 px-2 py-1">
                            {video.isLiked ? (
                                <BiSolidLike
                                    className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                                    onClick={() => toggleLike(videoId)}
                                />
                            ) : (
                                <BiLike
                                    className="inline-block w-10 hover:text-2xl text-xl duration-300 cursor-pointer"
                                    onClick={() => toggleLike(videoId)}
                                />
                            )}{" "}
                            <span>{video.likesCount}</span>
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
