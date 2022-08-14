const {calcularPacote} = require ("./pacote")
const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")


describe("Calcular Pacote", () => {
    afterEach(() => {
        horasPorProjeto.calcularHorasDeProjeto.mockClear()
    })
    test("Qual o pacote do projeto com todas as funcionalidade - 104h", ()=>{
        const horas = 104;
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })

    test("Calcular pacote para 50h de projeto", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)
        const horas = calcularHorasDeProjeto()
        expect(calcularPacote(horas)).toBe("pacote_basico")
    })
    test("Calcular pacote para 100h de projeto", () =>{
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(100)
        const horas = calcularHorasDeProjeto()
        expect(calcularPacote(horas)).toBe("pacote_intermediario")
    })
    test("Calcular pacote para 200h de projeto", () =>{
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(200)
        const horas = calcularHorasDeProjeto()
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })
})