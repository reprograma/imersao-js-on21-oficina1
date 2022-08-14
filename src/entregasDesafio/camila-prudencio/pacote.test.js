const { calcularPacote } = require('./pacote')
const { calcularHorasDeProjeto } = require('./horasPorProjeto')
const horasPorProjeto = require('./horasPorProjeto')

jest.mock('./horasPorProjeto')

describe("Calcular Pacote", () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  test("Qual o pacote do projeto com todas as funcionalidades - 104h", () => {
    const horas = 104;

    expect(calcularPacote(horas)).toBe('pacote_premium');
  })

  test('Qual o pacote para 50h de projeto', () => {
    //const funcMock = jest.mock();
    //const jestFn = jest.fn()
    //console.log('mock =>', funcMock);
    //console.log('jestFn =>', jestFn);
    //console.log('horasPPmock', horasPorProjeto.calcularHorasDeProjeto);
    // expect(1).toBe(1)

    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)
    const horas = calcularHorasDeProjeto()
    console.log('horas >>>', horas);

    expect(calcularPacote(horas)).toBe('pacote_basico')
  })
  test("100h de projeto retorna pacote_intermediario", () => {

    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100);

    const horas = calcularHorasDeProjeto()
    console.log('horas100 >>>', horas)

    expect(calcularPacote(horas)).toBe('pacote_intermediario');
  })
})