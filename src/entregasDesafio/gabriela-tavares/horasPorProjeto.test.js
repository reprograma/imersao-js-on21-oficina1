const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("calcular Horas de Projeto", () => {
  it("Deve retornar o valor de horas de Projeto para setup e construcao_1_pagina ", () => {
    const lista = ["setup", "construcao_1_pagina"];
    const horasParaConstrucao = calcularHorasDeProjeto(lista);
    const valorTotalEsperado = 16;
    expect(horasParaConstrucao).toBe(valorTotalEsperado);
  });

  it("Deve retornar NaN ao passar um valor que não contém na lista ", () => {
    const lista = ["valor_Indefinido"];
    const horasParaConstrucao = calcularHorasDeProjeto(lista);
    expect(horasParaConstrucao).toBeNaN();
  });

  it("Deve retornar o valor de horas de Projeto para todos os itens da lista ", () => {
    const listaComTodasAsFuncionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const horasParaConstrucao = calcularHorasDeProjeto(listaComTodasAsFuncionalidades);
    const valorTotalEsperado = 104;
    expect(horasParaConstrucao).toBe(valorTotalEsperado);
  });

});



