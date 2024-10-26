import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Session } from "./components/Session";
import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import DashboardContainer from "./components/dashboard/DashboardContainer";
import ProtectedRoute from "./components/ProtectedRoute";
import EditBootCamp from "./components/bootcamp/EditBootCamp";
import Home from "./components/bootcamp/Home";

export default function App() {
    return (
            <div className="App">
               
                <Router>
                    <Routes>
                        <Route path="/" element={<Session  />} />
                        <Route path="/home" element={<Home  />} />
                        <Route path="/registro" element={<ProtectedRoute><RegisterBootCamp  /></ProtectedRoute>} />
                        <Route path="/dashboard" element={<ProtectedRoute><DashboardContainer  /></ProtectedRoute>} />
                        <Route path="/edit-bootcamp/:id" element={<ProtectedRoute><EditBootCamp  /></ProtectedRoute>} />
                    </Routes>
                </Router>
            </div>
    );
}
