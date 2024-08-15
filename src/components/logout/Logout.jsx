import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/authSlice";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { unsetVideos } from "../../store/postSlice";

export default function Logout() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            const { data } = await axios.post(
                "/users/logout",
                {},
                { withCredentials: true }
            );
            if (data.success) {
                dispatch(logout());
                toast.success(data.message);
                dispatch(unsetVideos())
                localStorage.removeItem("accessToken")
            }
            navigate("/");
        })();
    }, []);
}
