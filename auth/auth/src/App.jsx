import { BrowserRouter, Routes, Route } from "react-router-dom";
import Registration from "./Registration";
import Login from "./Login";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Registration />} />
                <Route path="/login" element={<Login/>} />
            </Routes>
        </BrowserRouter>
    );
}
