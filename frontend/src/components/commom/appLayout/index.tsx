import { Navigate, Outlet } from "react-router-dom";
import { Header } from "../Header";
import { SideBar } from "../SideBar";
import { useAuth } from "@/providers/authProvider";
//import { Footer } from "../footer";

export function AppLayout() {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated) {
       return ( <Navigate to="/login" replace /> )
    }
    console.log(isAuthenticated)
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

        {/* <Footer /> */}
      </div>
    </div>
  );
}
