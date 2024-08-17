import React, { useEffect } from "react";
import Layout from "../components/layout/Layout";
import TopBar from "../components/navbar/TopBar";
import { useSelector } from "react-redux";
import { imagePage, tweetPage, videoPage } from "../store/postSlice";
import AddVideo from "../components/addPost/AddVideo";
import AddImage from "../components/addPost/AddImage";
import AddTweet from "../components/addPost/AddTweet";

export default function AddPostPage({title}) {
    const video = useSelector(videoPage);
    const image = useSelector(imagePage);
    const tweet = useSelector(tweetPage);
    useEffect(()=>{document.title=`FamilyCircle | ${title}`},[])
    return (
        <Layout>
            <div className="w-full flex flex-col">
                <TopBar />
                {
                    video?<AddVideo />:image?<AddImage />:<AddTweet />
                }
            </div>
        </Layout>
    );
}
