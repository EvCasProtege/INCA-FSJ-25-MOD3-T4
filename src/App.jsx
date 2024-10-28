import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { tokenService } from "./services/auth/tokenService";
import ProtectedRoute from "./components/ProtectedRoute";

// Components
import { Session } from "./components/Session";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import { UserComponent } from "./components/UserComponent";
import { LandingPage } from "./components/landing/LandingPage";
import EditBootCamp from "./components/bootcamp/EditBootCamp";
import { Home } from "./components/bootcamp/Home";
import { BootcampProvider } from "./provider/BootcampContext";

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
                <Route path="/login" element={<Session />} />

                {/* Rutas Protegidas */}
                <Route
                    path="/dashboard"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <DashboardContainer />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/registro"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <RegisterBootCamp />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/user"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <UserComponent />
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/inicio"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <BootcampProvider>
                                <LandingPage />
                            </BootcampProvider>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/bootcamps"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <BootcampProvider>
                                <Home />
                            </BootcampProvider>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/edit-bootcamp/:id"
                    element={
                        <ProtectedRoute redirectTo="/login">
                            <EditBootCamp />
                        </ProtectedRoute>
                    }
                />

                {/* Ruta para manejo de 404 */}
                <Route path="*" element={<Navigate to="/login" replace />} />
            </Routes>
        </Router>
    );
}
