import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Signup() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
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
                            {...register("fullName", {
                                required: "Required",
                            })}
                            placeholder="Full Name"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="userName">Username</label>
                        <input
                            type="text"
                            name="userName"
                            id="userName"
                            autoComplete="off"
                            {...register("userName", {
                                required: "Required",
                            })}
                            placeholder="Username"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="email">Email Id</label>
                    <input
                        type="email"
                        name="email"
                        id="email"
                        autoComplete="off"
                        {...register("email", {
                            required: "Required",
                            pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: "Invalid email address",
                            },
                        })}
                        placeholder="Email"
                        className="px-2 py-2 outline-none rounded-md"
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="password">Password</label>
                    <input
                        type="password"
                        name="password"
                        id="password"
                        {...register("password", {
                            required: "Required",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                                message: "Invalid password",
                            },
                        })}
                        placeholder="Password"
                        className="px-2 py-2 outline-none rounded-md"
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                    <label htmlFor="confirmPassword">Confirm Password</label>
                    <input
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        {...register("password", {
                            required: "Required",
                            pattern: {
                                value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                                message: "Invalid password",
                            },
                        })}
                        placeholder="Password"
                        className="px-2 py-2 outline-none rounded-md"
                    />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="avatar">Profile Image</label>
                        <input type="file" name="avatar" id="avatar" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="coverImage">Cover Image</label>
                        <input type="file" name="coverImage" id="coverImage" />
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
                        <Link to={"/login"} className="hover:underline hover:text-blue-500">
                            click here
                        </Link>{" "}
                    </p>
                </div>
            </div>
        </div>
    );
}
