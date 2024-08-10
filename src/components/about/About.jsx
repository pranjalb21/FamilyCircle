import React from "react";
import { FaFacebook, FaGithub, FaInstagram, FaLinkedin } from "react-icons/fa";

export default function About() {
    return (
        <div className="w-full bg-gray-50 flex flex-col items-center p-4 gap-4">
            <h1 className="text-2xl font-bold">About</h1>
            <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Explicabo non nostrum vero cupiditate nesciunt, necessitatibus
                numquam velit voluptate molestias iste quidem accusantium illo
                eaque beatae nemo, illum fuga magnam perspiciatis quisquam
                debitis laudantium! Consequatur iste earum aperiam commodi
                accusantium. Reprehenderit earum ullam necessitatibus optio
                reiciendis rerum id voluptatibus mollitia exercitationem
                nesciunt maxime veniam ex laboriosam nihil, esse ratione enim
                quos doloribus quasi quae recusandae. Ullam minus saepe enim
                quam eveniet, voluptatum doloribus consequuntur, maxime ab natus
                eos ea officiis quos eligendi sint facere repudiandae dolorum
                tempore perferendis odio nulla velit dicta deserunt.
                Exercitationem, repellendus expedita itaque voluptate quae atque
                vero?
            </p>
            <div className="flex flex-col items-center">
                <p className="text-sm">Developed By</p>
                <h1 className="text-xl hover:underline cursor-pointer">Pranjal Gain</h1>
                <div className="flex gap-3 p-4 text-2xl h-16">
                    <p className="shadow-sm cursor-pointer hover:text-3xl w-10 flex justify-center items-center hover:shadow-md rounded-lg duration-200 hover:shadow-green-700">
                        <FaFacebook />
                    </p>
                    <p className="shadow-sm cursor-pointer hover:text-3xl w-10 flex justify-center items-center hover:shadow-md rounded-lg duration-200 hover:shadow-green-700">
                        <FaInstagram />
                    </p>
                    <p className="shadow-sm cursor-pointer hover:text-3xl w-10 flex justify-center items-center hover:shadow-md rounded-lg duration-200 hover:shadow-green-700">
                        <FaGithub />
                    </p>
                    <p className="shadow-sm cursor-pointer hover:text-3xl w-10 flex justify-center items-center hover:shadow-md rounded-lg duration-200 hover:shadow-green-700">
                        <FaLinkedin />
                    </p>
                </div>
            </div>
        </div>
    );
}
