const { calcularValorTotalProjeto } = require("./valorProjeto");
const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");
const valorHora = require("../../dominio/calculadora/Hora/valorHora");

jest.mock("../../dominio/calculadora/Hora/valorHora");

describe("Cálculo Valor do Projeto", () => {
  test("O Valor total do projeto com todas as funcionalidades e R$6/Hora é 936", () => {
    const listaDeFuncionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    valorHora.calcularValorPorHora.mockReturnValueOnce(6);
    const valorPorHora = calcularValorPorHora();
    const resultadoObtido = calcularValorTotalProjeto(
      listaDeFuncionalidades,
      valorPorHora
    );
    const resultadoEsperado = 936;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("O Valor total do projeto com uma funcionalidade de setup e R$6/Hora é 53", () => {
    const listaDeFuncionalidades = ["setup"];
    valorHora.calcularValorPorHora.mockReturnValueOnce(6);
    const valorPorHora = calcularValorPorHora();
    const resultadoObtido = calcularValorTotalProjeto(
      listaDeFuncionalidades,
      valorPorHora
    );
    const resultadoEsperado = 53;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("O Valor total do projeto com nenhuma funcionalidade é 0", () => {
    const listaDeFuncionalidades = [];
    valorHora.calcularValorPorHora.mockReturnValueOnce(10);
    const valorPorHora = calcularValorPorHora();
    const resultadoObtido = calcularValorTotalProjeto(
      listaDeFuncionalidades,
      valorPorHora
    );
    const resultadoEsperado = 0;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("O Valor total do projeto com valorHora = 0 é 0", () => {
    const listaDeFuncionalidades = ["setup"];
    valorHora.calcularValorPorHora.mockReturnValueOnce(0);
    const valorPorHora = calcularValorPorHora();
    const resultadoObtido = calcularValorTotalProjeto(
      listaDeFuncionalidades,
      valorPorHora
    );
    const resultadoEsperado = 0;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});
