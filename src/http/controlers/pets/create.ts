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
        org_name: z.string(),
    })

    const { nome, idade, cor, porte, raca, disponivel, org_name } = createPetBody.parse(resquest.body)
    try {
        await prisma.pet.create({
            data: {
                nome,
                idade,
                cor,
                porte,
                raca,
                disponivel,
                org_name
            }
        })    
        return reply.status(201).send()
    } catch (error) {
        console.error(error)
        return reply.status(500).send({message: `${error}`})
    }

}

