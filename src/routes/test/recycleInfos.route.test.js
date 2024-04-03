import supertest from "supertest"
import { app } from "../../server.js"
import { RecycleInfoEntity } from "../../entities/RecyclingInfo.Entity.js"

afterEach(async () => {
  RecycleInfoEntity.destroy({
    truncate: true
  })
})

test("POST- /createRecycleInfo CRIA UMA NOVA INFORMAÇÃO", () => {
  return supertest(app)
    .post("/createRecycleInfo")
    .send({
      title: "Papel",
      content: "Comece picando os papéis que serão reciclados, coloque-os em uma bacia rasa e cubra-os com água. Deixe de molho por, pelo menos, 24 horas. Após o tempo de molho, adicione a mistura de papel com água no liquidificador e adicione mais água seguindo a proporção de para cada uma parte de papel adicione três partes de água. Bata bem no liquidificador.Para cada litro da mistura coloque 8 colheres de amido de milho e 20 gotas do limpador.Transfira a mistura para a bacia funda com água até a metade e misture bem.Coloque a peneira pelas laterais da bacia e vá até o fundo, subindo até formar uma camada de papel sobre a peneira, então coloque a peneira em uma superfície inclinada para escorrer a água e cubra com o pano para secar bem.Quando tiver escorrido bastante, vire a peneira em um outro pano ou jornal seco.Deixe secar por um dia com livros por cima pressionando"
    })
    .expect(201)
    .then((response) => {
      expect(response.body.message).toEqual(
        "Informação criada com sucesso!"
      )
    })
})

test("GET /infos - Mostra todas as informações", () => {
  return supertest(app)
    .get("/infos")
    .expect(200)
})