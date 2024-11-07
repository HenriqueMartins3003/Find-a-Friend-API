import { z } from "zod";
import type { FastifyReply, FastifyRequest } from "fastify";
import { makeRegisterOrg } from "@/use-cases/orgs/factory-orgs/make.registerOrg";
import { EstadoBrasil, OrgRole } from "@/use-cases/orgs/create.use-case";



export const createOrg = async (resquest: FastifyRequest, reply: FastifyReply ) => {
    try {
      const bodySchema = z.object({
        name: z.string(),
        email: z.string(),
        password: z.string(),
        tel: z.string(),
        role: z.nativeEnum(OrgRole),
        endereco: z.object({
          rua: z.string(),
          numero: z.coerce.number(),
          complemento: z.string(),
          cep: z.coerce.number(),
          bairro: z.string(),
          cidade: z.string(),
          estado: z.nativeEnum(EstadoBrasil)
        }),
      })

      const { name, email, password, tel, role, endereco } = bodySchema.parse(resquest.body)
            try {
        const registerOrg = makeRegisterOrg()

        const org = await registerOrg.execute({
          name,
          email,
          password,
          tel,
          role,
          endereco
        })  

        

      } catch (error) {
        
      }


    
      return reply.status(201).send()
    
  } catch (error) {
    console.error(error)
    return reply.status(500).send({message: `${error}`})    
  }
        
}