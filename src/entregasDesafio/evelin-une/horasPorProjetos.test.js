const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

//const listaDeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]

describe("Cálculo de Horas de Projeto", ()=> {
    test("Cálculo de Horas de Construção de 1 página", ()=> {
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        const horasParaConstrucaoSite = calcularHorasDeProjeto(listaDeFuncionalidades);

        expect(horasParaConstrucaoSite).toBe(8);
    })

    test("Calcular projeto com todas as funcionalidades", () => {
        const listaComTodasFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria',
        ];

        const tempoTotalReal = calcularHorasDeProjeto(listaComTodasFuncionalidades)
        const tempoTotalEsperado = 104

        expect(tempoTotalReal).toBe(tempoTotalEsperado)
    });

})

