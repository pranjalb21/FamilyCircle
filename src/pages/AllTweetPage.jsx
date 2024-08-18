import React from "react";
import Layout from "../components/layout/Layout";
import TweetCard from "../components/card/TweetCard";
import { useSelector } from "react-redux";
import { allTweets } from "../store/postSlice";
import { Pagination, Stack } from "@mui/material";

export default function AllTweetPage() {
    const tweets = useSelector(allTweets);
    return (
        <div className="flex flex-col">
            <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
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
                />
            </Stack>
        </div>
    );
}
