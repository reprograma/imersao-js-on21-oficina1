const { calcularPacote } = require('./pacote')
const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

const horasPorProjeto = require('../../dominio/calculadora/Projeto/horasPorProjeto')

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular pacote", () => {

    afterEach(() => {

        horasPorProjeto.calcularHorasDeProjeto.mockClear();
    })

    test.skip("Qual o pacote do projeto com todas as funcionalidades - 104h", () => {

        const horas = 104;

        expect(calcularPacote(horas).toBe("premium"));
    })

    test("Calcular pacote para 50h de projeto", () => {

        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)

        const horas = calcularHorasDeProjeto()
        console.log('horas >>>', horas)

        expect(calcularPacote(horas)).toBe("pacote_basico")
    })

    test("Calcular pacote para 100h de projeto", () => {


        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)

        const horas = calcularHorasDeProjeto()
        console.log('horas >>>', horas)

        expect(calcularPacote(horas)).toBe("pacote_intermediario")
    })
})