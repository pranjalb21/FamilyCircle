import React from "react";
import {
    conf,
    Logo,
    FaFacebookSquare,
    FaInstagram,
    FaLinkedin,
    FaGithub,
} from "..";

export default function Footer() {
    return (
        <div className="p-4 flex gap-4 justify-evenly mt-auto bg-green-100">
            <div className="flex flex-col">
                <Logo />
                <p className="px-2">
                    {conf.appTitle} <sup>&copy;</sup> {new Date().getFullYear()}{" "}
                </p>
            </div>
            <div>
                <p>About</p>
                <p>Contact Us</p>
                <p>Privacy Policy</p>
            </div>
            <div>
                <p>Developed by</p>
                <p>Pranjal Gain</p>
                <p className="text-xl flex gap-1">
                    <FaFacebookSquare className="inline-block hover:shadow-md cursor-pointer" />
                    <FaInstagram className="inline-block hover:shadow-md cursor-pointer" />
                    <FaLinkedin className="inline-block hover:shadow-md cursor-pointer" />
                    <FaGithub className="inline-block hover:shadow-md cursor-pointer" />
                </p>
            </div>
        </div>
    );
}
