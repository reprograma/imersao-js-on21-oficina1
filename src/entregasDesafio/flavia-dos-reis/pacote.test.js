const{calcularPacote} = require("../../entregasDesafio/flavia-dos-reis/pacote")
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")
horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)

describe("Calcular pacote", () => {
  /* beforeEach(() => {
    horasPorProjeto.calcularHorasDeProjeto.mockClear()
  } ) */

  test('Qual pacote do projeto com todas a funcionalidades -104h', () =>{
    const horas = 104
    
    expect(calcularPacote(horas)).toBe("pacote_premium")
  });

  test('Calcular pacote com 50h de projeto', () => {
    /* const funcMock = jest.mock()
    const jestFn = jest.fn( )
    console.log('mock=>>>', funcMock);
    console.log('jestFn =>>>', jestFn);
    console.log('horasPorProjeto =>>>', horasPorProjeto.calcularHorasDeProjeto) */

    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)

    const horas = calcularHorasDeProjeto()
    console.log('horas =>>>', horas)

    expect(calcularPacote(horas)).toBe("pacote_basico")
  })

  test ("100h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)
    const horas = calcularHorasDeProjeto()
    console.log('horas =>>>', horas)

    expect(calcularPacote(horas)).toBe("pacote_intermediario")
  })
})