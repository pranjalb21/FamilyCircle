import React from "react";
import { Avatar, SlLike, userImage, video } from "..";
import { Link } from "react-router-dom";

export default function Video() {
    return (
        <div className="flex flex-col gap-2 h-1/2 justify-center  p-6">
            <video className="w-1/2 h-1/2 self-start" controls>
                <source src={video} />
            </video>
            <div className="self-start flex flex-wrap gap-2 w-1/2 p-2">
                <Avatar image={userImage} />
                <div className="self-center">
                    <h1>Name</h1>
                    <p>@userName</p>
                    <button className="bg-red-500 px-4 py-1 rounded-xl">Subscribe</button>
                </div>
                <div className="self-center ml-auto flex justify-center p-2 gap-2">
                        <Link>
                            <SlLike className="inline-block" />
                        </Link>
                    <p className="">
                        100
                    </p>
                </div>
            </div>
        </div>
    );
}
