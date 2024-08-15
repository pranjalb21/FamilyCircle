import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allVideos, setVideos } from "../store/postSlice";
import VideoCard from "../components/card/VideoCard";
import axios from "axios";

export default function ProfileVideoPage() {
    const dispatch = useDispatch();
    const videos = useSelector(allVideos);
    const fetchVideos = async () => {
        axios
            .get("videos/all")
            .then((res) => {
                dispatch(setVideos(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    useEffect(() => {
        fetchVideos();
    }, []);
    return (
        <div className="flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
            {videos &&
                videos.docs.map((post) => (
                    <VideoCard post={post} key={post._id} />
                ))}
        </div>
    );
}
