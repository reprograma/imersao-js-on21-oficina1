const { calcularHorasDeProjeto } = require('./horasPorProjeto')

describe("Cálculo de Horas de Projeto", () => {
    test("Cálculo de Horas de Construção de 1 página", () => {
        const listaDeFuncionalidades = ["construcao_1_pagina"]

        const resultadoReal = calcularHorasDeProjeto(listaDeFuncionalidades)

        const resultadoEsperado = 8

        expect(resultadoReal).toBe(resultadoEsperado)
    });
    test("Cálculo de Projeto com todas as funcionalidades", () => {
        const listaComTodasFuncionalidades = [
            "setup",
            "formulario",
            "responsividade",
            "otimizacao_seo",
            "construcao_1_pagina",
            "integracao_mailchimp",
            "ssr",
            "integracao_api_propria",
        ];

        const tempoTotalReal = calcularHorasDeProjeto(listaComTodasFuncionalidades)
        const tempoTotalEsperado = 104

        expect(tempoTotalReal).toBe(tempoTotalEsperado)
    });
    test("Lista de funcionalidades inexistente", () => {
        const listaInexistente = ["tralala", "batata",];

        const resultadoReal = calcularHorasDeProjeto(listaInexistente)

        expect(resultadoReal).toBeNaN()
    });


})