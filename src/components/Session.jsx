import { useState } from "react";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { Link } from "react-router-dom";
import DashboardContainer from "./dashboard/DashboardContainer";

export const Session = () => {
    // useState para determinar el tipo de formulario a mostrar
    const [typeForm, setTypeForm] = useState("login");

    return (
        <>
            <Link to="/">Regresar</Link>
            <br />
            <button onClick={() => setTypeForm("login")}>Iniciar Sesión</button>
            <button onClick={() => setTypeForm("signup")}>Registrarse</button>
            {/* Renderizado Condicional */}
            {typeForm === "login" ? <LoginForm /> : <RegisterForm />}
            {<DashboardContainer />}
            
        </>
    );
};
