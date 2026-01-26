import prisma from "../../config/database";
import { ParkingRecordStatus } from "../../generated/prisma/enums";
import { AppError } from "../../utils/errors";
import GetActivePriceConfigService from "../priceConfig/GetActivePriceConfig.service";

interface exitParkingRecordInput {
    id: string;
    userId: string;
}
class ExitParkingRecordService {
    private GetActivePriceConfigService = new GetActivePriceConfigService();

    async execute(input: exitParkingRecordInput) {
        const parkingRecord = await prisma.parkingRecord.findFirst({
            where: {
                id: input.id,
                status: "ACTIVE"
            }
        })
        if (!parkingRecord) {
            throw new AppError("Vehicle isn't parking here now.")
        }
        const activePriceConfig = await this.GetActivePriceConfigService.execute();
        const now = new Date();
        
        const horaMs = 1000 * 60 * 60;
        // calcula tempo de permanencia em ms
        const timeParkedMs = now.getTime() - parkingRecord.createdAt.getTime();
        //calcula horas de permanencia (minimo 1)
        const hoursParked = Math.max(1, timeParkedMs / horaMs);
        const firstHourPrice = activePriceConfig?.firstHourPrice;
        const additionalHourPrice = activePriceConfig!.additionalHourPrice;

        let totalValue = firstHourPrice?.toDecimalPlaces(2);

        if (hoursParked > 1) {            
            if (activePriceConfig?.permitFractionalTime && activePriceConfig!.additionalHourPrice) {
                // com fração -> identificar fração -> seta um multiplicador (60/caso)
                // calcula parte fracionária da permanencia
                const fraction = hoursParked - Math.floor(hoursParked)
                //seta multiplicador como 1 por garantia
                let fractionMultiplier = 1
                switch (activePriceConfig.fractionalTime) {
                    case "MINUTES_05":
                        //seta multiplicador como 12 (60/5m)
                        fractionMultiplier = 12
                        break;
                    case "MINUTES_10":
                        fractionMultiplier = 6
                        break;
                    case "MINUTES_15":
                        fractionMultiplier = 4
                        break;
                    case "MINUTES_30":
                        fractionMultiplier = 2
                        break;
                    case "NONE":
                        // nao ha fracao -> arredondar pra cima o tempo
                        fractionMultiplier = 1
                    default:
                        fractionMultiplier = 1
                        break;
                }
                // calcula quantas fracoes de hora ocorreram
                const fractionHour = Math.ceil(fraction * fractionMultiplier);                
                // calcula soma das fracoes com as horas adicionais (convertendo para fracoes)
                const valueFractionHour = (additionalHourPrice!.times(fractionHour)).div(fractionMultiplier)
                // calcula o valor das horas adicionais
                const valueAdditionalHours = (additionalHourPrice.times(Math.floor(hoursParked-1))).plus(valueFractionHour)
                // calcula valor total (1a hora + hs adicionais)
                totalValue = (firstHourPrice?.plus(valueAdditionalHours))?.toDecimalPlaces(2)

            } else {
                totalValue = firstHourPrice?.plus(additionalHourPrice.times(Math.ceil(hoursParked - 1)))?.toDecimalPlaces(2)
            }
            
        }

        await prisma.parkingRecord.update({
            where: {
                id: input.id
            },
            data: {
                status: ParkingRecordStatus.FINISHED,
                exitUserId: input.userId,
                exitAt: now,
                totalValue,
            }
        })
        return;
    }
}
export default ExitParkingRecordService;
