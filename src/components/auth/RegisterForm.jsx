// src/components/auth/RegisterForm.jsx
import React from "react";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";

export const RegisterForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = async (data) => {
        const response = await authService.register(data);
        console.log("Registro exitoso:", response);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label>Username</label>
                <input type="text" {...register("username", { required: "El nombre de usuario es requerido." })} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input type="password" {...register("password", { required: "La contraseña es requerida." })} />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit">Registrarse</button>
        </form>
    );
};
