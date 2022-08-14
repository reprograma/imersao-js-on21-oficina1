const { TAXAS_CONTRATUAIS_POR_PACOTE } = require('../../dominio/calculadora/constantes/constantes')
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto');
const { calcularValorTotalProjeto, calcularValorBaseProjeto } = require('./valorProjeto')
const { calcularPacote } = require('./pacote');

describe("Valor Total do Projeto", () =>{

  test('Cálcula horas do projeto', () => {
    const listaTodasFuncionalidades = [
      'setup',
      'formulario',
      'responsividade',
      'otimizacao_seo',
    ]
  
    const tempoTotalReal = calcularHorasDeProjeto(listaTodasFuncionalidades)
    const tempoEsperado = 56
    expect(tempoTotalReal).toBe(tempoEsperado);
  })
  test('Verifica o tipo de Pacote', () => {
      const horaProjeto = 75
      const categorias = calcularPacote(horaProjeto)

      expect(categorias).toBe("pacote_intermediario")
  })


  test('Cálcular o valor base do Pacote', () => {
    const horaProjeto = 75
    const valorHora = 15
    const valorBase = calcularValorBaseProjeto(horaProjeto, valorHora)

    expect(valorBase).toBe(1125)
})

test('Cálcular o valor Total do Pacote', () => {
  const listaTodasFuncionalidades = [
    'setup',
    'formulario',
    'responsividade',
    'otimizacao_seo',
  ]
  const valorHora = 15
  const valorTotal = calcularValorTotalProjeto(listaTodasFuncionalidades, valorHora)

  expect(valorTotal).toBe(1008)

})

})
