import { Outlet } from "react-router-dom"
import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar"
import AppSidebar from "@/components/app-sidebar"
import AppHeader from "@/components/app-header"

export default function AppLayout() {
    return (
        <SidebarProvider>
            <AppSidebar variant="inset" collapsible="icon" />
            <SidebarInset>
                <AppHeader />
                <div className="flex flex-1 flex-col p-4 pt-0">
                    <Outlet />
                </div>
            </SidebarInset>
        </SidebarProvider>
    )
}