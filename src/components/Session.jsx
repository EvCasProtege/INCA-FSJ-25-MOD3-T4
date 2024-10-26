import { useState } from "react";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { Link } from "react-router-dom";

export const Session = () => {
    const [typeForm, setTypeForm] = useState("login");

    return (
        <>
            {/* Renderizar solo si el usuario no está logueado */}
            {typeForm === "login" ? (
                <div>
                    <LoginForm />
                    <p>
                        No tienes cuenta?{" "}
                        <Link to="/" onClick={() => setTypeForm("signup")}>
                            Regístrate
                        </Link>
                    </p>
                </div>
            ) : (
                <div>
                    <RegisterForm />
                    <p>
                        Ya tienes cuenta?{" "}
                        <Link to="/" onClick={() => setTypeForm("login")}>
                            Inicia Sesión
                        </Link>
                    </p>
                </div>
            )}
        </>
    );
};
