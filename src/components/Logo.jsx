import React from "react";
import { conf, logoImage } from ".";
import { Link } from "react-router-dom";

export default function Logo() {
    return (
        <Link to={"/"}>
        <div className="flex justify-center cursor-pointer">
            <img src={logoImage} alt="" className="w-12 md:w-14 lg:w-16 " />
            <h1 className="text-xl content-center font-bold font-NunitoSans italic">{conf.appTitle}</h1>
        </div>
        </Link>
    );
}
