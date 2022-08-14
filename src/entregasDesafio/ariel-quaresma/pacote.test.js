const { calcularPacote } = require("./pacote")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")


describe("Calcular o pacote desejado de acordo com quantidade de horas", () => {

    test("Calcular com 1 horas se corresponde ao pacote_basico", () => {
        const horas = 1;
        expect(calcularPacote(horas)).toBe('pacote_basico')
    })

    test("Calcular com 50 horas corresponde ao pacote_basico", () => {
        const horas = 50;
        expect(calcularPacote(horas)).toBe('pacote_basico')
    })

    test("Calcular com 99 horas corresponde ao pacote_intermediario", () => {
        const horas = 99;
        expect(calcularPacote(horas)).toBe('pacote_intermediario')
    })

    test("Calcular se 100 horas corressponde ao pacote_intermediario", () => {
        const horas = 100
        expect(calcularPacote(horas)).toBe('pacote_intermediario')
    })

    test("Calcular se 101 horas corressponde ao pacote_premium", () => {
        const horas = 101
        expect(calcularPacote(horas)).toBe('pacote_premium')
    })

    test("Calcular se 200 horas corressponde ao pacote_premium", () => {
        const horas = 200
        expect(calcularPacote(horas)).toBe('pacote_premium')
    })

})