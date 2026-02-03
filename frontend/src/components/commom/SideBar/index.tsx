import { Logo } from "../logo";


export function SideBar(){

    return (
        <aside className="w-65 bg-primary flex flex-col items-center gap-4 p-4">
            <Logo size="md" variant="light"/> 
            <p>SIDEBAR</p>
        </aside>
    )
}