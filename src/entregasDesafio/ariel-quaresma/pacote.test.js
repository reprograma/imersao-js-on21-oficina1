const { calcularPacote } = require("./pacote")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular o pacote desejado de acordo com quantidade de horas", () => {
    test("Calcular se com 50 horas corresponde ao pacote_basico", () => {

        const horas = 50;
        
        expect(calcularPacote(horas)).toBe('pacote_basico')
    })

    test("Calcular se 100 horas corressponde ao pacote_intermediario", () => {
        const horas = 100

        expect(calcularPacote(horas)).toBe('pacote_intermediario')
    })

    //test("")


})