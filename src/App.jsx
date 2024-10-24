import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Session } from "./components/Session";
import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import LogoutButton from "./components/auth/LogoutButton";
import UserComponent from "./components/auth/User";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import ProtectedRoute from "./components/ProtectedRoute";

export default function App() {
    return (
            <div className="App">
               
                <Router>
                    <ProtectedRoute><LogoutButton /></ProtectedRoute>
                    <ProtectedRoute><UserComponent /></ProtectedRoute>
                    <Routes>
                        <Route path="/" element={<Session  />} />
                        <Route path="/registro" element={<RegisterBootCamp  />} />
                        <Route path="/dashboard" element={<ProtectedRoute><DashboardContainer  /></ProtectedRoute>} />
                    </Routes>
                </Router>
            </div>
    );
}
