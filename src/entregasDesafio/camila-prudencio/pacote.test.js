const { calcularPacote } = require('./pacote')
const { calcularHorasDeProjeto } = require('./horasPorProjeto')
const horasPorProjeto = require('./horasPorProjeto')

jest.mock('./horasPorProjeto')
describe('Pacotes...', () => {
  afterEach(() => {
    jest.clearAllMocks();
  })
  describe("Quando for o pacote básico", () => {
    test('Deve retornar pacote_basico', () => {
      horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(49)

      const horas = calcularHorasDeProjeto()

      expect(calcularPacote(horas)).toBe('pacote_basico')
    }),
      test('Não deve retornar pacote_basico', () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(51)

        const horas = calcularHorasDeProjeto()

        expect(calcularPacote(horas)).not.toBe('pacote_basico')
      })
  });

  describe('Quando for o pacote intermediario', () => {
    test("Deve retornar pacote_intermediario", () => {

      horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(99);

      const horas = calcularHorasDeProjeto()

      expect(calcularPacote(horas)).toBe('pacote_intermediario');
    })

  });

  describe('Quando for o pacote premium', () => {
    test("Deve retornar pacote_premium", () => {
      horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(101)

      const horas = calcularHorasDeProjeto()

      expect(calcularPacote(horas)).toBe('pacote_premium');
    })
    test("Não deve retornar pacote_premium", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(200)

        const horas = calcularHorasDeProjeto()

        expect(calcularPacote(horas)).toBe('pacote_premium');
    })

  });
});

 //const funcMock = jest.mock();
    //const jestFn = jest.fn()
    //console.log('mock =>', funcMock);
    //console.log('jestFn =>', jestFn);
    //console.log('horasPPmock', horasPorProjeto.calcularHorasDeProjeto);
    // expect(1).toBe(1)