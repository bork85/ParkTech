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
import {
  editVehicleSchema,
  type EditVehicleSchema,
} from "@/schemas/vehicles/editVehicle.schema";
import { editVehicle } from "@/services/vehicles/vehicles.service";
import type { Vehicle } from "@/types/vehicles.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

interface EditVehicleProps {
  editingVehicle: Vehicle;
  onSuccess: () => void;
}

export function EditVehicleDialog({
  editingVehicle,
  onSuccess,
}: EditVehicleProps) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(editVehicleSchema),
    defaultValues: {
      plate: editingVehicle.plate,
      model: editingVehicle.model,
      color: editingVehicle.color,
    },
  });
  const handleEditVehicle = async (data: EditVehicleSchema) => {
    const payload: any = {
      id: editingVehicle.id,
    };
    
    if (data.plate !== editingVehicle.plate) {
      payload.plate = data.plate;
    }
    if (data.model !== editingVehicle.model) {
      payload.model = data.model;
    }
    if (data.color !== editingVehicle.color) {
      payload.color = data.color;
    }
    
    try {
      await editVehicle(payload);
      toast.success("Registro alterado com sucesso");
      setOpen(false);
      onSuccess();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          "Erro ao editar valor";
        toast.error(errorMessage);
      } else {
        toast.error("Erro ao editar valor");
      }
    }
  };
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button variant="muted" className="text-white">
          <Edit color="black" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[poppins]">
        <DialogHeader>
          <DialogTitle>Atualize registro do veiculo</DialogTitle>
          <DialogDescription>
            Informe aqui os dados do veículo
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(handleEditVehicle)}>
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
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <Spinner />
                  Editando...
                </>
              ) : (
                "Editar Registro"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
