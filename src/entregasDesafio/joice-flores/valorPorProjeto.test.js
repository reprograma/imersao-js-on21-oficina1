const { calcularValorTotalProjeto, calcularValorBaseProjeto } = require('./valorProjeto')
const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes')
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('./pacote');

describe('Calcula o valor total do projeto', () => {
  test('Calcula quantas horas serão gastos no projeto', () => {
    const listaTodasFuncionalidades = [
      'formulario',
      'responsividade',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_api_propria'
    ]

    const tempoTotalReal = calcularHorasDeProjeto(listaTodasFuncionalidades)
    const tempoEsperado = 72
    expect(tempoTotalReal).toBe(tempoEsperado)
  })

  test('Verifica a categoria do pacote', () => {
    const horas = 72
    const pacote = calcularPacote(horas)
    expect(pacote).toBe('pacote_intermediario')
  })

  test('Calcula valor base do projeto', () => {
    const valorHora = 26
    const horaGastas = 72
    const valorBase = calcularValorBaseProjeto(horaGastas, valorHora)
    expect(valorBase).toBe(1872)
  })

  test('Calcula valor total do projeto', () => {
    const valorHora = 26
    const listaTodasFuncionalidades = [
      'formulario',
      'responsividade',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_api_propria'
    ]
    const valorTotal = calcularValorTotalProjeto(listaTodasFuncionalidades, valorHora)
    expect(valorTotal).toBe(2246)
  })
})