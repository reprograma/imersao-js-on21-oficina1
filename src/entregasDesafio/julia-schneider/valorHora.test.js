const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')

describe("Calculo valor hora", () => {

    test("O valor por hora de um salário de 1000 reais", () => {

        const salario = 1000;
        const valorPorHoraCalcular = calcularValorPorHora(salario)
        const resultadoEsperado = 6;

        expect(valorPorHoraCalcular(salario)).toBe(resultadoEsperado);
    });

    test("Salario 2000", () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })
});

describe("Calculo soma", () => {

    test("1 + 1 = 2", () => {

        expect(1 + 1).toBe(2);
    })
})