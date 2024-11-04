import fastify from "fastify";
import { orgRoutes } from "./http/controlers/orgs/routes";

export const app = fastify();

app.register(orgRoutes)