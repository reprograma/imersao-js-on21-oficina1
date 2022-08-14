const { HORAS_POR_FUNCIONALIDADE, calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');

//Projeto 1
describe("Cálculo de horas por projeto", ()=>{
    test("Cálculo de horas da construção de 1 página", ()=>{
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        const horasParaConstrucaoDePagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        const resultadoEsperado = 8
        expect(horasParaConstrucaoDePagina).toBe(resultadoEsperado)
    
    })
});

//Projeto 2

describe("Cálculo de horas por projeto", ()=>{
    test("test de funcionalidade existente", ()=>{
        const listaDeFuncionalidades = ["criarApi"]
        const horasParaConstrucaoDePagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoDePagina).toBeNaN()

    })

    test("Cálculo de horas da construção de 1 página, com formulário e integração com a api própria", ()=>{
        const listaDeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]
        const horasParaConstrucaoDePagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        const resultadoEsperado = 40
        expect(horasParaConstrucaoDePagina).toBe(resultadoEsperado)
    
    })
});

