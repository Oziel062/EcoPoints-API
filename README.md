## 🤓Visão Geral
Esta API foi desenvolvida em **JavaScript/Node.js.** Basicamente é uma API que contém os locais das empresas de reciclagem como: **Nome, Rua, Cep, Município e Estado e as Imagens das mpresas** e contém informações sobre **como reciclar determinado tipo de lixo**. Foi utilizado Express para o roteamento e manipulação de requisições HTTP, e Postgresql como banco de dados.


## 🖥️Endpoints

### Criando uma empresa

- **Endpoint**: `/api/createCompany`
- **Metodo HTTP**: POST
- **Descrição**: Cria uma nova empresa

#### Parâmetros de Requisição

- **name**: Nome da empresa (máximo 50 caracteres)
- **street**: Rua da Empresa (maximo 50 caracteres)
- **zipCode**: Cep da empresa (8 caracteres)
- **municipality**: Município da empresa (máximo 50 caracteres)
- **neighborhood**: Bairro da empresa (máximo 50 caracteres)
- **state**: Estado onde a empresa está situada (2 caracteres ex: SP, GO etc)
- **companyImg**: Link de uma imagem da empresa


### Listando empresas

- **Endpoint**: `/api/companies`
- **Metodo HTTP**: GET
- **Descrição**: Mostra todas as empresas do banco de dados

---
### Criando Informações

- **Endpoint**: `/api/createRecycleInfo`
- **Metodo HTTP**: POST
- **Descrição**: Cria uma nova informação sobre reciclagem

#### Parâmetros de Requisição

- **title**: Título da informação
- **content**: Conteúdo da informação

### Listando informações

- **Endpoint**: `/api/infos`
- **Metodo HTTP**: GET
- **Descrição**: Mostra todas as informações sobre reciclagem