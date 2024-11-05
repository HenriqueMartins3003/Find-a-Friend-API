import { orgRoutes } from "@/http/controlers/orgs/routes";
import { petRoutes } from "@/http/controlers/pets/routes";
import fastify from "fastify";

export const app = fastify();

app.register(orgRoutes);
app.register(petRoutes);

