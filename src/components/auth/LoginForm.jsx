import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import authService from "../../services/auth/authService";

export const LoginForm = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const navigate = useNavigate();

    const onSubmit = async (data) => {
        try {
        const response = await authService.login(data);
        console.log("Inicio de sesión exitoso esto respondio:", response);
        navigate("/home");
        } catch (error) {
            console.error("Error en el inicio de sesión:", error);
        }
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
            <button type="submit">Iniciar Sesión</button>
        </form>
    );
};
