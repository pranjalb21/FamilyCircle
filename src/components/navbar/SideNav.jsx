import React, { useId } from "react";

export default function SideNav({ navOptions }) {
    return (
        <div className="md:w-52 sm:items-center sm:flex sm:flex-col sm:gap-2 hidden text-xl bg-red-200">
            <div>
                <div className="p-4 cursor-pointer flex items-center gap-2">
                    <p className="inline-block">Icon</p>
                    <p className="md:inline-block hidden">FamilyCircle</p>
                </div>
            </div>
            <div className="w-full">
                {navOptions.map((opt) => (
                    <div
                        key={useId()}
                        className="md:py-4 md:px-4 p-4 md:justify-start justify-center hover:bg-green-100 cursor-pointer flex items-center gap-2 text-2xl"
                    >
                        <p className="inline-block">{opt.icon}</p>
                        <p className="md:inline-block hidden">{opt.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}
