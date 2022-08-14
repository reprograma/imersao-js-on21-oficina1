const { calcularHorasDeProjeto } = require('./horasPorProjeto')
const { calcularPacote } = require('./pacote');
const { calcularValorTotalProjeto } = require('./valorProjeto');
const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')
const constantes = require('../../dominio/calculadora/constantes/constantes')

jest.mock('./valorProjeto')
jest.mock('./horasPorProjeto')
jest.mock('./pacote')
jest.mock('../../dominio/calculadora/Hora/valorHora')
jest.mock('../../dominio/calculadora/constantes/constantes')

describe("Calculo valor total do Projeto", () => {

  afterEach(() => {
    jest.clearAllMocks();
  })

  test("se projeto for do pacote basico", () => {

    const funcionalidadesPedidas = {
      formulario: 16,
      responsividade: 16,
      otimizacao_seo: 16, 
    };
  
    calcularValorPorHora.mockReturnValueOnce(16);
    calcularHorasDeProjeto.mockReturnValue(48);
    calcularPacote.mockReturnValueOnce('pacote_basico');

    const horaValor = calcularValorPorHora();
    const horasProjeto = calcularHorasDeProjeto();
    const tipoPacote = calcularPacote();
    const final = horasProjeto * horaValor;

    console.log('horasProjeto : ', horasProjeto);
    console.log('pacote : ', tipoPacote);
    console.log(final);
    console.log('hora valor : ',horaValor)

    expect(calcularValorTotalProjeto(funcionalidadesPedidas, horaValor)).toBe(final);

  });
  it("se o projeto for do pacote intermediario", () => {

    const valorHora = 12;
    const funcionalidades = ['setup', 'formulario', 'responsividade', 'otimizacao_seo', 'construcao_1_pagina', 'integracao_mailchimp', 'ssr', 'integracao_api_propria', 'construcao_1_pagina', 'formulario'];
    calcularHorasDeProjeto.mockReturnValueOnce(128);
    calcularPacote.mockReturnValueOnce('pacote_intermediario');
    const resultadoEsperado = 2304;

    expect(calcularValorTotalProjeto(funcionalidades, valorHora)).toBe(resultadoEsperado)

  })
  it("se o projeto for do pacote Premium", () => {


  })
});