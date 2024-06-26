import { CompanyEntity } from "../entities/Company.Entity.js";

export class CompanyService {
    async createCompanyService(name, street, municipality, zipCode, neighborhood, state, companyImg) {
        try {
            await CompanyEntity.sync();
            const newCompany = await CompanyEntity.create({
                name, street, municipality, zipCode, neighborhood, state, companyImg
            });
            return newCompany;
        } catch (error) {
            return error;
        }
    };

    async getAllCompanies() {
        const companies = await CompanyEntity.findAll();
        return companies;
    };


    async getCompanyByState(state) {

        const companiesByState = await CompanyEntity.findAll({
            where: {
                state
            }
        })
        return companiesByState
    }
}
