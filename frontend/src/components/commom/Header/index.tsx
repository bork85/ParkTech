import { User } from "lucide-react";


export function Header(){

    return (
        <header className="h-18 bg-white flex items-center justify-end px-4">
            <div className="flex items-center gap-4">
                <div className="flex flex-col items-end">
                    <p className="text-sidebar font-bold text-[13px]">Username</p>
                    <p className="text-sidebar-border/80 text-[10px]">email@parktech.com</p>
                </div>
                <div className="size-9 rounded-full bg-sidebar text-white flex items-center justify-center">
                    <User className="size-6"/>
                </div>
            </div>
        </header>
    )
}