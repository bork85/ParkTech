import prisma from "../../config/database";
import bcrypt from "bcrypt";
import { UserRole } from "../../generated/prisma/enums";

interface CreateUserInput {
    name: string,
    email: string,
    password: string,
    role?: UserRole
}

class CreateUserService {
    async execute(input: CreateUserInput) {
        const existUser = await prisma.user.findFirst({
            where: {
                email: input.email,
            },
        });
        if(existUser){
            //console.log("User with this email already exists.")
            throw new Error("User with this email already exists.");
        }
        //console.log("DADOS DO SERVICO - INPUT:", input)
        const hashPassword = await bcrypt.hash(input.password, 8);
        const user = await prisma.user.create({ 
            data: { 
                name: input.name, 
                email: input.email, 
                password: hashPassword, 
                role: input.role 
            }
        });
        return;
    }
    //async execute({ name, email, password, role }: CreateUserInput) {}
}

export default new CreateUserService();
