import { prisma } from "@/lib/prisma";
import type { FastifyReply, FastifyRequest } from "fastify";
import z from "zod";

export const createPet = async (resquest: FastifyRequest, reply: FastifyReply ) => {
    const createPetBody = z.object({
        nome: z.string(),
        idade: z.number(),
        cor: z.string(),
        porte: z.enum(['Pequeno', 'Medio', 'Grande']),
        raca: z.string(),
        disponivel: z.boolean(),
        org_id: z.string(),
    })

    const { nome, idade, cor, porte, raca, disponivel, org_id } = createPetBody.parse(resquest.body)

    await prisma.pet.create({
        data: {
            nome,
            idade,
            cor,
            porte,
            raca,
            disponivel,
            org_id
        }
    })

    return reply.status(201).send()
}

