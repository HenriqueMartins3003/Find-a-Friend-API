// biome-ignore lint/style/useImportType: <explanation>
import  { FastifyInstance } from "fastify"
import { createPet } from "./create"

export async function petRoutes (app: FastifyInstance) {

    app.post('/pets', createPet)
}