import { Outlet } from "react-router-dom";
import { Logo } from "../commom/logo";

function AuthLayout() {
  return (
    <div className="bg-gray-200 min-h-screen min-w-screen flex items-center justify-center">
      <div
        className="bg-white p-8 rounded-2xl max-w-[90%] w-140 flex flex-col items-center shadow-lg"
        style={{ fontFamily: "Poppins" }}
      >
        <Logo size="lg" />
        <Outlet />
      </div>
    </div>
  );
}
export default AuthLayout;
