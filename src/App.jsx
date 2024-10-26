// src/App.jsx
import { BrowserRouter as Router, Routes, Route, Navigate  } from "react-router-dom";
import { useEffect, useState } from "react";
import { tokenService } from "./services/auth/tokenService";
import ProtectedRoute from "./components/ProtectedRoute";

// Components
import Navbar from "./components/landing/Navbar";
import LogoutButton from "./components/auth/LogoutButton";
import {Session} from "./components/Session";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import UserComponent from "./components/auth/User";
import Info from "./components/landing/info";

export default function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    useEffect(() => {
        const token = tokenService.getToken();
        setIsLoggedIn(!!token);
    }, []);

    return (
        <Router>
            <div className="App">
                <Navbar isLoggedIn={isLoggedIn}>
                    {isLoggedIn && <LogoutButton />}
                </Navbar>

                <main className="container mx-auto px-4 py-8">
                    <Routes>
                        {/* Rutas Públicas */}
                        <Route path="/" element={<Session />} />
                        <Route path="/registro" element={<RegisterBootCamp />} />

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
                                    <Info />
                                </ProtectedRoute>
                            }
                        />

                        {/* Ruta para manejo de 404 */}
                        <Route path="*" element={<Navigate to="/" replace />} />
                    </Routes>
                </main>
            </div>
        </Router>
    );
}