import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Session } from "./components/Session";
import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import LogoutButton from "./components/auth/LogoutButton";
import UserComponent from "./components/auth/User";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import { tokenService } from "./services/auth/tokenService";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = tokenService.getToken();
        setIsLoggedIn(!!token); // Establece si hay un token
    }, []);

    return (
        <div className="App">
            <Router>
                {isLoggedIn && <LogoutButton />} {/* Mostrar LogoutButton solo si está logueado */}
                {isLoggedIn && <Link to="/">Regresar</Link>} {/* Mostrar Regresar solo si está logueado */}
                <Routes>
                    <Route path="/" element={<Session />} />
                    <Route path="/registro" element={<RegisterBootCamp />} />

                    {/* Rutas protegidas */}
                    <Route
                        path="/dashboard"
                        element={
                            <ProtectedRoute>
                                <DashboardContainer />
                            </ProtectedRoute>
                        }
                    />
                    <Route
                        path="/user"
                        element={
                            <ProtectedRoute>
                                <UserComponent />
                            </ProtectedRoute>
                        }
                    />
                </Routes>
            </Router>
        </div>
    );
}
