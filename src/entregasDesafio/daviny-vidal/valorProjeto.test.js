const {calcularValorTotalProjeto, calcularValorBaseProjeto} = require('./valorProjeto')
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

describe("Valor total do Projeto", () => {

    test("Calcular Hora de Projeto", ()=>{
        const listaDeFuncionalidade = ["integracao_api_propria"];
        console.log("Funcionalidade:", listaDeFuncionalidade )
        const horasDeProjeto = calcularHorasDeProjeto(listaDeFuncionalidade)
        console.log("hora de projeto:", horasDeProjeto )
        expect(horasDeProjeto).toBe(16);
    });

    test("calcular Pacote", ()=>{
        const horas = 104;
        console.log("horas:", horas)
        const pacote = calcularPacote(horas)
        expect(pacote).toBe("pacote_premium")
    });

    test("Calcular valor base => 6 * 211 ", ()=>{
        const valorHora = 6;
        console.log("valor horas:", valorHora)
        const totalDeHorasPorProjeto = 211;
        console.log("total de horas por projeto", totalDeHorasPorProjeto)
        const ValorBaseProjeto = calcularValorBaseProjeto(totalDeHorasPorProjeto,valorHora)
        expect(ValorBaseProjeto).toBe(1266);
    });

    test("Calcula valor total do projeto", () => {
        const listaDeFuncionalidades = ["construcao_1_pagina", "construcao_1_pagina",  "integracao_api_propria"];
        console.log("lista de funcionalidade escolhida para o projeto", listaDeFuncionalidades)
        const valorHora = 6;
        console.log("valor por hora", valorHora)
        const TotalValorProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)
        expect(TotalValorProjeto).toBe(211);
    })
})