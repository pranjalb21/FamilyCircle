import React from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";

export default function Login() {
    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm();
    const handleSubmitForm = (values) => console.log(values);

    return (
        <div className="flex justify-center p-2 content-center h-screen">
            <div className="bg-slate-300 rounded-md p-4 flex flex-col self-center -translate-y-14 min-w-96">
                <h1 className="text-center font-bold text-xl">Welcome</h1>
                <form
                    onSubmit={handleSubmit(handleSubmitForm)}
                    className="flex flex-col gap-2 mt-4"
                >
                    <div className="flex flex-col gap-1">
                        <label htmlFor="email">Email Id / Username</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            autoComplete="off"
                            {...register("email", {
                                required: "Required",
                                // pattern: {
                                //     value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                //     message: "Invalid email address",
                                // },
                            })}
                            placeholder="Email or Username"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                        {errors.email&&errors.email.message}
                    </div>
                    <div className="flex flex-col gap-1">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            name="password"
                            id="password"
                            {...register("password", {
                                required: "Required",
                                // pattern: {
                                //     value: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{6,}$/gm,
                                //     message: "Invalid password",
                                // },
                            })}
                            placeholder="Password"
                            className="px-2 py-2 outline-none rounded-md"
                        />
                    </div>
                    <div className="flex flex-col gap-1">
                        <button
                            type="submit"
                            className="bg-blue-400 py-2 rounded-md font-bold hover:bg-blue-500 duration-300 mt-2"
                        >
                            Log In
                        </button>
                    </div>
                </form>
                <div className="mt-2 text-center gap-2 flex flex-col">
                    <p>
                        Don't have an account ?{" "}
                        <Link
                            to={"/signup"}
                            className="hover:underline hover:text-blue-500"
                        >
                            click here
                        </Link>{" "}
                    </p>
                    <p>
                        <Link className="hover:underline hover:text-blue-500">
                            Forgot password
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
}
