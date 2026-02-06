//import * from './styles/globals.css'
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { InputWithLabel } from "@/components/ui/input-with-label";
import { createUserSchema } from "@/schemas/users/createUser.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";


export function CreateUserDialog() {
  const {register, handleSubmit , formState: {errors}} = useForm({
    resolver: zodResolver(createUserSchema)
  })
  const handleCreateUser = (data: createUserSchema) => console.log(data)
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button className="h-10">
            <Plus />
            Adicionar Usuário
        </Button>
        </DialogTrigger >
        <DialogContent className="sm:max-w-sm font-[poppins]">
          <DialogHeader>
            <DialogTitle>Adicione novo Usuário</DialogTitle>
            <DialogDescription>
              Informe aqui os dados do novo usuário
            </DialogDescription>
          </DialogHeader>
      <form  onSubmit={handleSubmit(handleCreateUser)}>
          <InputWithLabel
            id="name"
            label="Nome:"
            type="text"
            placeholder="Nome..."
            className="text-sm bg-white shadow-sm"
            error={errors.name?.message}
            {...register("name")}
          />
          <InputWithLabel
            id="email"
            label="E-mail:"
            type="email"
            placeholder="E-mail..."
            className="text-sm bg-white shadow-sm"
            error={errors.email?.message}
            {...register("email")}
          />
          <InputWithLabel
            id="password"
            label="Senha:"
            type="password"
            placeholder="senha..."
            className="text-sm bg-white shadow-sm"
            error={errors.password?.message}
            {...register("password")}
          />
          <DialogFooter className="w-full grid grid-cols-2 mt-4">
            <DialogClose asChild>
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Cria Registro</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
  );
}
