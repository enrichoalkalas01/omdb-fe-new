import { Routes, Route } from "react-router-dom";

// Components
import Homepages from "./Components/Homepages/Homepages";
import Login from "./Components/Login/Login";

export default function App() {
    return (
        <Routes>
            <Route path="/" element={ <Homepages /> } />
            <Route path="/login" element={ <Login /> } />
        </Routes>
    );
}