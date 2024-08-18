import React, { useEffect, useState } from "react";
import dummyImage from "../../assets/DummyPost.jpg";
import userImage from "../../assets/user.jpg";
import VideoCard from "../card/VideoCard";
import TopBar from "../navbar/TopBar";
import axios from "axios";
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
import AllVideoPage from "../../pages/AllVideoPage";
import AllImagePage from "../../pages/AllImagePage";
import AllTweetPage from "../../pages/AllTweetPage";

export default function Home() {
    const dispatch = useDispatch();
    const video = useSelector(videoPage);
    const image = useSelector(imagePage);
    const tweet = useSelector(tweetPage);
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
    const fetchVideos = async () => {
        axios
            .get("videos/all")
            .then((res) => {
                dispatch(setVideos(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchImages = async () => {
        axios
            .get("images/all")
            .then((res) => {
                dispatch(setImages(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchTweets = async () => {
        axios
            .get("tweets/all")
            .then((res) => {
                dispatch(setTweets(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    useEffect(() => {
        fetchVideos();
        fetchImages();
        fetchTweets();
        dispatch(setVideoPage());
    }, []);
    return (
        <div className="flex flex-col w-full">
            <TopBar />
            {video ? (
                <AllVideoPage />
            ) : image ? (
                <AllImagePage />
            ) : (
                <AllTweetPage />
            )}
        </div>
    );
}
