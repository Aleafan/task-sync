import NavigationBar from "@/components/NavigationBar";
import { Outlet } from "react-router";

export default function AppShell() {
    return (
        <div className="flex min-h-svh flex-col">
            <NavigationBar />
            <main className="flex flex-1 py-4">
                <Outlet />
            </main>
        </div>
    );
}