import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import TweetCard from "../components/card/TweetCard";
import { useDispatch, useSelector } from "react-redux";
import { allTweets, setTweets } from "../store/postSlice";
import { Pagination, Stack } from "@mui/material";
import { loggedInUser } from "../store/authSlice";
import axios from "axios";

export default function AllTweetPage({ profile = false, id }) {
    const tweets = useSelector(allTweets);
    const user = useSelector(loggedInUser);
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const fetchTweets = async (page) => {
        await axios
            .get(`tweets/all/?page=${page}`)
            .then((res) => {
                dispatch(setTweets(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserTweets = async (page, uid) => {
        await axios
            .get(`tweets/user/${uid}/?page=${page}`)
            .then((res) => {
                dispatch(setTweets(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    useEffect(() => {
        if (!profile) {
            fetchTweets(page);
        } else {
            fetchUserTweets(page, id);
        }
    }, [page]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="flex flex-col">
            <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:items-start items-center p-4 gap-3 pb-20">
                {tweets?.totalDocs > 0 ? (
                    tweets.docs.map((tweet) => (
                        <TweetCard key={tweet._id} post={tweet} />
                    ))
                ) : (
                    <p>No tweet posted yet.</p>
                )}
            </div>
            <Stack spacing={2} className="self-center">
                <Pagination
                    count={Math.ceil(tweets?.totalDocs / tweets.limit)}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
}
