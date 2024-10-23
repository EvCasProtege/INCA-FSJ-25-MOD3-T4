import { useState } from "react";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { Link } from "react-router-dom";

export const Session = () => {
    // useState para determinar el tipo de formulario a mostrar
    const [typeForm, setTypeForm] = useState("login");

    if(localStorage.getItem("authToken")){
        return (
            <>
            { true ? <>
            <button onClick={console.log("Cerrar cesión")}>Cerrar sesion</button>
            </>
            : <Link to="/registro">Registro de Bootcamp</Link> }
              
          </>
        )
    }
    return (
        <>
            <Link to="/">Regresar</Link>
            <br />
            <button onClick={() => setTypeForm("login")}>Iniciar Sesión</button>
            <button onClick={() => setTypeForm("signup")}>Registrarse</button>
            {/* Renderizado Condicional */}
            {typeForm === "login" ? <LoginForm /> : <RegisterForm />}
            
        </>
    );
};
