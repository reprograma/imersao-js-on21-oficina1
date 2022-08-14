const { calcularPacote } = require("./pacote")
const { calcularHorasDeProjeto } = require('../Projeto/horasPorProjeto')
const horasPorProjeto = require('../Projeto/horasPorProjeto')

jest.mock('../Projeto/horasPorProjeto')

describe("Calcular Pacote", () => {
    test("Acima de 100 horas de projeto retorna pacote_premium", () => {
        const horas = 104
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })

    test("Calcular pacote para 50 horas de projeto", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)
        
        const horas = calcularHorasDeProjeto()
        expect(calcularPacote(horas)).toBe("pacote_basico")
    })

    test("100 horas de projeto retorna pacote_intermediario", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(100)
        const horas = calcularHorasDeProjeto()
        expect(calcularPacote(horas)).toBe("pacote_intermediario")
    })
})