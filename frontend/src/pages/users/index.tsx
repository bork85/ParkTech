import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Skeleton } from "@/components/ui/skeleton";
import { formatDateToDMY } from "@/utils/formatters";
import { useUsers } from "@/hooks/users/useUsers";
import { CreateUserDialog } from "@/components/users/dialogs/CreateUserDialog";

const tableColumns = ["NOME", "E-MAIL", "CARGO", "ADMISSÃO"];

function UsersPage() {
  const { data, isLoading, refetch } = useUsers();
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-4 text-xl">Gestão de usuários</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-end p-4 gap-4">
       <CreateUserDialog onSuccess={refetch}/>
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
                  {[...Array(4)].map((_, j) => (
                    <td key={j} className="p-4">
                      <Skeleton className="h-4 rounded" />
                    </td>
                  ))}
                </tr>
              ))}
            {!isLoading &&
              data.map((user) => (
                <TableRow key={user.id} className={`h-6 shadow-sm`}>
                  <TableCell className="flex justify-center">
                    {user.name}
                  </TableCell>
                  <TableCell className="text-center">{user.email}</TableCell>
                  <TableCell className="flex items-center justify-center">
                    {
                      <div
                        className={`text-center px-2 py-1 rounded-sm border-2 font-semibold w-30 h-fit text-[10px] ${user.role === "ADMIN" ? " bg-primary/60 text-white  border-primary" : "bg-gray-300 text-black border-gray-500/80"}`}
                      >
                        {user.role}
                      </div>
                    }
                  </TableCell>
                  <TableCell className="text-center">
                    {formatDateToDMY(user.createdAt)}
                  </TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
export default UsersPage;
