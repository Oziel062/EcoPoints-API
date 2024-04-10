import { Router } from "express";
import { createCompany, getAllCompanies, getCompaniesByState } from "../controllers/company.controller.js"

const company = Router()

company.post('/api/createCompany', createCompany);
company.get('/api/companies', getAllCompanies)
company.get('/api/companies/:state', getCompaniesByState )

export { company }