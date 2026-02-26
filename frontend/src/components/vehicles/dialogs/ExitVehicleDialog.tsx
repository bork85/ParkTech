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
import { useGetVehiclePrice } from "@/hooks/vehicles/useGetVehiclePrice";
import { exitVehicle } from "@/services/vehicles/vehicles.service";
import type { Vehicle } from "@/types/vehicles.types";
import { getCurrency } from "@/utils/formatters";
import { AxiosError } from "axios";
import { DollarSign } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface ExitVehicleProps {
  exitingVehicle: Vehicle;
  onSuccess: () => void;
}

export function ExitVehicleDialog({ exitingVehicle, onSuccess }: ExitVehicleProps) {
  const [open, setOpen] = useState(false)
  const {data} = useGetVehiclePrice({id: exitingVehicle.id})
  console.log('Valor total', data)
  async function handleExitVehicle() {
    try {
      console.log('Saindo do veiculo:', exitingVehicle.id)
      await exitVehicle({ id: exitingVehicle.id })
      toast.success("Saída de veículo com sucesso")
      onSuccess()
      setOpen(false)
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
  }
  return (
    <Dialog open={open} onOpenChange={setOpen}>
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
          <p className="text-foreground mt-4 text-sm">Valor total a pagar:</p>
          <p className="font-bold text-2xl">{getCurrency(data as number)}</p>
        </div>
        <DialogFooter className="w-full grid grid-cols-2 mt-4">
          <DialogClose asChild>
            <Button type="button" variant="outline">
              Cancelar
            </Button>
          </DialogClose>
          <Button onClick={handleExitVehicle}>Confirmar</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
