import { z } from "zod";
import { prisma } from "@/lib/prisma";
import type { FastifyReply, FastifyRequest } from "fastify";
import bcrypt from "bcrypt"



export const createOrg = async (resquest: FastifyRequest, reply: FastifyReply ) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        tel: z.string(),
        role: z.enum(['ADMIN', 'USER']),
        endereco: z.object({
          rua: z.string(),
          numero: z.coerce.number(),
          complemento: z.string(),
          cep: z.coerce.number(),
          bairro: z.string(),
          cidade: z.string(),
          estado: z.enum(['AC', 'AL', 'AP', 'AM', 'BA', 'CE', 'DF', 'ES', 'GO', 'MA', 'MT', 'MS', 'MG', 'PA', 'PB', 'PR', 'PE', 'PI', 'RJ', 'RN', 'RS', 'RO', 'RR', 'SC', 'SP', 'SE', 'TO']),
        }),
      })

      const { name, email, password, tel, role, endereco } = bodySchema.parse(resquest.body)
      const hashedPassword = await bcrypt.hash(password, 6)

      await prisma.org.create({
        data: {
            name: name,
            email: email,
            password_hash: hashedPassword,
            tel: tel,
            role: role,
            endereco: {
              create: {
                rua: endereco.rua,
                numero: endereco.numero,
                complemento: endereco.complemento,
                cep: endereco.cep,
                bairro: endereco.bairro,
                cidade: endereco.cidade,
                estado: endereco.estado,
              },
            }
        }
    })   

    return reply.status(201).send()
    
  } catch (error) {
    console.error(error)
    return reply.status(500).send({message: `${error}`})    
  }
        
}