import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Session } from "./components/Session";
import "./assets/css/App.css";

export default function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Session  />} />
            </Routes>
        </Router>
    );
}
