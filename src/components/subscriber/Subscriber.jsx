import React from "react";
import userImage from "../../assets/user.jpg";
import { Avatar } from "@mui/material";
export default function Subscriber() {
    const subscribers = [
        {
            _id: 1,
            fullName: "Abc",
            userName: "abcd",
            avatar: userImage,
        },
        {
            _id: 1,
            fullName: "Abc",
            userName: "abcd",
            avatar: userImage,
        },
        {
            _id: 1,
            fullName: "Abc",
            userName: "abcd",
            avatar: userImage,
        },
    ];
    return (
        <div className="w-full bg-gray-50 p-4">
            <div className="flex flex-wrap gap-3 md:justify-start justify-center">
                {subscribers.map((subscriber) => (
                    <div
                        className="w-80 bg-white h-20 p-2 rounded-md shadow-sm flex gap-4 cursor-pointer hover:scale-101 duration-300 hover:shadow-md border"
                        key={subscriber._id}
                    >
                        <Avatar
                            sx={{ width: 50, height: 50 }}
                            src={subscriber.avatar}
                        />
                        <div>
                            <p>{subscriber.fullName}</p>
                            <p>{subscriber.userName}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
