import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Session } from "./components/Session";
import "./assets/css/App.css";
import RegisterBootCamp from "./components/bootcamp/RegisterBootCamp";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Session  />} />
                <Route path="/registro" element={<RegisterBootCamp  />} />
            </Routes>
        </Router>
    );
}
