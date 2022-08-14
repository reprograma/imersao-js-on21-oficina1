const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto');
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularPacote } = require('./pacote');

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");
jest.mock("./pacote");

describe("Calcular valor do projeto com taxas contratuais", ()=>{
  
    test("Calcular valor votal do projeto", ()=>{
      const totalDeHorasPorProjeto = 128;
      const valorHora = 12;
      funcionalidades = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria', 'construcao_1_pagina', 'formulario'];
      calcularHorasDeProjeto.mockReturnValueOnce(128);
      calcularPacote.mockReturnValueOnce('pacote_intermediario');
      const resultadoEsperado = 2304;
      
      expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(resultadoEsperado)
  })
});


   