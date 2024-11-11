import { Org, Prisma } from "@prisma/client";
import { orgsRepository } from "../org-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrgRepository implements orgsRepository {
    
    async create(data: Prisma.OrgCreateInput) {
        const org = await prisma.org.create({
            data
        })

        return org;
    }
  
    async findUnique(email: string) {
        const org = await prisma.org.findUnique({
            where: { email }
        })

        return org;

    }        

}
