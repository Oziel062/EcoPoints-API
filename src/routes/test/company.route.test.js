import supertest from "supertest"
import { app } from "../../server.js"
import { CompanyEntity } from "../../entities/Company.Entity.js"

const newPort= 3001



afterEach(async () => {
    CompanyEntity.destroy({
        truncate: true
    })
})

test("POST- /createCompany CRIA NOVO PONTO DE RECICLAGEM", () => {
    return supertest(app)
        .post("/createCompany")
        .send({
            name: "Campo Limpo",
            street: "Rua Jose Geraldo de Mattos, 765",
            municipality: "Taubaté",
            zipCode: "12042055",
            neighborhood: "Piracangagua",
            state: "SP",
            img: "https://campolimpoplasticos.com.br/wp-content/uploads/2018/07/logo-white.png"
        })
        .expect(201)
        .then((response) => {
            expect(response.body.message).toEqual(
                "Empresa de reciclagem criada com sucesso!"
            )
        })
})

test("GET /allCompanies - Mostra todos os pontos de reciclagem", () => {
    return supertest(app)
        .get("/companies")
        .expect(200)
})