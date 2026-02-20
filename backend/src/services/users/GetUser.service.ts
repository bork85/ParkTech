import prisma from "../../config/database";
import bcrypt from "bcrypt";
import { AppError } from "../../utils/errors";

class GetUserService {
    async execute() {
        console.log("chegou ate o service")
        const user = await prisma.user.findMany({
            where: {
                email: { not: "" }
                }
            }
        );
        console.log("executou o service")
        return user;
    }
    //async execute({ name, email, password, role }: GetUserInput) {}
}

export default new GetUserService();
