import express from "express";
import { getAllCompanies, getCompanyByCep, getCompaniesByState } from "../controllers/companyRecycleController.js";


const companyRoute = express.Router();

companyRoute.get("/companies", (req, res) => {
    const companylist = getAllCompanies();
    res.json(companylist);
 });
 
companyRoute.get("/companies/:state", (req, res) => {
    const state = req.params.state;
    const companiesByState = getCompaniesByState(state);
    res.json({ companiesByState });
 });

companyRoute.get("/company/:cep", (req, res) => {
    const cep = req.params.cep;
    const companyByCep = getCompanyByCep(cep);
    res.json({ companyByCep });
 });
 
 export { companyRoute };