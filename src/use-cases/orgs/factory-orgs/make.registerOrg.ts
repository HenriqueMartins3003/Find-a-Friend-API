import { PrismaOrgRepository } from "@/repositories/prisma/prisma-org-repository";
import { CreateOrgUseCase } from "../create.use-case";

export function makeRegisterOrg() {
    const prismaOrgsRepository =  new PrismaOrgRepository()

    const registerOrgUseCase = new CreateOrgUseCase(prismaOrgsRepository)

    return registerOrgUseCase

}