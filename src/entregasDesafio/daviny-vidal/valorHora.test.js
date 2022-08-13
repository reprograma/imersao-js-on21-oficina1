const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe("Cálculo Valor Hora", () => {
    test("O valor por hora de um salário de 1000 reais", ()=>{
        const salario = 1000
        const valorPorHora = calcularValorPorHora(salario)
        const resultadoEsperado = 6
        expect(valorPorHora).toBe(resultadoEsperado)
    })
})

describe("1+1", () => {
    test("1 + 1 é igual a 2", () => {
        expect(1 + 1).toBe(2)
    })
})