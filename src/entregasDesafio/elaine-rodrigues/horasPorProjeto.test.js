const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

describe('Calculo de horas de projeto', () => {
  test('Calculo de horas de contrução de uma pagina', () => {
    const listaDeFuncionalidades = ['construcao_1_pagina', 'construcao_1_pagina', 'otimizacao_seo','integracao_mailchimp', 'formulario']
    const horasParaContrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)

    expect(horasParaContrucaoPagina).toBe(64)
  })

  test('Calcula o valor total do projeto', () => {
    const listaTodasFuncionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'ssr',
      'integracao_api_propria'
    ]

    const tempoTotalReal = calcularHorasDeProjeto(listaTodasFuncionalidades)
    const tempoEsperado = 104

    expect(tempoTotalReal).toBe(tempoEsperado)
  })
})