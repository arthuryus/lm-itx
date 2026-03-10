import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"
import AppLayout from "@/components/app-layout"
import Dashboard from "@/pages/Dashboard"
import Documents from "@/pages/Documents"

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<AppLayout />}>
                    <Route index element={<Navigate to="/dashboard" replace />} />
                    <Route path="dashboard" element={<Dashboard />} />
                    <Route path="documents" element={<Documents />} />
                </Route>
            </Routes>
        </Router>
    )
}

export default App
