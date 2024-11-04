import { prisma } from "@/lib/prisma";
import type { FastifyReply, FastifyRequest } from "fastify";



export const createOrg = async (resquest: FastifyRequest, reply: FastifyReply ) => {
    
        await prisma.org.create({
            data: {
                name: "Org Example",
                email: "org@example.com",
                password_hash: "hashed_password",
                tel: "123456789",
                role: "USER",
                endereco: {
                  create: {
                    rua: "Rua Exemplo",
                    numero: 123,
                    complemento: "Apt 101",
                    cep: 12345678,
                    bairro: "Bairro Exemplo",
                    cidade: "Cidade Exemplo",
                    estado: "SP",
                  },
                }
            }
        })   
    
}