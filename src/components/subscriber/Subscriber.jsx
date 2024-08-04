import React from "react";
import { SubscriberTag } from "..";
export default function Subscriber() {
    return (
        <div className="p-4 grid md:grid-cols-2 gap-2 grid-cols-1">
            <SubscriberTag />
            <SubscriberTag />
        </div>
    );
}
