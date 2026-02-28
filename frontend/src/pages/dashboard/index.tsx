import { DashCard } from "@/components/commom/dashCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { getCurrency } from "@/utils/formatters";
import { Car, DollarSign, SquareArrowRightEnter, SquareArrowRightExit } from "lucide-react";

function DashboardPage() {
  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">Dashboard</h2>
        <p className="text-sm text-foreground/70 mb-4">Painel de gestão do estacionamento</p>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-end p-4 gap-4">
        <Select>
          <SelectTrigger className="w-40! h-10!">
            <SelectValue placeholder="Hoje" defaultValue="today"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Ultimos 7 dias</SelectItem>
              <SelectItem value="month">Mês atual</SelectItem>
              <SelectItem value="year">Ano atual</SelectItem>
              <SelectItem value="all">Todo periodo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        <div className="grid grid-cols-4 gap-4">
        <DashCard 
            title="Carros Estacionados"
            value={10}
            icon={Car}
            iconColor="text-blue-500"
            bgIconColor="bg-blue-100"
        />
                <DashCard 
            title="Entradas"
            value={10}
            icon={SquareArrowRightEnter}
            iconColor="text-green-500"
            bgIconColor="bg-green-100"
        />
                <DashCard 
            title="Saidas"
            value={10}
            icon={SquareArrowRightExit}
            iconColor="text-yellow-500"
            bgIconColor="bg-yellow-100"
        />
                <DashCard 
            title="Receita"
            value={getCurrency(1000)}
            icon={DollarSign}
            iconColor="text-emerald-500"
            bgIconColor="bg-emerald-100"
        />

      </div>
      </div>
    </div>
  );
}
export default DashboardPage;
