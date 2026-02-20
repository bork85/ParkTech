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
import { Spinner } from "@/components/ui/spinner";
import { useAuth } from "@/providers/authProvider";
import { createUserSchema } from "@/schemas/users/createUser.schema";
import { CreateUser } from "@/services/users/users.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateUserDialogProps {
  onSuccess: () => void;
}
export function CreateUserDialog({onSuccess}: CreateUserDialogProps) {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    watch,
    setValue,
  } = useForm({
    resolver: zodResolver(createUserSchema),
    defaultValues: {
      role: "OPERATOR",
    },
  });
  const [open, setOpen] = useState(false)
  const userIsAdmin = useAuth().user?.role === "ADMIN";
  const handleCreateUser = async (data: createUserSchema) => {
    try {
      console.log(data);
      await CreateUser(data);
      toast.success("Usuário criado com sucesso!");
      setOpen(false)
      onSuccess();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage = error.response?.data?.error || error.response?.data?.message || error.message || "Erro ao criar usuário";
        toast.error(errorMessage);
      } else {
        toast.error("Erro ao criar usuário");
      }
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button className="h-10">
          <Plus />
          Adicionar Usuário
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[poppins]">
        <DialogHeader>
          <DialogTitle>Adicione novo Usuário</DialogTitle>
          <DialogDescription>
            Informe aqui os dados do novo usuário
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateUser)}>
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
          {userIsAdmin && (
            <InputWithLabel
              className="size-4 my-2 "
              isInline
              id="role"
              label="Admin?"
              type="checkbox"
              error={errors.role?.message}
              checked={watch("role") === "ADMIN"}
              onChange={(e) =>
                setValue("role", e.target.checked ? "ADMIN" : "OPERATOR")
              }
            />
          )}

          <DialogFooter className="w-full grid grid-cols-2 mt-6">
            <DialogClose asChild>
              <Button type="button" variant="outline">
                Cancelar
              </Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>{
              isSubmitting ? (
                <>
                  <Spinner />
                  Criando...
                </>
              ) : (
                "Criar usuário"
              )
            }</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
