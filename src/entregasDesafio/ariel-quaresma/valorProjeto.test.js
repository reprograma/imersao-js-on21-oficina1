const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")
const { calcularValorPorHora } = require ("../../dominio/calculadora/Hora/valorHora")

//jest.mock("../../dominio/calculadora/Hora/valorHora")

describe("Teste de valor total por projeto - pacote básico - <= 50h totais", () => {
  test("Cálculo de valor total do projeto 1 setup", () => {
    const listaDeFuncionalidades = ['setup']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(255)
  })

  test("Cálculo de valor total do projeto 2 setups", () => {
    const listaDeFuncionalidades = ['setup', 'setup']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(510)
  })

  test("Cálculo valor projeto com 4 funcionalidades diferentes", () => {
    const listaDeFuncionalidades = ['setup', 'ssr', 'formulario', 'responsividade']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(1531)
  })
})

describe("Teste de valor total por projeto - pacote intermediário - >50h e <=100h", () => {

  test("Cálculo de valor total do projeto 5 funcionalidades iguais", () => {
    const listaDeFuncionalidades = ['formulario', 'formulario', 'formulario', 'formulario', 'formulario']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(2784)
  })

  test("Cálculo valor projeto com 4 funcionalidades diferentes", () => {
    const listaDeFuncionalidades = ['setup', 'otimizacao_seo', 'formulario', 'responsividade']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(1949)
  })
})

describe("Teste de valor total por projeto - pacote premium - >100h e <=200h", () => {

  test("Cálculo de valor total do projeto 8 funcionalidades iguais", () => {
    const listaDeFuncionalidades = [
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',
      'integracao_mailchimp',]
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(5568)
  })

  test("Cálculo valor projeto com 8 funcionalidades diferentes", () => {
    const listaDeFuncionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'otimizacao_seo',
      'construcao_1_pagina',
      'integracao_mailchimp',
      'ssr',
      'integracao_api_propria']
    const valorHoraProjeto = calcularValorPorHora(5000)
    
    expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHoraProjeto)).toBe(4524)
  })
})