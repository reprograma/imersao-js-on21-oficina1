const { calcularValorPorHora } = require('../Hora/valorHora')

describe("Cálculo Valor Hora", () => {
    test("O valor por hora de um salário de 1000 reais", () => {
        const salario = 1000
        const valorPorHoraCalculado = calcularValorPorHora(salario)
        const valorPorHoraParaSalarioMilReais = 6
    
        expect(valorPorHoraCalculado).toBe(valorPorHoraParaSalarioMilReais)
    });

    test("Salário de 2000 reais", () => {
     expect(calcularValorPorHora(2000)).toBe(12)
    })
});

describe("1 + 1", () => {
    test("1 + 1 igual 2", () => {
        expect(1 + 1).toBe(2)
    })
})
