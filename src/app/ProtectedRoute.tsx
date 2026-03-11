import { Navigate } from "react-router-dom"
import { useAuthStore } from "@/store/auth-store"

export default function ProtectedRoute({ children }: { children: React.ReactNode }) {
    const user = useAuthStore((s) => s.user)
    //const user = {id: 1, email: 'arthuryus@mail.ru', role: 'admin'};

    if (!user) {
        return <Navigate to="/login" replace />
    }

    return children
}