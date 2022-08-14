const {calcularValorTotalProjeto, calcularValorBaseProjeto} = require('./valorProjeto')
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

describe("Valor total do Projeto", () => {

    test("Calcular Hora de Projeto", ()=>{
        const listaDeFuncionalidades = ["integracao_api_propria"];
        const horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasDeProjeto).toBe(16);
    });

    test("calcular Pacote", ()=>{
        const horas = 104;
        const pacote = calcularPacote(horas)
        expect(pacote).toBe("pacote_premium")
    });

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