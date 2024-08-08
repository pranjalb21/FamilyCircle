import React from "react";
import dummyImage from "../../assets/DummyPost.jpg";
import userImage from "../../assets/user.jpg";
import VideoCard from "../card/VideoCard";

export default function Home() {
    const posts = [
        {
            _id:1,
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
            _id:2,
            thumbnail: "http://res.cloudinary.com/dw0vujhhh/image/upload/v1721157733/xbrurwmasw1e3xojhvwq.png",
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
    return (
        <div className="bg-yellow-100 flex w-full flex-wrap justify-center p-4 gap-1">
            {posts.map((post) => (
                <VideoCard post={post} key={post._id} />
            ))}
        </div>
    );
}
