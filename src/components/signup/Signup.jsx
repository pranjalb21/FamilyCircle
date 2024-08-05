import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { z } from "zod";
import { errorMsg } from "..";
import { zodResolver } from "@hookform/resolvers/zod";

export default function Signup() {
    const MAX_FILE_SIZE = 5 * 1024 * 1024; // 10 MB
    const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/png", "image/jpg"];
    const schema = z
        .object({
            fullName: z
                .string({ message: errorMsg.fullname.required })
                .trim()
                .min(3, { message: errorMsg.fullname.length }),
            userName: z
                .string({ message: errorMsg.username.required })
                .toLowerCase()
                .trim()
                .min(3, {
                    message: errorMsg.username.length,
                }),
            email: z
                .string({ message: errorMsg.email.required })
                .trim()
                .email({ message: errorMsg.email.validation }),
            password: z
                .string({ message: errorMsg.passowrd.required })
                .min(6, { message: errorMsg.passowrd.length })
                .regex(
                    /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{6,}$/,
                    { message: errorMsg.passowrd.validation }
                ),
            confirmPassword: z
                .string({ message: errorMsg.confirmPassowrd.required })
                .min(6, { message: errorMsg.confirmPassowrd.length }),
        })
        .refine((data) => data.password === data.confirmPassword, {
            message: errorMsg.confirmPassowrd.validation,
            path: ["confirmPassword"], // path of error
        });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullName: "",
            userName: "",
            email: "",
            password: "",
            confirmPassword: "",
            avatar:[],
            coverImage:[]
        },
        resolver: zodResolver(schema),
    });
    const handleSubmitForm = (values) => console.log(values);

    return (
        <div className="flex justify-center p-2 content-center h-screen overflow-y-scroll">
            <div className="bg-slate-300 rounded-md p-4 flex flex-col self-center -translate-y-14 min-w-96">
                <h1 className="text-center font-bold text-xl">Welcome</h1>
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="flex flex-col gap-2 mt-4"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="fullName">Full Name</label>
                        <input
                            type="text"
                            name="fullName"
                            id="fullName"
                            autoComplete="off"
                            {...register("fullName")}
                            placeholder="Full Name"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.fullName && (
                            <p className="text-red-500">
                                {errors.fullName.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            autoComplete="off"
                            {...register("userName")}
                            placeholder="Username"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.userName && (
                            <p className="text-red-500">
                                {errors.userName.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email Id</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            {...register("email")}
                            placeholder="Email"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.email && (
                            <p className="text-red-500">
                                {errors.email.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register("password")}
                            placeholder="Password"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.password && (
                            <p className="text-red-500">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="confirmPassword">
                            Confirm Password
                        </label>
                        <input
                            type="password"
                            name="confirmPassword"
                            id="confirmPassword"
                            {...register("confirmPassword")}
                            placeholder="Password"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.confirmPassword && (
                            <p className="text-red-500">
                                {errors.confirmPassword.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="avatar">Profile Image</label>
                        <input
                            type="file"
                            name="avatar"
                            id="avatar"
                            accept=".jpg, .jpeg, .png"
                            {...register("avatar")}
                        />
                        {errors.avatar && (
                            <p className="text-red-500">
                                {errors.avatar.message}
                            </p>
                        )}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="coverImage">Cover Image</label>
                        <input
                            type="file"
                            name="coverImage"
                            id="coverImage"
                            accept=".jpg, .jpeg, .png, .PNG"
                            {...register("coverImage")}
                        />
                        {errors.coverImage && (
                            <p className="text-red-500">
                                {errors.coverImage.message}
                            </p>
                        )}
                    </div>
                    <button
                        type="submit"
                        className="bg-blue-400 py-2 rounded-md font-bold hover:bg-blue-500 duration-300 mt-2"
                    >
                        Log In
                    </button>
                </form>
                <div className="mt-2 text-center gap-2 flex flex-col">
                    <p>
                        Already have an account ?{" "}
                        <Link
                            to={"/login"}
                            className="hover:underline hover:text-blue-500"
                        >
                            click here
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
