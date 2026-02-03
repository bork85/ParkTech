import { ArrowRightLeft, Car, ChartColumn, DollarSign, LayoutDashboard, Settings } from "lucide-react";
import { Logo } from "../logo";
import { useLocation } from "react-router-dom";

export function SideBar() {
  const { pathname } = useLocation();
  const menuItems = [
    { label: "Dashboard", path: "/dashboard", icon: LayoutDashboard },
    { label: "Movimentações", path: "/movimentations", icon: ArrowRightLeft },
    { label: "Veículos", path: "/vehicles", icon: Car },
    { label: "Preços", path: "/prices", icon: DollarSign },
    { label: "Relatórios", path: "/reports", icon: ChartColumn },
    { label: "Configurações", path: "/settings", icon: Settings },
  ];

  return (
    <aside className="w-65 bg-sidebar flex flex-col">
      <div className="h-18 border-b border-sidebar-border w-full flex items-center p-6">
        <Logo size="md" variant="light" />
      </div>

      <nav className="py-4">
        <ul>
          {menuItems.map((item) => {
            const isActive = item.path === pathname;
            const Icon = item.icon
            return (
              <li
                key={item.path}
                className={`hover:bg-sidebar-border/50 w-full flex items-center h-12 gap-4 px-6 transition-all text-sm 
                    ${isActive ? 'bg-sidebar-border/80 border-l-4 border-sidebar-accent text-white font-semibold' : 'text-white/80'}`}
              >
                <Icon className="size-5"/>
                <a href={item.path}>{item.label}</a>
              </li>
            );
          })}
        </ul>
      </nav>
    </aside>
  );
}
