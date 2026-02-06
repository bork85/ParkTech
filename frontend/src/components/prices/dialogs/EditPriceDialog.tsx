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
import type { Price } from "@/types/prices.types";
import { zodResolver } from "@hookform/resolvers/zod";
import { Edit } from "lucide-react";
import { useForm, Controller } from "react-hook-form";

interface EditPriceProps {
  editingPrice: Price;
}

export function EditPriceDialog({editingPrice}: EditPriceProps) {
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(editPriceSchema),
    defaultValues: {
      firstHourPrice: editingPrice.firstHourPrice,
      aditionalHourPrice: editingPrice.aditionalHourPrice,
      fractionsPermitted: editingPrice.fractionsPermitted,
    }
  });
  const handleEditPrice = (data: editPriceSchema) => console.log(data);
  return (
    <Dialog>
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
            error={errors.aditionalHourPrice?.message}
            {...register("aditionalHourPrice", {valueAsNumber: true})}
          />
          <Controller
            name="fractionsPermitted"
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
                      <SelectItem value="NÃO">NÃO</SelectItem>
                      <SelectItem value="30min">30min</SelectItem>
                      <SelectItem value="15min">15min</SelectItem>
                      <SelectItem value="10min">10min</SelectItem>
                      <SelectItem value="05min">05min</SelectItem>
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
