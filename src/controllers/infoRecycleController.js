let infoRecycle = [
    {
        material: 'papel',
        reciclagem: `Comece picando os papéis que serão reciclados, coloque-os em uma bacia rasa e cubra-os com água. Deixe de molho por, pelo menos, 24 horas.
        Após o tempo de molho, adicione a mistura de papel com água no liquidificador e adicione mais água seguindo a proporção de para cada uma parte de papel adicione três partes de água.Bata bem no liquidificador.
        Para cada litro da mistura coloque 8 colheres de amido de milho e 20 gotas do limpador.
        Transfira a mistura para a bacia funda com água até a metade e misture bem.
        Coloque a peneira pelas laterais da bacia e vá até o fundo, subindo até formar uma camada de papel sobre a peneira, então coloque a peneira em uma superfície inclinada para escorrer a água e cubra com o pano para secar bem. Quando tiver escorrido bastante, vire a peneira em um outro pano ou jornal seco. Deixe secar por um dia com livros por cima pressionando`,
    },

    {
        material: 'plastico',
        reciclagem: `Separe o plástico do restante do lixo doméstico e encaminhe para a reciclagem.
        Quando o plástico chega ao centro de reciclagem, ele é separado por tipo e lavado.
        O plástico é então triturado em pedaços pequenos e passa por um processo de granulação ou peletização para formar a matéria-prima para a produção de novos materiais de plástico.
        Se você quiser reutilizar o plástico em casa, uma ideia é transformar garrafas PET em vasos de plantas. Primeiro, limpe bem a garrafa, retire o rótulo e a sujeira. Depois, corte a garrafa ao meio.`,
    },

    {
        material: 'vidro',
        reciclagem: `Separe o vidro do restante do lixo doméstico e encaminhe para a reciclagem.
        Quando o vidro chega ao centro de reciclagem, ele é separado por tipo e lavado.
        O vidro é então triturado em pedaços pequenos e passa por um processo de granulação ou peletização para formar a matéria-prima para a produção de novos materiais de vidro.
        Se você quiser reutilizar o vidro em casa, uma ideia é transformar garrafas de vidro em vasos de plantas. Primeiro, limpe bem a garrafa, retire o rótulo e a sujeira. Depois, corte a garrafa ao meio.`,
    },

    {
        material: 'metal',
        reciclagem: `Separe o metal do restante do lixo doméstico e encaminhe para a reciclagem.
        Quando o metal chega ao centro de reciclagem, ele é separado por tipo e lavado.
        O metal é então triturado em pedaços pequenos e passa por um processo de granulação ou peletização para formar a matéria-prima para a produção de novos materiais de metal.
        Se você quiser reutilizar o metal em casa, uma ideia é transformar latas de alumínio em vasos de plantas. Primeiro, limpe bem a lata, retire o rótulo e a sujeira. Depois, corte a lata ao meio.`
    }


];


function getInfoByMaterial(material) {
    const info = infoRecycle.find(data => data.material === material);
    return info;
};

function getAllInfo() {
    return infoRecycle;
};

export { getAllInfo, getInfoByMaterial };