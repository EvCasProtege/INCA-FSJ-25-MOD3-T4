import { useState } from "react";
import { LoginForm } from "./auth/LoginForm";
import { RegisterForm } from "./auth/RegisterForm";
import { useNavigate } from "react-router-dom";

export const Session = () => {
    const [typeForm, setTypeForm] = useState("login");
    const navigate = useNavigate();

    return (
        <div className="min-h-screen flex items-center justify-center">
            <div className="max-w-md w-full bg-gray-800 rounded-lg shadow-lg p-8">
                <h2 className="text-3xl font-bold text-center text-[#04dbde] mb-8">
                    {typeForm === "login" ? "Iniciar Sesión" : "Registro"}
                </h2>
                
                <div className="space-y-6">
                    {typeForm === "login" ? (
                        <>
                            <LoginForm onSuccess={() => navigate('/dashboard')} />
                            <p className="text-center text-gray-300">
                                ¿No tienes cuenta?{" "}
                                <button
                                    onClick={() => setTypeForm("signup")}
                                    className="text-[#04dbde] hover:underline"
                                >
                                    Regístrate
                                </button>
                            </p>
                        </>
                    ) : (
                        <>
                            <RegisterForm onSuccess={() => setTypeForm("login")} />
                            <p className="text-center text-gray-300">
                                ¿Ya tienes cuenta?{" "}
                                <button
                                    onClick={() => setTypeForm("login")}
                                    className="text-[#04dbde] hover:underline"
                                >
                                    Inicia Sesión
                                </button>
                            </p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
};