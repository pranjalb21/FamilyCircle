import React from "react";
import { useForm } from "react-hook-form";

export default function Input({ name, type, label, placeholder, options }) {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                type={type}
                placeholder={placeholder}
                {...register(name, options)}
            />
        </div>
    );
}
