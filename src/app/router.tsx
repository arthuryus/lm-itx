import { createBrowserRouter, createRoutesFromElements, Route, Outlet } from "react-router-dom";
import ProtectedRoute from "@/app/ProtectedRoute"
import PublicRoute from "@/app/PublicRoute"
import AppLayout from "@/components/app-layout"
import LoginPage from "@/pages/LoginPage"
import SignupPage from "@/pages/SignupPage"
import PasswordResetPage from "@/pages/PasswordResetPage"
import DashboardPage from "@/pages/DashboardPage"
import DocumentsPage from "@/pages/DocumentsPage";

export const router = createBrowserRouter(
    createRoutesFromElements(
        <>
            <Route
                path="/"
                element={
                    <PublicRoute>
                        <Outlet />
                    </PublicRoute>
                }
            >
                <Route path="/login" element={<LoginPage />} />
                <Route path="/signup" element={<SignupPage />} />
                <Route path="/password-reset" element={<PasswordResetPage />} />
            </Route>
            <Route
                path="/"
                element={
                    <ProtectedRoute>
                        <AppLayout />
                    </ProtectedRoute>
                }
            >
                <Route index element={<DashboardPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
                <Route path="/documents" element={<DocumentsPage />} />
            </Route>
        </>
    )
);