import React from "react";
import { AiFillLike, dummyImage, FaRegComment, userImage } from "..";

export default function MediaPostCard() {
    return (
        <div className="w-60 h-72 border rounded-md overflow-hidden cursor-pointer hover:shadow-md duration-300">
            <div>
                <img src={dummyImage} alt="" />
            </div>
            <div className="flex w-full p-2 gap-2">
                <div className="rounded-full w-12 h-12 overflow-hidden bg-red-400">
                    <img src={userImage} alt="" className="object-fill" />
                </div>
                <div>
                    <h2 className="text-xl">Title</h2>
                    <p>Channle name</p>
                    <p className="text-sm">
                        <span>100 Views</span> | <span>16 hours ago</span>
                    </p>
                </div>
            </div>
            <div className="flex justify-evenly mt-auto">
                <p className="hover:bg-slate-400 cursor-pointer p-2 w-1/2 text-center hover:text-white"><AiFillLike className="inline-block" /> 100</p>
                <p className="hover:bg-slate-400 hover:text-white cursor-pointer p-2 w-1/2 text-center"><FaRegComment className="inline-block" /> 100</p>
            </div>
        </div>
    );
}
