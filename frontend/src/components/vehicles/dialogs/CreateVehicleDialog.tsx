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
import { createVehicleSchema } from "@/schemas/vehicles/createVehicle.schema";
import { createVehicle } from "@/services/vehicles/vehicles.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Plus } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface CreateVehicleDialogProps {
  onSuccess: () => void;
}
export function CreateVehicleDialog({onSuccess}: CreateVehicleDialogProps) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(createVehicleSchema),
  });
  const [open, setOpen] = useState(false)
  const handleCreateVehicle = async (data: createVehicleSchema) => {
    try {
      await createVehicle(data);
      toast.success("Cadastro realizado com sucesso!");
      setOpen(false)
      onSuccess()
      reset()
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          "Erro ao criar usuário";
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
          Adicionar Veiculo
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[poppins]">
        <DialogHeader>
          <DialogTitle>Adicione o veiculo</DialogTitle>
          <DialogDescription>
            Informe aqui os dados do veículo
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleCreateVehicle)}>
          <InputWithLabel
            id="plate"
            label="Placa:"
            type="text"
            placeholder="Placa..."
            className="text-sm bg-white shadow-sm"
            error={errors.plate?.message}
            {...register("plate")}
          />
          <InputWithLabel
            id="model"
            label="Modelo:"
            type="text"
            placeholder="Modelo..."
            className="text-sm bg-white shadow-sm"
            error={errors.model?.message}
            {...register("model")}
          />
          <InputWithLabel
            id="color "
            label="Cor:"
            type="text"
            placeholder="Cor..."
            className="text-sm bg-white shadow-sm"
            error={errors.color?.message}
            {...register("color")}
          />
          <DialogFooter className="w-full grid grid-cols-2 mt-4">
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
                "Criar Registro"
              )
            }</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
