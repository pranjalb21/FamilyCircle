import React from "react";
import { AiFillLike, dummyImage, FaRegComment, userImage } from "..";

export default function MediaPostCard({ video }) {
    const calculatePostTime = (time) => {
        const mongoTime = new Date(time);
        const currTime = new Date();
        const timeDifferenceInMilliseconds = Math.abs(currTime - mongoTime);

        const secondDifference = timeDifferenceInMilliseconds / 1000;

        if (secondDifference >= 365 * 24 * 3600) {
            return `${Math.ceil(secondDifference / (365 * 24 * 3600))} year`;
        } else if (secondDifference >= 30 * 24 * 3600)
            return `${Math.ceil(secondDifference / (30 * 24 * 3600))} month`;
        else if (secondDifference >= 7 * 24 * 3600)
            return `${Math.ceil(secondDifference / (7 * 24 * 3600))} week`;
        else if (secondDifference >= 24 * 3600)
            return `${Math.ceil(secondDifference / (24 * 3600))} day`;
        else if (secondDifference >= 3600)
            return `${Math.ceil(secondDifference / 3600)} hour`;
        else if (secondDifference >= 60)
            return `${Math.ceil(secondDifference / 60)} minute`;
        else return `${Math.ceil(secondDifference)} second`;
    };
    return (
        <div className="w-60 h-80 border rounded-md overflow-hidden cursor-pointer hover:shadow-md duration-300">
            <div className="h-3/5 overflow-hidden">
                <img src={video.thumbnail} alt="" className="object-contain" />
            </div>
            <div className="flex w-full p-2 gap-2">
                <div className="rounded-full w-12 h-12 overflow-hidden bg-red-400">
                    <img
                        src={video.owner.avatar}
                        alt=""
                        className="object-fill"
                    />
                </div>
                <div>
                    <h2 className="text-xl">{video.title}</h2>
                    <p>{video.owner.userName}</p>
                    <p className="text-sm">
                        <span>{video.views} Views</span> |{" "}
                        <span>{calculatePostTime(video.createdAt)} ago</span>
                    </p>
                </div>
            </div>
            {/* <div className="flex justify-evenly mt-auto">
                <p className="hover:bg-slate-400 cursor-pointer p-2 w-1/2 text-center hover:text-white">
                    <AiFillLike className="inline-block" /> 100
                </p>
                <p className="hover:bg-slate-400 hover:text-white cursor-pointer p-2 w-1/2 text-center">
                    <FaRegComment className="inline-block" /> 100
                </p>
            </div> */}
        </div>
    );
}
