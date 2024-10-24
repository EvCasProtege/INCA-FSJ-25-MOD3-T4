import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Session } from "./components/Session";
import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";
import LogoutButton from "./components/auth/LogoutButton";
import UserComponent from "./components/auth/User";

export default function App() {
    return (
            <div className="App">
               
                <Router>
                    <LogoutButton />
                    <UserComponent />
                    <Routes>
                        <Route path="/" element={<Session  />} />
                        <Route path="/registro" element={<RegisterBootCamp  />} />
                    </Routes>
                </Router>
            </div>
    );
}
