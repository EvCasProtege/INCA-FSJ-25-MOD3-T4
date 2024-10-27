import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tokenService } from "./services/auth/tokenService";
import ProtectedRoute from "./components/ProtectedRoute";

// Components
import { Session } from "./components/Session";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import UserComponent from "./components/auth/User";
import { LandingPage } from "./components/landing/LandingPage";
import EditBootCamp from "./components/bootcamp/EditBootCamp";
import Home from "./components/bootcamp/Home";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = tokenService.getToken();
        setIsLoggedIn(!!token);
    }, []);

    return (
        <Router>
            <Routes>
                {/* Rutas Públicas */}
                <Route path="/" element={<Session />} />

                {/* Rutas Protegidas */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <DashboardContainer />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/registro"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <RegisterBootCamp />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <UserComponent />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/landing"
                    element={
                        <ProtectedRoute redirectTo="/">
                            <LandingPage />
                        </ProtectedRoute>
                    }
                />

                {/* Ruta para manejo de 404 */}
                <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
        </Router>
    );
}
