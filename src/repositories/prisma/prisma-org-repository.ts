import { Org, Prisma } from "@prisma/client";
import { orgsRepository } from "../org-repository";
import { prisma } from "@/lib/prisma";

export class PrismaOrgRepository implements orgsRepository {
    async create(data: Prisma.OrgCreateInput): Promise<Org> {
        throw new Error("Method not implemented.");
        
        /*
        const org = await prisma.org.create({
            data: {
                name: data.name,
                email: data.email,
                password_hash: data.password_hash,
                tel: data.tel,
                role: data.role,
                endereco: {
                    create: {
                        rua: data.endereco.rua,
                        numero: data.endereco.numero,
                        complemento: data.endereco.complemento,
                        cep: data.endereco.cep,
                        bairro: data.endereco.bairro,
                        cidade: data.endereco.cidade,
                        estado: data.endereco.estado
                    }
                }
            }
        })

        return org
    */}
}