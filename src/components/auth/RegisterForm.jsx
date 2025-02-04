import { useState } from "react";
import { useForm } from "react-hook-form";
import authService from "../../services/auth/authService";

export const RegisterForm = ({ onSuccess }) => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [errorMessage, setErrorMessage] = useState("");

    const onSubmit = async (data) => {
        try {
            await authService.register(data);
            onSuccess();
        } catch (error) {
            setErrorMessage(error.message);
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
            <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                    Usuario
                </label>
                <div className="mt-1">
                    <input
                        id="username"
                        type="text"
                        {...register("username", { required: "El nombre de usuario es requerido." })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                {errors.username && <p className="mt-2 text-sm text-red-600 text-center">{errors.username.message}</p>}
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300">
                    Contraseña
                </label>
                <div className="mt-1">
                    <input
                        id="password"
                        type="password"
                        {...register("password", { required: "La contraseña es requerida." })}
                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    />
                </div>
                {errors.password && <p className="mt-2 text-sm text-red-600 text-center">{errors.password.message}</p>}
            </div>
            <div>
                {errorMessage && <div className="mt-2 text-sm text-red-600 text-center">{errorMessage}</div>}
                <button
                    type="submit"
                    className="w-full bg-teal-500 hover:bg-teal-600 text-white font-bold py-2 px-4 rounded transition-colors duration-300"
                >
                    Registrarse
                </button>
            </div>
        </form>
    );
};
