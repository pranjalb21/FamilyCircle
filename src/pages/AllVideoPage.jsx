import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { allVideos, setVideos } from "../store/postSlice";
import VideoCard from "../components/card/VideoCard";
import axios from "axios";
import { Pagination, Stack } from "@mui/material";

export default function AllVideoPage() {
    const videos = useSelector(allVideos);
    return (
        <div className="flex flex-col">
            <div className="flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
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
                    count={Math.ceil(videos?.totalDocs / videos.limit)}
                />
            </Stack>
        </div>
    );
}
