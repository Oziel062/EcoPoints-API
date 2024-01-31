let companylist = [
    {
        nome: "Ecoacre",
        endereco: "Rua Terra, Morada do Sol",
        cep: "69901145",
        cidade: "Rio Branco",
        estado: "AC"
    },
    {
        nome: "Eco Verde",
        endereco: "Avenida Raimundo Chaar 230, Centro",
        cep: "69935970",
        cidade: "Assis Brasil",
        estado: "AC"
    },
    {
        nome: "Recicla Alagoas",
        endereco: "Rua Elísio Barbosa, Nova Esperança",
        cep: "57316415",
        cidade: "Arapiraca",
        estado: "AL"
    },
    {
        nome: "Eco Vida",
        endereco: "Rua Muniz Falcão, Jacintinho",
        cep: "57040740",
        cidade: "Maceió",
        estado: "AL"
    },
    {
        nome: "Eco Norte",
        endereco: "Rua Jovino Dinoá, Centro",
        cep: "68900000",
        cidade: "Macapá",
        estado: "AP"
    },
    {
        nome: "Eco Amapá",
        endereco: "Rua José Alencar, Nova Esperança",
        cep: "68904731",
        cidade: "Macapá",
        estado: "AP"
    },
    {
        nome: "Eco Amazonas",
        endereco: "Rua Padre Caleri, Alvorada",
        cep: "69048410",
        cidade: "Manaus",
        estado: "AM"
    },
    {
        nome: "Eco Norte",
        endereco: "Rua Nelson Gonçalves, Boné Azul",
        cep: "68909146",
        cidade: "Macapá",
        estado: "AP"
    },
    {
        nome: "Eco Bahia",
        endereco: "Rua Liberdade, São Lourenço",
        cep: "45602618",
        cidade: "Itabuna",
        estado: "BA"
    },
    {
        nome: "Eco Vida",
        endereco: "Travessa Domingão, Boca da Mata",
        cep: "41347745",
        cidade: "Salvador",
        estado: "BA"
    },
    {
        nome: "Eco Ceará",
        endereco: "Rua Lupercínio Rodrigues, Bom Futuro",
        cep: "60425360",
        cidade: "Fortaleza",
        estado: "CE"
    },
    {
        nome: "Eco Vida",
        endereco: "Rua Santa Margarida, São João do Tauape",
        cep: "60425363",
        cidade: "Fortaleza",
        estado: "CE"
    },
    {
        nome: "Eco Brasília",
        endereco: "Quadra SHIN QI 16, Setor de Habitações Individuais Norte",
        cep: "71530200",
        cidade: "Brasília",
        estado: "DF"
    },
    {
        nome: "Eco Vida",
        endereco: "Quadra QNL 1 Bloco C, Taguatinga Norte (Taguatinga)",
        cep: "72150113",
        cidade: "Brasília",
        estado: "DF"
    },
    {
        nome: "Eco Espírito Santo",
        endereco: "Rua Lorena, Residencial Jacaraípe",
        cep: "29175370",
        cidade: "Serra",
        estado: "ES"
    },
    {
        nome: "Eco Vida",
        endereco: "Rua Virginio Nunes Loureiro, Vila Rica",
        cep: "29175372",
        cidade: "Aracruz",
        estado: "ES"
    },
    {
        nome: "Eco Goiás",
        endereco: "Rua Brasília, Parque das Paineiras",
        cep: "75912167",
        cidade: "Rio Verde",
        estado: "GO"
    },

    {
        nome: "Recicla Goiás",
        endereco: "Rua dos Cateretês, Retiro do Bosque",
        cep: "74990655",
        cidade: "Aparecida de Goiânia",
        estado: "GO"
    },

    {
        nome: "Goiás Reciclagem",
        endereco: "Rua Dona Gercina Borges, Real Grandeza",
        cep: "74988803",
        cidade: "Aparecida de Goiânia",
        estado: "GO"
    },
];

const getCompanyByCep = (cep) => {
    const cepFind = companylist.find(data => data.cep === cep)
    if(cepFind){
        return cepFind;
    }else{
        return "Cep não cadastrado!!"
    }
};

const getCompaniesByState = (estado) => {
    const companyFind = companylist.filter(data => data.estado.toUpperCase() === estado.toUpperCase());
    if(companyFind.length > 0){
        return companyFind;
    }else{
        return "Endereço não cadastrado!!"
    }
};

const getAllCompanies = () => {
    return companylist;
};

export { getAllCompanies, getCompaniesByState, getCompanyByCep };