import express from "express";
import { getAllInfo, getInfoByMaterial, } from "../controllers/infoRecycleController.js";

const infoRoute = express.Router();

infoRoute.get("/recycling-info", (req, res) => {
   const infoList = getAllInfo();
   res.json(infoList);
});

infoRoute.get("/recycling-info/:material", (req, res) => {
   const material = req.params.material;
   const info = getInfoByMaterial(material);
   res.json({ info });
});

export { infoRoute };