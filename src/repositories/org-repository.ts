
import { Prisma,Org } from "@prisma/client";

export interface orgsRepository {
    create: (data: Prisma.OrgCreateInput) => Promise<Org>
}