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
import { createVehicleSchema } from "@/schemas/vehicles/createVehicle.schema";
import { zodResolver } from "@hookform/resolvers/zod";
import { Plus } from "lucide-react";
import { useForm } from "react-hook-form";


export function CreateVehicleDialog() {
  const {register, handleSubmit , formState: {errors}} = useForm({
    resolver: zodResolver(createVehicleSchema)
  })
  const handleCreateVehicle = (data: createVehicleSchema) => console.log(data)
  return (
    <Dialog>
        <DialogTrigger asChild>
          <Button className="h-10">
            <Plus />
            Adicionar Veiculo
        </Button>
        </DialogTrigger >
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
              <Button type="button" variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit">Cria Registro</Button>
          </DialogFooter>
      </form>
        </DialogContent>
    </Dialog>
  );
}
