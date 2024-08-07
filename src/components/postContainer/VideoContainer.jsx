import React, { useEffect, useState } from "react";
import { Loading, MediaPostCard, TweetPostCard } from "..";
import { Link } from "react-router-dom";
import axios, { all } from "axios";
import { useDispatch, useSelector } from "react-redux";
import { allVideos, setVideos } from "../../store/postSlice";

export default function VideoContainer() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();
    const allvideos = useSelector(allVideos);
    const accessToken = localStorage.getItem("accessToken");
    const handleLoad = async () => {
        let config = {
            headers: {
                Authorization: "Bearer " + accessToken,
            },
        };
        const result = await axios
            .get("http://localhost:3000/api/v1/videos/all", config)
            .then((res) => res.data)
            .catch((err) => console.log(err));

        if (result.success) {
            dispatch(setVideos(result.data));
        }
    };
    useEffect(() => {
        setLoading(true);
        handleLoad();
        setLoading(false);
    }, []);
    return (
        <>
            {loading ? <Loading /> : null}
            <div className="p-4 flex gap-4 flex-wrap">
                {allvideos?.docs.map((video) => (
                    <Link to={`/videos/${video._id}`} key={video._id}>
                        <MediaPostCard video={video} />
                    </Link>
                ))}
            </div>
        </>
    );
}
