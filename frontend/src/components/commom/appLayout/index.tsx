import { Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SideBar } from "../SideBar";

export function AppLayout(){

    return (
        <div className="flex h-screen bg-background">
            <SideBar />

            <div className="w-full h-full">
                <Header />

                <main className="p-4">
                    <Outlet />
                </main>
            </div>

        </div>
    )
}