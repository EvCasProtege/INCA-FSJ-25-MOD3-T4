import { useForm } from "react-hook-form";
import { useNavigate, Link } from "react-router-dom";
import authService from "../../services/auth/authService";

export const LoginForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        const response = await authService.login(data);
        console.log("Inicio de sesión exitoso:", response);
        navigate("/dashboard"); // Redirigir a la ruta de dashboard tras login exitoso
    };

    return (
        <div className="w-full max-w-xs">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4" onSubmit={handleSubmit(onSubmit)}>
            <div>
                <label  className="block text-gray-700 text-sm font-bold mb-2" >Username</label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" type="text" {...register("username", { required: "El nombre de usuario es requerido." })} />
                {errors.username && <p>{errors.username.message}</p>}
            </div>
            <div>
                <label>Contraseña</label>
                <input  type="password" {...register("password", { required: "La contraseña es requerida." })} className="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline" />
                {errors.password && <p>{errors.password.message}</p>}
            </div>
            <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Iniciar Sesión</button>
        </form>
        </div>
    );
};
