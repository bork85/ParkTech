import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { InputSearch } from "@/components/ui/input-search";
import { Plate } from "@/components/commom/plate";
import { useVehicles } from "../../hooks/vehicles/useVehicles";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  formatDate,
  calcPermanency,
  getVehicleStatus,
  plateFormat,
} from "@/utils/formatters";
import { Skeleton } from "@/components/ui/skeleton";
import { CreateVehicleDialog} from "@/components/vehicles/dialogs/CreateVehicleDialog";
import { EditVehicleDialog } from "@/components/vehicles/dialogs/EditVehicleDialog";
import { ExitVehicleDialog } from "@/components/vehicles/dialogs/ExitVehicleDialog";

const tableColumns = [
  "PLACA",
  "MODELO",
  "COR",
  "ENTRADA",
  "PERMANÊNCIA",
  "STATUS",
  "AÇÕES",
];

function VehiclesPage() {
  const { data, isLoading } = useVehicles();
  //console.log(data)
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-4 text-xl">Gestão de veiculos</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-between p-4 gap-4">
        <div className="w-150 flex items-center gap-4">
          <InputSearch
            placeholder="Buscar registro..."
            type="text"
            className="h-10 w-100"
          />
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
        <CreateVehicleDialog />
      </div>
      <div className="mt-4">
        <Table>
          <TableHeader className="rounded ">
            <TableRow className="bg-ring/50 shadow-sm rounded-md">
              {tableColumns.map((column, index) => (
                <TableHead
                  key={index}
                  className="text-center w-25 text-[12px] font-semibold text-muted-foreground px-4 py-3"
                >
                  {column}
                </TableHead>
              ))}
            </TableRow>
          </TableHeader>
          <TableBody>
            {isLoading && (
                [...Array(5)].map((_, i) => (
                    <tr key={i} className="border-b border-muted" >
                        {[...Array(7)].map((_, j) => (
                            <td key={j} className="p-4">
                                <Skeleton className="h-4 rounded" />
                            </td>
                        ))}
                    </tr>
                ))
            )}
            {!isLoading &&
              data.map((vehicle) => (
                <TableRow
                  key={vehicle.id}
                  className={`h-6 uppercase shadow-sm ${vehicle.status === "FINISHED" ? "text-muted-foreground bg-muted-foreground/10" : ""}`}
                >
                  <TableCell className="flex justify-center">
                    {
                      <Plate
                        plateText={plateFormat(vehicle.plate)}
                        size={"sm"}
                      />
                    }
                  </TableCell>
                  <TableCell className="text-center">{vehicle.model}</TableCell>
                  <TableCell className="text-center">{vehicle.color}</TableCell>
                  <TableCell className="text-center">
                    {formatDate(vehicle.createdAt)}
                  </TableCell>
                  <TableCell className="text-center">
                    {calcPermanency(vehicle.createdAt, vehicle.exitAt)}
                  </TableCell>
                  <TableCell className="flex items-center justify-center">
                    {
                      <div
                        className={`text-center px-2 py-1 rounded-sm border-2 font-semibold w-30 h-fit text-[10px] ${vehicle.status === "ACTIVE" ? " bg-green-200/80 text-green-700  border-green-500" : "bg-gray-400 text-muted border-gray-500/80"}`}
                      >
                        {getVehicleStatus(vehicle.status)}
                      </div>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {
                      <div className="flex justify-evenly">
                        <EditVehicleDialog editingVehicle={vehicle}/>
                        <ExitVehicleDialog exitingVehicle={vehicle}/>                      
                      </div>
                    }
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

export default VehiclesPage;
