import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "@/components/app-layout"
import Dashboard from "@/pages/Dashboard"
import Documents from "@/pages/Documents"
import Login from "@/pages/Login"
import Signup from "@/pages/Signup"
import ResetPassword from "@/pages/ResetPassword"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="documents" element={<Documents />} />
                    <Route path="login" element={<Login />} />
                    <Route path="signup" element={<Signup />} />
                    <Route path="reset-password" element={<ResetPassword />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
