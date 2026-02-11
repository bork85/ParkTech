import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { useAuth } from "@/providers/authProvider";
import { LogOut } from "lucide-react";
import { useNavigate } from "react-router-dom";

export function LogOutUserDialog() {
    const navigate = useNavigate()
    const {logout} = useAuth()
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="rounded-full">
          <LogOut />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[poppins]">
        <DialogHeader>
          <DialogTitle>Logout de Usuário</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <p className="text-foreground mb-4 text-sm">
            Você realmente deseja sair?
          </p>
        </div>
        <DialogFooter className="w-full grid grid-cols-2 mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Não
            </Button>
          </DialogClose>
          <Button type="button" onClick={()=>{
            logout()
            navigate('/login')}}>Sim</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
