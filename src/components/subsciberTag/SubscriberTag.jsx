import React from "react";
import { Avatar, userImage } from "..";
export default function SubscriberTag() {
    return (
        <div className="grid grid-cols-6 bg-gray-200 p-2 shadow-sm rounded-lg hover:shadow-md cursor-pointer h-32 sm:shrink-0">
            <div className="col-span-2 md:shrink-0">
                <Avatar image={userImage} text={"subscriber"} />
            </div>
            <div className="col-span-4 p-4">
                <h1>Name</h1>
                <h3>@userName</h3>
            </div>
        </div>
    );
}
