import React, { useEffect, useState } from "react";
import Layout from "../components/layout/Layout";
import ImageCard from "../components/card/ImageCard";
import { useDispatch, useSelector } from "react-redux";
import { allImages, setImages } from "../store/postSlice";
import { Pagination, Stack } from "@mui/material";
import { loggedInUser } from "../store/authSlice";
import axios from "axios";

export default function AllImagePage({profile=false}) {
    const images = useSelector(allImages);
    const user = useSelector(loggedInUser)
    const dispatch = useDispatch();
    const [page, setPage] = useState(1);
    const fetchImages = async (page) => {
        await axios
            .get(`images/all/?page=${page}`)
            .then((res) => {
                dispatch(setImages(res.data.data));
            })
            .catch((err) => console.log(err.response));
    };
    const fetchUserimages=async(page)=>{
        await axios
            .get(`images/user/${user?._id}/?page=${page}`)
            .then((res) => {
                dispatch(setImages(res.data.data));
            })
            .catch((err) => console.log(err.response));
    }
    useEffect(() => {
        if (!profile) {
            fetchImages(page);
        }else{
            fetchUserimages(page)
        }
    }, [page]);
    const handleChange = (event, value) => {
        setPage(value);
    };
    return (
        <div className="flex flex-col">
            <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:items-start items-center p-4 gap-3 pb-20">
                {images?.totalDocs > 0 ? (
                    images.docs.map((image) => (
                        <ImageCard key={image._id} post={image} />
                    ))
                ) : (
                    <p>No image posted yet.</p>
                )}
            </div>
            <Stack spacing={2} className="self-center">
                <Pagination
                    count={Math.ceil(images?.totalDocs / images.limit)}
                    onChange={handleChange}
                />
            </Stack>
        </div>
    );
}
