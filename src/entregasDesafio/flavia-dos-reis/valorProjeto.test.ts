const { TAXAS_CONTRATUAIS_POR_PACOTE } = require ('../../entregasDesafio/flavia-dos-reis/constantes.js')
const { calcularValorTotalProjeto } = require ('../../entregasDesafio/flavia-dos-reis/valorProjeto.js');
const { calcularPacote } = require ('../../entregasDesafio/flavia-dos-reis/pacote.js')

/* jest.mock("../../dominio/calculadora/Projeto/valorProjeto");

describe('Cálculo do valor do projeto', () =>{

  test ('Deve retonar o valor base do projeto')
  valorProjeto.calcularValorBaseProjeto.mockReturnValueOnce();
  const valor
  expect(calcularValorBaseProjeto(horas))
}) */

describe('Cálculo do valor base do projeto', () =>{
  test ('Deve retornar o valor base de um projeto básico com a taxa contratual(10%)',() => {
    const funcionalidades = ['setup']
    const valorHora = 24
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(211)
  });

  test ('Deve retornar o valor base de um projeto intermediário com a taxa contratual(12%)', () => {
    const funcionalidades = [
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "integracao_api_propria",
    ]
    const valorHora = 24
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(1935)
  });

  test ('Deve retornar o valor base de um projeto premium com a taxa contratual(15%)',() => {
    const funcionalidades = [
      "setup",
      "ssr",
      "formulario",
      "responsividade",
      "otimizacao_seo",
      "construcao_1_pagina",
      "integracao_mailchimp",
      "integracao_api_propria",
    ]
    const valorHora = 24
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(2870)
  });

  test ('Deve retornar valor inexistente se valor hora for zero',() => {
    const funcionalidades = ["setup"]
    const valorHora = 0
    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).not.toBeNaN()
  });
})