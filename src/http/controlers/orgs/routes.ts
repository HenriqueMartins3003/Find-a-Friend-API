import { createOrg } from "./create";
// biome-ignore lint/style/useImportType: <explanation>
import { FastifyInstance } from "fastify";

export async function orgRoutes (app: FastifyInstance) {

  app.post('/orgs', createOrg)
}



