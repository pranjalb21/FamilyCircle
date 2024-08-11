import { Visibility, VisibilityOff } from "@mui/icons-material";
import {
    Button,
    CircularProgress,
    FormControl,
    IconButton,
    ImageList,
    ImageListItem,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    TextField,
    Typography,
} from "@mui/material";
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
const MAX_FILE_SIZE = 5000000;
const ACCEPTED_IMAGE_TYPES = [
    "image/jpeg",
    "image/jpg",
    "image/png",
    "image/webp",
];

export default function Signup() {
    const [showPassword, setShowPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);
    const registerSchema = z
        .object({
            userName: z
                .string({ message: errorMsg.username.required })
                .trim()
                .toLowerCase()
                .min(3, { message: errorMsg.username.length }),
            fullName: z
                .string({ message: errorMsg.fullname.required })
                .trim()
                .min(3, { message: errorMsg.fullname.length }),
            email: z
                .string({ message: errorMsg.email.required })
                .email({ message: errorMsg.email.validation })
                .trim(),
            password: z
                .string({ message: errorMsg.password.required })
                .min(6, { message: errorMsg.password.length }),
            confirmPassword: z
                .string({ message: errorMsg.confirmPassword.required })
                .min(6, { message: errorMsg.confirmPassword.length }),
            avatar: z
                .any()
                .refine(
                    (files) => files?.[0]?.size > 0,
                    errorMsg.avatar.required
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
        .refine((data) => data.password === data.confirmPassword, {
            message: errorMsg.confirmPassword.validation,
            path: ["confirmPassword"],
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
            userName: "",
            fullName: "",
            email: "",
            passowrd: "",
            confirmPassword: "",
            avatar: null,
        },
        resolver: zodResolver(registerSchema),
    });
    const onSubmit = async (values) => {
        const formData = new FormData();
        for (const [key, value] of Object.entries(values)) {
            if (key === "avatar") formData.append(key, value[0]);
            else formData.append(key, value);
        }
        const result = await axios
            .post("http://localhost:3000/api/v1/users/register", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            })
            .then((res) => res.data)
            .then((data) => data)
            .catch((error) => error.response.data);
        if (result.success) {
            toast.success(result.message);
            reset();
        } else {
            toast.error(result.message);
        }
    };
    const img = watch("avatar");
    return (
        <div className="flex items-center p-4 flex-col w-full">
            <h1 className="text-2xl font-bold">Register yourself</h1>
            <form
                className="flex items-center flex-col mt-5 gap-4 border p-4 rounded-md max-w-xl"
                onSubmit={handleSubmit(onSubmit)}
            >
                <div className="flex gap-4 sm:flex-row flex-col">
                    <div className="flex flex-col gap-4">
                        <TextField
                            label={"Username"}
                            name="userName"
                            {...register("userName")}
                            error={errors.userName}
                        />
                        {errors.userName && (
                            <p className="text-orange-500">
                                {errors.userName.message}
                            </p>
                        )}
                        <TextField
                            label={"Full name"}
                            name="fullName"
                            {...register("fullName")}
                            error={errors.fullName}
                        />
                        {errors.fullName && (
                            <p className="text-orange-500">
                                {errors.fullName.message}
                            </p>
                        )}
                        <TextField
                            label={"Email"}
                            name="email"
                            {...register("email")}
                            error={errors.email}
                        />
                        {errors.email && (
                            <p className="text-orange-500">
                                {errors.email.message}
                            </p>
                        )}
                        <FormControl sx={{ width: "40ch" }} variant="outlined">
                            <InputLabel htmlFor="password">Password</InputLabel>
                            <OutlinedInput
                                id="password"
                                type={showPassword ? "text" : "password"}
                                name="password"
                                {...register("password")}
                                error={errors.passowrd}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowPassword(!showPassword)
                                            }
                                        >
                                            {showPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Password"
                            />
                            {errors.password && (
                                <p className="text-orange-500">
                                    {errors.password.message}
                                </p>
                            )}
                        </FormControl>
                        <FormControl sx={{ width: "40ch" }} variant="outlined">
                            <InputLabel htmlFor="confirmPassword">
                                Confirm password
                            </InputLabel>
                            <OutlinedInput
                                id="confirmPassword"
                                type={showConfirmPassword ? "text" : "password"}
                                error={errors.confirmPassword}
                                endAdornment={
                                    <InputAdornment position="end">
                                        <IconButton
                                            onClick={() =>
                                                setShowConfirmPassword(
                                                    !showConfirmPassword
                                                )
                                            }
                                        >
                                            {showConfirmPassword ? (
                                                <VisibilityOff />
                                            ) : (
                                                <Visibility />
                                            )}
                                        </IconButton>
                                    </InputAdornment>
                                }
                                label="Confirm password"
                                name="confirmPassword"
                                {...register("confirmPassword")}
                            />
                            {errors.confirmPassword && (
                                <p className="text-orange-500">
                                    {errors.confirmPassword.message}
                                </p>
                            )}
                        </FormControl>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Typography>Avatar</Typography>
                        <Button
                            component="label"
                            role={undefined}
                            variant="contained"
                            tabIndex={-1}
                            color={errors.avatar ? "error" : "primary"}
                            startIcon={<CloudUploadIcon />}
                        >
                            Upload file
                            <VisuallyHiddenInput
                                type="file"
                                name="avatar"
                                {...register("avatar")}
                            />
                        </Button>
                        {img !== undefined && img != null && (
                            <p className="text-ellipsis">{img[0].name}</p>
                        )}
                        {errors.avatar && (
                            <p className="text-orange-500">
                                {errors.avatar.message}
                            </p>
                        )}
                    </div>
                </div>
                <div className="flex gap-4">
                    <Button
                        onClick={() => reset()}
                        variant="contained"
                        color="warning"
                    >
                        Reset
                    </Button>
                    <Button
                        type="submit"
                        variant="contained"
                        color="success"
                        disabled={isSubmitting}
                        sx={{width:100}}
                    >
                        {isSubmitting ? (
                            <CircularProgress size={20} color="inherit" />
                        ) : (
                            "Register"
                        )}
                    </Button>
                </div>
            </form>
        </div>
    );
}
