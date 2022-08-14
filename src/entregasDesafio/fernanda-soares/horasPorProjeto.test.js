const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

// setup: 8,
// formulario: 16,
// responsividade: 16,
// otimizacao_seo: 16,
// construcao_1_pagina: 8,
// integracao_mailchimp: 16,
// ssr: 8,
// integracao_api_propria: 16

describe("Calcular Horas por Projeto", () => {
  test("Hora para construção de responsividade, ssr e integracao_api_propria resulta 40hrs", () => {
    const listaDeFuncionalidades = [
      "responsividade",
      "ssr",
      "integracao_api_propria",
    ];
    const resultadoObtido = calcularHorasDeProjeto(listaDeFuncionalidades);
    const resultadoEsperado = 40;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("Horas para construção de todas as funcionalidades resulta 104hrs", () => {
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
    const resultadoObtido = calcularHorasDeProjeto(listaDeFuncionalidades);
    const resultadoEsperado = 104;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("Horas para construção uma funcionalidade que não está na lista resulta NaN", () => {
    const listaDeFuncionalidades = ["funcionalidade_inexistente"];
    const resultadoObtido = calcularHorasDeProjeto(listaDeFuncionalidades);
    const resultadoEsperado = NaN;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });

  test("Horas para construção de nenhuma funcionalidade resulta 0", () => {
    const listaDeFuncionalidades = [];
    const resultadoObtido = calcularHorasDeProjeto(listaDeFuncionalidades);
    const resultadoEsperado = 0;
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});
