import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { useAuth } from "@/providers/authProvider";

export function AppLayout() {
    const {isAuthenticated, isLoading} = useAuth();

    if(!isAuthenticated && !isLoading) {
       return ( <Navigate to="/" replace /> )
    }
  return (
    <div
      className="flex h-screen bg-background"
      style={{ fontFamily: "Poppins" }}
    >
      <SideBar />

      <div className="w-screen h-screen flex flex-col justify-between">
        <Header />

        <main className="p-4 h-full">
          <Outlet />
        </main>

      </div>
    </div>
  );
}
