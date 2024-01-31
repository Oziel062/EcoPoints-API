import express from "express";
import { infoRoute } from "./routes/infoRecicleRoutes.js";
import { companyRoute } from "./routes/companyRecycleRoutes.js";

const server = express();
const port = 4000;


server.use(express.json());
server.use(infoRoute);
server.use(companyRoute);

server.listen(port, () => {
    console.log(`Api - Planeta Limpo rodando na porta ${port}🌲🌎`)
});