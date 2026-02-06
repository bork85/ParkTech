import type { StatusParking } from "@/types/vehicles.types";


export function formatDate(dateParam: Date | string){
    const date = typeof dateParam === 'string' ? new Date(dateParam) : dateParam;
    const formater = new Intl.DateTimeFormat('pt-BR', {        
        hour: '2-digit',
        minute: '2-digit',
    }).format(date);

    return formater
}

export function formatDateToDMY(dateParam: Date | string){
    const date = typeof dateParam === 'string' ? new Date(dateParam) : dateParam;
    const formater = new Intl.DateTimeFormat('pt-BR', {        
        day: '2-digit',
        month: '2-digit',
        year: "numeric"
    }).format(date);

    return formater
}

export function getVehicleStatus(status:StatusParking) {
    const options = {
        ["ACTIVE"]: "Estacionado",
        ["FINISHED"]: "Saída Registrada"
    }
    return options[status]
}

export function GetPriceStatus(isActive: boolean) {
    return isActive ? "Ativo" : "Inativo"
}

export function calcPermanency(entry: Date | string, exit?: Date | string | null | undefined) {
    const entryAt = typeof entry === 'string' ? new Date(entry) : entry;
    let exitAt:Date
    if(exit) {
        if (typeof exit === 'string') {
            exitAt = new Date(exit)
        } else if (exit instanceof Date) {
            exitAt = exit
        } else {
            exitAt = new Date();
        }
       
    } else {
        exitAt = new Date();
    }
    const diffMs = exitAt.getTime() - entryAt.getTime();
    const hours = Math.floor(diffMs / (1000 * 60 * 60));
    const minutes = Math.floor((diffMs % (1000 * 60 * 60)) / (1000 * 60));
    const permanency = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}`;

    return permanency
}

export function plateFormat(plate: string) {
    return plate.toUpperCase().replace('-', '');
}

export function getCurrency(value: number) {
    const currency = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    }).format(value)

    return currency
}