# Backend Definitions

## TECNOLOGIAS DO PROJETO

    - Nodejs
    - Express
    - Typescript
    - Prisma
    - PostgreSQL
    - Docker
    - Zod
    - bcript
    - JsonWebToken

## ESTRUTURA DE PASTAS RECOMENDADA (Backend)

/src
|-- /config
| ╰-- database.ts
|
|-- app.ts
|-- server.ts
|
|-- /routes
| |-- index.ts
| ╰-- parking.ts
|
|-- /controllers
| |-- parking
| ╰-- createVehicleController.ts
|
|-- /services
| |-- parking
| ╰-- createVehicleService.ts
|
|-- /schemas
| |-- parking
| |-- createVehicleSchema.ts
| ╰-- UpdateVehicleSchema.ts
|
|-- /middlewares
| ╰-- validateSchema.ts
|
|-- /utils
| ╰-- formatter.ts
|
|-- /types
| ╰-- parking.types.ts
|
╰-- .env

## DESCRIÇÃO DAS PASTAS

- /config: Arquivos de configuração do projeto, como a configuração do banco de dados.

    Ex.: database.ts

        import {PrismaClient} from "@prisma/client";
        export const prisma = new PrismaClient();

- app.ts : Arquivo principal onde a aplicação Express é configurada(montagem middlewares, rotas e retornos globais).

- server.ts : Arquivo responsável por iniciar o servidor da aplicação.

- /routes: Definição das rotas da aplicação.

    Ex.: parking.ts

        import {Router} from "express";
        import {validateSchema} from "../middlewares/validateSchema.ts";
        import {createVehicleSchema} from "../schemas/parking/createVehicle.schema.ts";
        import {createVehicleController} from "../controllers/parking/createVehicle.controller.ts";

        const router = Router();

        router.post("/", validateSchema(createVehicleSchema), new createVehicleController().handle);

        export default router;

- /controllers: Controladores que recebem as requisições, chamam os serviços e retornam as respostas. Cada modulo tem sua pasta e cada responsabilidade é um arquivo separado.
    Ex.: createVehicle.controller.ts
        import {Request, Response} from "express";
        import {createVehicleService} from "../../services/parking/createVehicle.service.ts";
        export class createVehicleController {
            async handle(req: Request, res: Response) {
                const { plate } = req.body;
                const vehicle = await new createVehicleService().execute({ plate });
                return res.status(201).json(vehicle);
            }
        }

- /services: Lógica de negócio da aplicação, onde as operações principais são realizadas.
     Ex.: createVehicle.service.ts
        import { prisma } from "../../config/database.ts";
        export class createVehicleService {
            async execute({ plate }: { plate: string }) {
                const vehicle = await prisma.vehicle.create({
                    data: { plate },
                });
                return vehicle;
            }
        }

- /schemas: Definições de validação de dados utilizando Zod.
    Ex.: createVehicleSchema.ts
        import { z } from "zod";
        export const createVehicleSchema = z.object({
            plate: z.string().min(7, "Plate is required"),
            brand: z.string(),
            model: z.string(),
        });

- /middlewares: Middlewares personalizados para a aplicação, como validação de esquemas.
    Ex.: validateSchema.ts
        import { Request, Response, NextFunction } from "express";
        import { ZodSchema } from "zod";

        export function validateSchema(schema: ZodSchema) {
            return (req: Request, res: Response, next: NextFunction) => {
                try {
                    schema.parse(req.body);
                    next();
                } catch (error) {
                    return res.status(400).json({ error: error.errors });
                }
            };
        } 

- /utils: Funções utilitárias que podem ser usadas em diferentes partes do projeto.

- /types: Definições de tipos TypeScript para garantir tipagem estática e segurança no código.

## FLUXO DE REQUESTS

Route -> Middleware Zod -> Controller -> Service -> Prisma -> DB
