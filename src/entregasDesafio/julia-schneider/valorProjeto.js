const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")

const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")
const valorporHora = require("../../dominio/calculadora/Hora/valorHora")
jest.mock("../../dominio/calculadora/Hora/valorHora")
valorporHora.calcularValorPorHora.mockReturnValue(16)
const valorDaHora = calcularValorPorHora()



describe("Calcular Valor Projeto", () => {
  test("funcionalidade", () => {

    const funcionalidades = ["construcao_1_pagina"]

    const VLtotal = calcularValorTotalProjeto(funcionalidades, valorDaHora)
    //console.log('Valor Total  1 funcionalidade ===', VLtotal)

    expect(calcularValorTotalProjeto(funcionalidades, valorDaHora))
  });

  test("funcionalidades", () => {
    const funcionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]

    const VLtotal = calcularValorTotalProjeto(funcionalidades, valorDaHora)
    //console.log('Valor Total  3 funcionalidades ===', VLtotal)

    expect(calcularValorTotalProjeto(funcionalidades, valorDaHora))
  });
})