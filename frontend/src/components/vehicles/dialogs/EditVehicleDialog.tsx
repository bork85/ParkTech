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
import { editVehicleSchema, type EditVehicleSchema } from "@/schemas/vehicles/editVehicle.schema";
import type { Vehicle } from "@/types/vehicles.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useForm } from "react-hook-form";

interface EditVehicleProps {
  editingVehicle: Vehicle;
}

export function EditVehicleDialog({editingVehicle}: EditVehicleProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editVehicleSchema),
    defaultValues: {
      plate: editingVehicle.plate,
      model: editingVehicle.model,
      color: editingVehicle.color,
    }
  });
  const handleEditVehicle = (data: EditVehicleSchema) => console.log(data);
  return (
    <Dialog>
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
            <Button type="submit">Salvar Registro</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
