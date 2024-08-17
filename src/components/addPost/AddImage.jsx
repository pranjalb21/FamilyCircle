import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    CircularProgress,
    Typography,
} from "@mui/material";
import { BiImageAdd } from "react-icons/bi";

import React, { useState } from "react";
import { styled } from "@mui/material/styles";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import userImage from "../../assets/user.jpg";
import { useForm } from "react-hook-form";
import { z } from "zod";
import errorMsg from "../../config/errorMessage";
import { zodResolver } from "@hookform/resolvers/zod";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { MdOutlineCancel } from "react-icons/md";
import { GrPowerReset } from "react-icons/gr";
import { IoSend } from "react-icons/io5";

const VisuallyHiddenInput = styled("input")({
    clip: "rect(0 0 0 0)",
    clipPath: "inset(50%)",
    height: 1,
    overflow: "hidden",
    position: "absolute",
    bottom: 0,
    left: 0,
    whiteSpace: "nowrap",
    width: 1,
});
const MAX_FILE_SIZE = 10000000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export default function AddImage() {
    const navigate = useNavigate();
    const imageSchema = z
        .object({
            image: z
                .any()
                .refine(
                    (files) => files?.[0]?.size > 0,
                    errorMsg.image.required
                )
                .refine(
                    (files) => files?.[0]?.size <= MAX_FILE_SIZE,
                    `Max image size is 5MB.`
                )
                .refine(
                    (files) => ACCEPTED_IMAGE_TYPES.includes(files?.[0]?.type),
                    "Only .jpg, .jpeg, .png and .webp formats are supported."
                ),
        })
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            image: null,
        },
        resolver: zodResolver(imageSchema),
    });
    const onSubmit = async (values) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            if (key === "image") formData.append(key, value[0]);
            else formData.append(key, value);
        }
        const result = await axios
            .post("http://localhost:3000/api/v1/users/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
                withCredentials: true,
            })
            .then((res) => res.data)
            .then((data) => data)
            .catch((error) => error.response.data);
        if (result.success) {
            toast.success(result.message);
            localStorage.setItem("accessToken", result.data.token);
            navigate("/");
            reset();
        } else {
            toast.error(result.message);
        }
    };
    const image = watch("image");
    return (
        <div className="flex items-center p-4 flex-col w-full">
            <h1 className="text-2xl font-bold">Post Image</h1>
            <form
                className="flex items-center flex-col mt-5 gap-4 border p-4 rounded-md min-w-108"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex gap-4 flex-col w-full">
                    <div className="flex flex-col gap-2">
                        <Typography>Image</Typography>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            color={errors.image ? "error" : "primary"}
                            startIcon={<BiImageAdd />}
                        >
                            Add Image
                            <VisuallyHiddenInput
                                type="file"
                                name="image"
                                {...register("image")}
                            />
                        </Button>
                        {image !== undefined && image != null && (
                            <p className="text-ellipsis">{image[0].name}</p>
                        )}
                        {errors.image && (
                            <p className="text-orange-500">
                                {errors.image.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button
                        onClick={() => navigate("/")}
                        variant="contained"
                        color="error"
                        sx={{ width: 100 }}
                    >
                        Cancel{" "}
                        <span>
                            <MdOutlineCancel className="font-extrabold text-xl ml-1" />
                        </span>
                    </Button>
                    <Button
                        onClick={() => reset()}
                        variant="contained"
                        color="warning"
                        sx={{ width: 100 }}
                    >
                        Reset{" "}
                        <span>
                            <GrPowerReset className="font-extrabold text-xl ml-1" />
                        </span>
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        disabled={isSubmitting}
                        sx={{ width: 80 }}
                    >
                        {isSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                        ) : (
                            "Post"
                        )}{" "}
                        <span>
                            <IoSend className="font-extrabold text-xl ml-1" />
                        </span>
                    </Button>
                </div>
            </form>
        </div>
    );
}
