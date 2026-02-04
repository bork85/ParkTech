import { Button } from "@/components/ui/button"
import { Plus } from "lucide-react"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { InputSearch } from "@/components/ui/input-search"
import { useVehicles } from "@/hooks/vehicles/useVehicles"

function VehiclesPage(){
    const {data} = useVehicles()
    return (
        <div>
            <div>
                <h2 className="font-semibold">Gestão de veiculos</h2>
            </div>
            <div className="bg-white rounded-lg shadow-md flex items-center justify-between p-4 gap-4">
                <div className="w-150 flex items-center gap-4">
                    <InputSearch placeholder='Buscar registro...' type="text" className="h-10 w-100" />
                    <Select>
                        <SelectTrigger className="w-40! h-10!">
                            <SelectValue placeholder="Todos" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectItem value="all">Todos</SelectItem>
                                <SelectItem value="active">Estacionados</SelectItem>
                                <SelectItem value="finished">Saída registrada</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>
                <Button className="h-10">
                    <Plus />
                    Adicionar Veiculo
                </Button>
            </div>
        </div>
    )
}

export default VehiclesPage