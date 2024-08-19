import { Button, CircularProgress, TextField } from "@mui/material";

import React, { useState } from "react";
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

export default function AddTweet() {
    const navigate = useNavigate();
    const tweetSchema = z.object({
        content: z
            .string({ message: errorMsg.content.required })
            .trim()
            .min(3, { message: errorMsg.content.length })
    });
    const {
        register,
        handleSubmit,
        clearErrors,
        reset,
        watch,
        formState: { errors, isSubmitting },
    } = useForm({
        defaultValues: {
            content: "",
        },
        resolver: zodResolver(tweetSchema),
    });
    const onSubmit = async (values) => {
        const result = await axios
            .post("tweets/add", values)
            .then((res) => res.data)
            .then((data) => data)
            .catch((error) => error.response.data);
        if (result.success) {
            toast.success(result.message);
            navigate("/");
            reset();
        } else {
            toast.error(result.message);
        }
    };
    return (
        <div className="flex items-center p-4 flex-col w-full">
            <h1 className="text-2xl font-bold">Post Tweet</h1>
            <form
                className="flex items-center flex-col mt-5 gap-4 border p-4 rounded-md min-w-108"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex gap-4 flex-col w-full">
                    <div className="flex flex-col gap-4">
                        <TextField
                            label={"Tweet"}
                            name="content"
                            multiline
                            rows={10}
                            {...register("content")}
                            error={errors.content}
                            autoFocus
                        />
                        {errors.content && (
                            <p className="text-orange-500">
                                {errors.content.message}
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
                        className="disabled:opacity-80"
                        disabled={isSubmitting}
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
                        className="disabled:opacity-80"
                        disabled={isSubmitting}
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
                        className="disabled:opacity-80"
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
