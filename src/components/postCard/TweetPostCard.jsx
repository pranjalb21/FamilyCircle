import React from "react";
import { AiFillLike, FaRegComment, userImage } from "..";

export default function TweetPostCard() {
    return (
        <div className="w-60 h-72 flex flex-col border rounded-md overflow-hidden cursor-pointer hover:shadow-md duration-300">
            <div className="flex w-full gap-4 p-4">
                <div className="rounded-full w-12 h-12 overflow-hidden bg-red-400">
                    <img src={userImage} alt="" className="object-fill" />
                </div>
                <div>
                    <p>Channle name</p>
                    <p>@username</p>
                </div>
            </div>
            <p className="p-2">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Blanditiis explicabo non quod, deleniti numquam excepturi dolorem nesciunt, pariatur totam, repellat ducimus...</p>
            <div className="flex justify-evenly mt-auto">
                <p className="hover:bg-slate-400 cursor-pointer p-2 w-1/2 text-center hover:text-white"><AiFillLike className="inline-block" /> 100</p>
                <p className="hover:bg-slate-400 hover:text-white cursor-pointer p-2 w-1/2 text-center"><FaRegComment className="inline-block" /> 100</p>
            </div>
        </div>
    );
}
