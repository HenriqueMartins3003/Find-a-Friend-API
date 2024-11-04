import type { FastifyInstance } from "fastify";
import { createOrg } from "./create";

export const orgRoutes = (app: FastifyInstance) => {

  app.post('orgs', createOrg)
}



