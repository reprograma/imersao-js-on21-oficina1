const {calcularValorTotalProjeto} = require("../../dominio/calculadora/Projeto/valorProjeto")

const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")
const valorporHora = require("../../dominio/calculadora/Hora/valorHora")
jest.mock("../../dominio/calculadora/Hora/valorHora")
valorporHora.calcularValorPorHora.mockReturnValue(16)
const valorHora =calcularValorPorHora()



describe ("Calcular Valor Projeto",() => {
    test(" 1 funcionalidade" , ()=> {

        const funcionalidades = ["construcao_1_pagina"]
     
        const VLtotal = calcularValorTotalProjeto(funcionalidades, valorHora)
        
        console.log('Valor Total  1 funcionalidade ===', VLtotal)

        expect(calcularValorTotalProjeto(funcionalidades, valorHora))
    });

    test(" 3 funcionalidade" , ()=> {
        const funcionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]
      
        const VLtotal = calcularValorTotalProjeto(funcionalidades, valorHora)
        console.log('Valor Total  3 funcionalidades ===', VLtotal)

        expect(calcularValorTotalProjeto(funcionalidades, valorHora))
    });
})