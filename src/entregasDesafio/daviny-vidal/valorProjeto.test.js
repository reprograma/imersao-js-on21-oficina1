const {calcularValorTotalProjeto, calcularValorBaseProjeto} = require('./valorProjeto')

describe("Valor total do Projeto", () => {

    test("Calcular valor base => 6 * 211 ", ()=>{
        const valorHora = 6;
        const totalDeHorasPorProjeto = 211;
        const ValorBaseProjeto = calcularValorBaseProjeto(totalDeHorasPorProjeto,valorHora)
        expect(ValorBaseProjeto).toBe(1266);
    });

    test("Calcula valor total do projeto", () => {
        const listaDeFuncionalidades = ["construcao_1_pagina", "construcao_1_pagina",  "integracao_api_propria"];
        const valorHora = 6;
        const TotalValorProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(TotalValorProjeto).toBe(211);
    })
})