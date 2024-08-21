import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allVideos, setVideos } from "../store/postSlice";
import VideoCard from "../components/card/VideoCard";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";
import { loggedInUser } from "../store/authSlice";

export default function AllVideoPage({ profile = false, id }) {
    const videos = useSelector(allVideos);
    const user = useSelector(loggedInUser);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const fetchVideos = async (page) => {
        await axios
            .get(`videos/all/?page=${page}`)
            .then((res) => {
                dispatch(setVideos(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserVideos = async (page, uid) => {
        await axios
            .get(`videos/user/${uid}/?page=${page}`)
            .then((res) => {
                dispatch(setVideos(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    useEffect(() => {
        if (!profile) {
            fetchVideos(page);
        } else {
            fetchUserVideos(page, id);
        }
    }, [page]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row w-full sm:flex-wrap flex-col sm:items-start items-center p-4 gap-3 pb-20">
                {videos?.totalDocs > 0 ? (
                    videos.docs.map((post) => (
                        <VideoCard post={post} key={post._id} />
                    ))
                ) : (
                    <p>No video posted yet.</p>
                )}
            </div>
            <Stack spacing={2} className="self-center">
                <Pagination
                    count={Math.ceil(videos?.totalDocs / videos?.limit) || 1}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
}
