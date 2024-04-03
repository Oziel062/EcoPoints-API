import { Router } from "express";
import { createCompany, getAllCompanies } from "../controllers/company.controller.js"

const company = Router()

company.post('/api/createCompany', createCompany);
company.get('/api/companies', getAllCompanies)

export { company }