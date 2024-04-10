import { CompanyService } from "../services/Company.service.js"
import { SUCESS } from "../shared/messages.js";


const instanceCompanyService = new CompanyService();

export async function createCompany(req, res) {
    const { name, street, municipality, zipCode, neighborhood, state, companyImg } = req.body;
    await instanceCompanyService.createCompanyService(name, street, municipality, zipCode, neighborhood, state, companyImg);
    res.status(201)
        .send({ message: SUCESS.CREATED_COMPANY })
};

export async function getAllCompanies(req, res) {
    const companies = await instanceCompanyService.getAllCompanies();
    res.status(200).json({ companies })
}

export async function getCompaniesByState(req,res){
    const {state} = req.params
    const companies = await instanceCompanyService.getCompanyByState(state);
    res.status(200).json({companies})
}
