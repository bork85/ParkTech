import { useAuth } from "@/providers/authProvider";
import { User } from "lucide-react";


export function Header(){
    const {user} = useAuth();
    //console.log(user);
    return (
        <header className="h-19 bg-white flex items-center justify-end px-4 shadow-md">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                    <p className="text-sidebar font-bold text-[13px]">{user.name}</p>
                    <p className="text-sidebar-border/80 text-[10px]">{user.email}</p>
                </div>
                <div className="size-9 rounded-full bg-sidebar text-white flex items-center justify-center">
                    <User className="size-6"/>
                </div>
            </div>
        </header>
    )
}