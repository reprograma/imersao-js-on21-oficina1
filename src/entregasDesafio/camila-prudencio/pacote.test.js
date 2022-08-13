const { calcularPacote } = require("../camila-prudencio/pacote")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const { calcularHorasDeProjeto } = require("./horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular Pacote", () => {
  beforeEach(() => {
    horasPorProjeto.calcularHorasDeProjeto.mockClear()
  })

  test.skip("Qual o pacote do projeto com todas as funcionalidades - 140h", () => {
    const horas = 104

    expect(calcularPacote(horas)).toBe('pacote_premium')
  })

  test('Qual o pacote para 50h de projeto', () => {
    //const funcMock = jest.mock();
    //const jestFn = jest.fn()
    //console.log('mock =>', funcMock);
    //console.log('jestFn =>', jestFn);
    //console.log('horasPPmock', horasPorProjeto.calcularHorasDeProjeto);
    // expect(1).toBe(1)
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)
    const horas = calcularHorasDeProjeto()
    console.log('horas >>>', horas);

    expect(calcularPacote(horas)).toBe('pacote_basico')
  })
  /*test("100h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)
    const horas = calcularHorasDeProjeto()
    console.log('horas100 >>>', horas)

    expect(calcularPacote(horas)).toBe('pacote_intermediario')

  })*/
})