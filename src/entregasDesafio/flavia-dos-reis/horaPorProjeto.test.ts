const{calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

const listaDeFuncionalidades = ['construcao_1_pagina','integracao_api_propria', 'formulario']

describe('Cálculo de horas de projeto', () => {
  test('Cálculo de horas para construção de 1 página', () => {
    const listaDeFuncionalidades=['construcao_1_pagina']
    console.log(`Minha lista de funcionalidades é ${listaDeFuncionalidades}.`);
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    console.log(horasParaConstrucaoPagina)

    expect (horasParaConstrucaoPagina).toBe(8);
    
  })

  test("Cálculo do projeto com todas as funcionalidades", () => {
    const listaComTodasFuncionalidades = [
      "setup",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "ssr",
      "integracao_api_propria",
    ];
    const  tempoTotalReal = calcularHorasDeProjeto(listaComTodasFuncionalidades)
    const tempoTotalEsperado = 104

    expect(tempoTotalReal).toBe(tempoTotalEsperado)
  })
})