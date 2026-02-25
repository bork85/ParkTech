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
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { editPriceSchema } from "@/schemas/prices/editPrice.schema";
import { editPrice } from "@/services/prices/prices.service";
import type { Price } from "@/types/prices.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { AxiosError } from "axios";
import { Edit } from "lucide-react";
import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "sonner";

interface EditPriceProps {
  editingPrice: Price;
  onSuccess: () => void;
}

export function EditPriceDialog({editingPrice, onSuccess}: EditPriceProps) {
  const [open, setOpen] = useState(false);
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPriceSchema),
    defaultValues: {
      id: editingPrice.id,
      firstHourPrice: editingPrice.firstHourPrice,
      additionalHourPrice: editingPrice.additionalHourPrice,
      fractionalTime: editingPrice.fractionalTime,
    }
  });
  const handleEditPrice = async (data: editPriceSchema) => {
    const payload = {
      id: editingPrice.id,
      firstHourPrice: data.firstHourPrice,
      additionalHourPrice: data.additionalHourPrice,
      permitFractionalTime: data.fractionalTime !== "NONE",
      fractionalTime: data.fractionalTime,
    };
    
    try {
      await editPrice(payload);
      toast.success("Cadastro editado com sucesso!");
      setOpen(false);
      onSuccess();
      reset();
    } catch (error) {
      if (error instanceof AxiosError) {
        const errorMessage =
          error.response?.data?.error ||
          error.response?.data?.message ||
          error.message ||
          "Erro ao editar precificação";
        toast.error(errorMessage);
      } else {
        toast.error("Erro ao editar precificação");
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
            <DialogTitle>Adicione tabela de preços</DialogTitle>
            <DialogDescription>
              Informe aqui os novos valores de cobrança
            </DialogDescription>
          </DialogHeader>
      <form onSubmit={handleSubmit(handleEditPrice)}>
          <InputWithLabel
            id="firstHourPrice"
            label="Valor 1a Hora:"
            type="number"
            placeholder="0.00..."
            className="text-sm bg-white shadow-sm"
            error={errors.firstHourPrice?.message}
            {...register("firstHourPrice", {valueAsNumber: true})}
          />
          <InputWithLabel
            id="aditionalHourPrice"
            label="Valor Horas Adicionais:"
            type="number"
            placeholder="0.0..."
            className="text-sm bg-white shadow-sm"
            error={errors.additionalHourPrice?.message}
            {...register("additionalHourPrice", {valueAsNumber: true})}
          />
          <Controller
            name="fractionalTime"
            control={control}
            render={({ field }) => (
              <div>
                <Label>Frações de hora permitidas</Label>
                <Select onValueChange={field.onChange} value={field.value}>
                  <SelectTrigger className="w-40! h-10!">
                    <SelectValue placeholder="NÃO" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectItem value="NONE">NÃO</SelectItem>
                      <SelectItem value="MINUTES_30">30min</SelectItem>
                      <SelectItem value="MINUTES_15">15min</SelectItem>
                      <SelectItem value="MINUTES_10">10min</SelectItem>
                      <SelectItem value="MINUTES_05">05min</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
            )}
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
