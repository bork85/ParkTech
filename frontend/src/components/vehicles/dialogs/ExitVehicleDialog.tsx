import { Plate } from "@/components/commom/plate";
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
import type { Vehicle } from "@/types/vehicles.types";
import { DollarSign } from "lucide-react";

interface ExitVehicleProps {
  exitingVehicle: Vehicle;
}

export function ExitVehicleDialog({ exitingVehicle }: ExitVehicleProps) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-white">
          <DollarSign />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-sm font-[poppins]">
        <DialogHeader>
          <DialogTitle>Saída de veiculo</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center justify-center">
          <p className="text-foreground mb-4 text-sm">Você confirma a saída do veiculo:</p>
          <p className="font-semibold text-2xl">{`${exitingVehicle.model} - ${exitingVehicle.color}`}</p>
          <Plate size="lg" plateText={exitingVehicle.plate} />
        </div>
        <DialogFooter className="w-full grid grid-cols-2 mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button type="submit">Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
