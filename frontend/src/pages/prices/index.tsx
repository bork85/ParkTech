import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateToDMY, getCurrency, GetPriceStatus } from "@/utils/formatters";
import { usePrices } from "@/hooks/prices/usePrices";
import { CreatePriceDialog } from "@/components/prices/dialogs/CreatePriceDialog";
import { EditPriceDialog } from "@/components/prices/dialogs/EditPriceDialog";

const tableColumns = ["VALOR 1a HORA", "VALOR HORAS ADICIONAIS", "FRAÇÕES PERMITIDAS", "STATUS", "DATA CRIAÇÃO", "AÇÕES"];

function PricesPage() {
  const { data, isLoading } = usePrices();
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-4 text-xl">Gestão de Preços</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-end p-4 gap-4">
       <CreatePriceDialog />
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
            {isLoading &&
              [...Array(5)].map((_, i) => (
                <tr key={i} className="border-b border-muted">
                  {[...Array(6)].map((_, j) => (
                    <td key={j} className="p-4">
                      <Skeleton className="h-4 rounded" />
                    </td>
                  ))}
                </tr>
              ))}
            {!isLoading &&
              data.map((price) => (
                <TableRow key={price.id} className={`h-6 shadow-sm ${price.isActive ? "bg-blue-700/20" : "text-gray-500"}`}
                >
                  <TableCell className="text-center">{getCurrency(price.firstHourPrice)}</TableCell>
                  <TableCell className="text-center">{getCurrency(price.aditionalHourPrice)}</TableCell>
                  <TableCell className="text-center">{price.fractionsPermitted}</TableCell>
                  <TableCell className="text-center flex items-center justify-center">
                    {
                      <div
                        className={`text-center px-2 py-1 mt-1 rounded-sm border-2 font-semibold w-30 h-fit text-[10px] 
                            ${price.isActive ? "bg-primary/60 text-white  border-primary" : "bg-gray-300/70 text-gray-500 border-gray-500/60"}`}
                      >
                        {GetPriceStatus(price.isActive)}
                      </div>
                    }
                  </TableCell>                  
                  <TableCell className="text-center">{formatDateToDMY(price.createdAt)}</TableCell>
                  <TableCell className="text-center">
                    <EditPriceDialog editingPrice={price} />
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default PricesPage;
