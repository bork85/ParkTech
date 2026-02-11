import { CreatePriceDialog } from "@/components/prices/dialogs/CreatePriceDialog";
import { Skeleton } from "@/components/ui/skeleton";
import { usePrices } from "@/hooks/prices/usePrices";
import { getCurrency } from "@/utils/formatters";
import { Clock2, DollarSign } from "lucide-react";

function SettingsPage() {
    const {data, isLoading} = usePrices();
    const dataValid = data.filter(price => price.isActive === true)
  return (
    <div>
      <div>
        <h2 className="font-semibold mb-4 text-xl">Configurações Gerais</h2>
      </div>
      <div className="bg-white rounded-lg shadow-md flex items-center justify-end p-4 gap-4">
        <CreatePriceDialog />
      </div>
      <div className="bg-white mt-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-start text-sidebar">
          <DollarSign className="size-5 mt-4 ml-3 " />
          <h3 className="font-bold pt-4 pl-2 text-xl">Preços ativos</h3>
        </div>
        <p className="pl-4 text-muted-foreground text-sm">
          Visualize os valores cobrados pelo estacionamento
        </p>
        <div className="grid grid-cols-3 gap-4 p-4 ">
          <div className="w-full h-30 bg-white border rounded-lg shadow-sm flex flex-col items-center justify-evenly">
            <p>Valor da 1ª Hora:</p>
            {isLoading && (
                <Skeleton className="h-8 w-24 rounded-full"/>
            )}
            {!isLoading && (                
            <p className="font-bold text-2xl text-sidebar">{getCurrency(dataValid[0]?.firstHourPrice)}</p>
            )}
          </div>
          <div className="w-full h-30 bg-white border rounded-lg shadow-sm flex flex-col items-center justify-evenly">
            <p>Valor da Hora Adicional:</p>
            {isLoading && (
                <Skeleton className="h-8 w-24 rounded-full"/>
            )}
            {!isLoading && (                
            <p className="font-bold text-2xl text-sidebar">{getCurrency(dataValid[0]?.aditionalHourPrice)}</p>
            )}
          </div>
          <div className="w-full h-30 bg-white border rounded-lg shadow-sm flex flex-col items-center justify-evenly">
            <p>Frações de Hora Permitidas:</p>
            {isLoading && (
                <Skeleton className="h-8 w-24 rounded-full"/>
            )}
            {!isLoading && (                
            <p className="font-bold text-2xl text-sidebar">{dataValid[0]?.fractionsPermitted}</p>
            )}
          </div>
        </div>
      </div>
      <div className="bg-white mt-4 rounded-lg shadow-sm">
        <div className="flex items-center justify-start text-sidebar">
          <Clock2 className="size-5 mt-4 ml-4" />
          <h3 className="font-bold pt-4 pl-3 text-xl">Regras de tempo</h3>
        </div>
        <p className="pl-4 text-muted-foreground text-sm">
          Configure carência e tolerância de tempo
        </p>
        <div className="w-full p-4 flex flex-col gap-4">
          <div className="bg-white border rounded-lg shadow-sm flex items-center justify-between p-4">
            <div>
              <p className="text-sidebar font-semibold pb-1">
                Carencia de entrada
              </p>
              <p className="text-muted-foreground text-sm">
                Tempo Gratuito após entrada do veículo
              </p>
            </div>
            <p className="pr-10 font-bold text-sidebar text-2xl">5 min</p>
          </div>
          <div className="bg-white border rounded-lg shadow-sm flex items-center justify-between p-4">
            <div>
              <p className="text-sidebar font-semibold pb-1">
                Tolerância de Saída
              </p>
              <p className="text-muted-foreground text-sm">
                Tempo extra após vencimento hora sem cobrança de hora adicional
              </p>
            </div>
            <p className="pr-10 font-bold text-sidebar text-2xl">5 min</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SettingsPage;
