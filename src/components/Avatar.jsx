import React from "react";

export default function Avatar({ image, title }) {
    return (
        <div className="flex justify-center">
            <img src={image} alt={title} className="rounded-full border-2 object-cover md:w-28 md:h-28 sm:w-20 sm:h-20 lg:w-32 lg: h-32" />
        </div>
    );
}
