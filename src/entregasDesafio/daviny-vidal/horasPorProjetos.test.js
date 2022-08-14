const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe("Calculo de horas de projeto", ()=>{

    test("Calculo de horas de construcao de uma pagina", ()=>{
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        const horasParaConstrucaoDePagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoDePagina).toBe(8)

    })
})
