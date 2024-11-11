import { Prisma, Org, Role } from "@prisma/client";
import { orgsRepository } from "../org-repository";
import { randomUUID } from "node:crypto";

export class InMemoryOrgRepository implements orgsRepository {
    public items: Org[] = [];
    
   async create(data: Prisma.OrgCreateInput): Promise<Org> {
        const org = {
            id: randomUUID(),
            name: data.name,
            email: data.email,
            password_hash: data.password_hash,
            tel: data.tel,
            role: data.role ?? Role.USER,
            created_at: new Date(),
            endereco: data.endereco,
            endereco_id: randomUUID()
        }

         this.items.push(org)

        return org
    }
    async findUnique(data: string): Promise<Org | null> {
        const org = this.items.find(org => org.email === data)
        return org ?? null
    }
    
   
  

}