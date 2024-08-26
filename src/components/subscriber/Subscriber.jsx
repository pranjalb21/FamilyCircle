import React, { useEffect, useState } from "react";
import userImage from "../../assets/user.jpg";
import { Avatar } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { loggedInUser } from "../../store/authSlice";
import axios from "axios";
import { Link } from "react-router-dom";
export default function Subscriber() {
    // const subscribers = [
    //     {
    //         _id: 1,
    //         fullName: "Abc",
    //         userName: "abcd",
    //         avatar: userImage,
    //     },
    //     {
    //         _id: 2,
    //         fullName: "Abc",
    //         userName: "abcd",
    //         avatar: userImage,
    //     },
    //     {
    //         _id: 3,
    //         fullName: "Abc",
    //         userName: "abcd",
    //         avatar: userImage,
    //     },
    // ];
    const dispatch = useDispatch();
    const user = useSelector(loggedInUser);
    const [subscribers, setSubscribers] = useState(null);
    const fetchSubscribers = async (id) => {
        axios
            .get(`subscribes/subscribers/${user._id}`)
            .then((res) => {
                setSubscribers(res.data.data);
            })
            .catch((err) => console.log(err));
    };
    useEffect(() => {
        fetchSubscribers(user._id);
    }, [user]);
    return (
        <div className="w-full bg-gray-50 p-4">
            <div className="flex flex-wrap gap-3 md:justify-start justify-center">
                {subscribers?.subscriberCount > 0 ? (
                    subscribers.subscribers.map((subscriber) => (
                        <Link
                            to={`/profiles/${subscriber.userName}`}
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
                        </Link>
                    ))
                ) : (
                    <p>No subscriber yet</p>
                )}
            </div>
        </div>
    );
}
