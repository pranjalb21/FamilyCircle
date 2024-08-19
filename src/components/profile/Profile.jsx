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
import { useDispatch, useSelector } from "react-redux";
import {
    allVideos,
    imagePage,
    setImages,
    setTweets,
    setVideoPage,
    setVideos,
    tweetPage,
    videoPage,
} from "../../store/postSlice";
import { loggedInUser } from "../../store/authSlice";
import { toast } from "react-toastify";
import AllVideoPage from "../../pages/AllVideoPage";
import AllImagePage from "../../pages/AllImagePage";
import AllTweetPage from "../../pages/AllTweetPage";

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
            _id: 5,
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
    const dispatch = useDispatch();
    const videos = useSelector(allVideos);
    const user = useSelector(loggedInUser);
    const [userChannel, setUserChannel] = useState(null);
    const [userPosts, setuserPosts] = useState(null);

    const video = useSelector(videoPage);
    const image = useSelector(imagePage);
    const tweet = useSelector(tweetPage);
    const fetchUserChannel = async (userName) => {
        axios
            .get(`users/channels/${userName}`)
            .then((res) => {
                setUserChannel(res.data.data);
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserVideos = async () => {
        axios
            .get(`videos/user/${user._id}`)
            .then((res) => {
                dispatch(setVideos(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserImages = async () => {
        axios
            .get(`images/user/${user._id}`)
            .then((res) => {
                dispatch(setImages(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserTweets = async () => {
        axios
            .get(`tweets/user/${user._id}`)
            .then((res) => {
                dispatch(setTweets(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    useEffect(() => {
        dispatch(setVideoPage());
        fetchUserVideos();
        fetchUserImages();
        fetchUserTweets();
        fetchUserChannel(user.userName);
    }, []);
    return userChannel ? (
        <div className=" w-full">
            <div className="relative bg-gray-100 flex items-center justify-center sm:flex-row flex-col  p-4 md:gap-8 gap-4">
                <Avatar
                    sx={{
                        width: { xs: 100, sm: 100, md: 120, lg: 140 },
                        height: { xs: 100, sm: 100, md: 120, lg: 140 },
                    }}
                    src={userChannel.avatar}
                    className="border-2"
                />
                <div className="sm:text-start text-center">
                    <p>{userChannel.fullName}</p>
                    <p>{userChannel.userName}</p>
                    <p>
                        {" "}
                        <span>
                            {userChannel.subscribersCount} Subscribers
                        </span>{" "}
                        |{" "}
                        <span>
                            {userChannel.subscribedChannelCount} Subscribed
                        </span>{" "}
                    </p>
                </div>
                <div className="sm:self-start py-2 px-4 flex gap-3 items-center justify-center bg-gray-400 rounded-lg text-sm md:text-xl cursor-pointer hover:bg-gray-500 duration-300 hover:text-white">
                    <FaGear className="md:text-2xl text-xl" />{" "}
                    <span className="md:block sm:hidden ">Edit Profile</span>{" "}
                </div>
            </div>
            <TopBar />
            {video ? (
                <AllVideoPage profile={true} />
            ) : image ? (
                <AllImagePage profile={true} />
            ) : (
                <AllTweetPage profile={true} />
            )}
        </div>
    ) : (
        <div className=" w-full">No user found</div>
    );
}

export default Profile;
