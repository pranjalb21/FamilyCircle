import React from "react";
import Layout from "../components/layout/Layout";
import TweetCard from "../components/card/TweetCard";

export default function AllTweetPage() {
    return (
        <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
            <TweetCard />
        </div>
    );
}
