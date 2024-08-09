import React from "react";
import { MdOutlineInsertPhoto } from "react-icons/md";
import { GoVideo } from "react-icons/go";
import { CiTextAlignLeft } from "react-icons/ci";

export default function TopBar() {
    return (
        <div className="flex w-full md:justify-start justify-center text-2xl border-b-2 sm:h-16 sm:text-3xl h-12 sticky top-0 z-20 bg-white">
            <div className=" sm:w-28 flex justify-center items-center cursor-pointer hover:font-bold w-20">
                {" "}
                <MdOutlineInsertPhoto className="hover:text-3xl duration-200 sm:hover:text-4xl" />{" "}
            </div>
            <div className="flex justify-center items-center  cursor-pointer hover:font-bold w-20 sm:w-28">
                <GoVideo className="hover:text-3xl duration-200 sm:hover:text-4xl" />{" "}
            </div>
            <div className="flex justify-center items-center cursor-pointer hover:font-extrabold w-20 sm:w-28">
                <CiTextAlignLeft className="hover:text-3xl duration-200 sm:hover:text-4xl" />{" "}
            </div>
        </div>
    );
}
