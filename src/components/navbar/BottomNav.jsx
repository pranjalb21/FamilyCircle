import React, { useId } from "react";

export default function BottomNav({ navOptions }) {
    return (
        <div className="sm:hidden fixed bottom-0 flex bg-red-300 w-full justify-evenly box-border">
            {navOptions.map((opt) => (
                <div
                    key={useId()}
                    className="py-3 px-2 text-xl justify-center   cursor-pointer flex items-center gap-2 box-border  hover:text-2xl duration-200 hover:py-0 hover:px-1.5"
                >
                    <p className="inline-block box-border">{opt.icon}</p>
                    <p className="md:inline-block hidden">{opt.name}</p>
                </div>
            ))}
        </div>
    );
}
