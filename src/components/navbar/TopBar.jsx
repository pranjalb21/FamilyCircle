import React from "react";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CiTextAlignLeft } from "react-icons/ci";
import { useDispatch, useSelector } from "react-redux";
import {
    imagePage,
    setImagePage,
    setTweetPage,
    setVideoPage,
    tweetPage,
    videoPage,
} from "../../store/postSlice";
import { Tooltip } from "@mui/material";
import { BsPlusSquare } from "react-icons/bs";
import { useNavigate } from "react-router-dom";

export default function TopBar() {
    const dispatch = useDispatch();
    const video = useSelector(videoPage);
    const image = useSelector(imagePage);
    const tweet = useSelector(tweetPage);
    const navigate = useNavigate();
    return (
        <div className="flex w-full justify-start text-2xl border-b-2 sm:h-16 sm:text-3xl h-12 sticky top-0 z-20 bg-white">
            <div className="flex justify-center items-center  hover:font-bold w-20 sm:w-28">
                <Tooltip title="Videos" placement="bottom-start">
                    <GoVideo
                        className={`hover:text-3xl duration-200 sm:hover:text-4xl cursor-pointer  ${
                            video
                                ? "text-3xl sm:text-4xl font-bold"
                                : "text-2xl sm:text-3xl"
                        }`}
                        onClick={() => dispatch(setVideoPage())}
                    />{" "}
                </Tooltip>
            </div>
            <div className="sm:w-28 flex justify-center items-center hover:font-bold w-20">
                {" "}
                <Tooltip title="Images" placement="bottom-start">
                    <MdOutlineInsertPhoto
                        className={`hover:text-3xl duration-200 sm:hover:text-4xl cursor-pointer  ${
                            image
                                ? "text-3xl sm:text-4xl font-bold"
                                : "text-2xl sm:text-3xl"
                        }`}
                        onClick={() => dispatch(setImagePage())}
                    />{" "}
                </Tooltip>
            </div>
            <div className="flex justify-center items-center hover:font-extrabold w-20 sm:w-28">
                <Tooltip title="Tweets" placement="bottom-start">
                    <CiTextAlignLeft
                        className={`hover:text-3xl duration-200 sm:hover:text-4xl cursor-pointer  ${
                            tweet
                                ? "text-3xl sm:text-4xl font-bold"
                                : "text-2xl sm:text-3xl"
                        }`}
                        onClick={() => dispatch(setTweetPage())}
                    />{" "}
                </Tooltip>
            </div>
            <div className="flex justify-center items-center hover:font-extrabold w-20 sm:w-28 ml-auto">
                <Tooltip title="Add post" placement="bottom-end">
                    <BsPlusSquare
                        className={`hover:text-3xl duration-200 sm:hover:text-4xl cursor-pointer  ${
                            tweet
                                ? "text-3xl sm:text-4xl font-bold"
                                : "text-2xl sm:text-3xl"
                        }`}
                        onClick={() => {
                            dispatch(setVideoPage());
                            navigate("/add-post");
                        }}
                    />{" "}
                </Tooltip>
            </div>
        </div>
    );
}
