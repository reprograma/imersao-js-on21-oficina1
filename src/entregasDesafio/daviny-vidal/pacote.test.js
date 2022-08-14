const { calculadora } = require("../../dominio/calculadora/Projeto/pacote")
const horasPorProjeto = require("../..//dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../..//dominio/calculadora/Projeto/horasPorProjeto")

describe("calcular Pacote", () => {
    test("Qual o pacote do projeto com todas as funcionalidade - 104h", () => {
        const horas = 104
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })

    test.only("calcular pacote para 50h de projeto", ()=> {
        // const funcMock = jest.mock()
        // const jestFn = jest.fn()
        // console.log('jestFn =>>', jestFn)
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)

        expect().tobe()
    })
})