import { SidebarTrigger } from "@/components/ui/sidebar.tsx"
import { Separator } from "@/components/ui/separator.tsx"

export default function AppHeader() {
    return (
        <header className="flex items-center p-4">
            <SidebarTrigger className="-ml-1" />
            <Separator className="mx-2 data-[orientation=vertical]:h-4" orientation="vertical" />
            <h1 className="text-base font-medium">Documents</h1>
        </header>
    )
}