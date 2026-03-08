import { DashCard } from "@/components/commom/dashCard";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useDashboard } from "@/hooks/dashboard/useDashboard";
import type { DashboardPeriod } from "@/types/dashboard.types";
import { getCurrency } from "@/utils/formatters";
import { Car, DollarSign, SquareArrowRightEnter, SquareArrowRightExit } from "lucide-react";
import { useState } from "react";

function DashboardPage() {
  const [period, setPeriod] = useState<DashboardPeriod>('week')
  const {data, error} = useDashboard({period});
  return (
    <div>
      <div>
        <h2 className="font-semibold text-xl">Dashboard</h2>
        <p className="text-sm text-foreground/70 mb-4">Painel de gestão do estacionamento</p>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-end p-4 gap-4">
        <Select value={period} onValueChange={(value) => setPeriod(value as DashboardPeriod)}>
          <SelectTrigger className="w-40! h-10!">
            <SelectValue placeholder="Hoje" defaultValue="today"/>
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectItem value="today">Hoje</SelectItem>
              <SelectItem value="week">Ultimos 7 dias</SelectItem>
              <SelectItem value="month">Ultimos 30 dias</SelectItem>
              <SelectItem value="year">Ultimos 365 dias</SelectItem>
              <SelectItem value="all">Todo periodo</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="mt-4">
        {error && (
          <div className="bg-red-50 border border-red-200 text-red-500 font-semibold rounded-lg p-4 text-center mb-4">Erro ao carregar dados, tente novamente... </div>
        )}
        <div className="grid grid-cols-4 gap-4">
        <DashCard 
            title="Carros Estacionados"
            value={data?.activeVehicles}
            icon={Car}
            iconColor="text-blue-500"
            bgIconColor="bg-blue-100"
        />
                <DashCard 
            title="Entradas"
            value={data?.totalEntries}
            icon={SquareArrowRightEnter}
            iconColor="text-green-500"
            bgIconColor="bg-green-100"
        />
                <DashCard 
            title="Saidas"
            value={data?.totalExits}
            icon={SquareArrowRightExit}
            iconColor="text-yellow-500"
            bgIconColor="bg-yellow-100"
        />
                <DashCard 
            title="Receita"
            value={getCurrency(data?.totalRevenue || 0)}
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
