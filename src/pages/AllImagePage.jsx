import React from "react";
import Layout from "../components/layout/Layout";
import ImageCard from "../components/card/ImageCard";
import { useSelector } from "react-redux";
import { allImages } from "../store/postSlice";
import { Pagination, Stack } from "@mui/material";

export default function AllImagePage() {
    const images = useSelector(allImages);
    return (
        <div className="flex flex-col">
            <div className=" flex sm:flex-row w-full sm:flex-wrap flex-col sm:justify-center sm:items-start items-center p-4 gap-3 pb-20">
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
                />
            </Stack>
        </div>
    );
}
