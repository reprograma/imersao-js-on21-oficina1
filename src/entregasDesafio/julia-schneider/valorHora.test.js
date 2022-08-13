const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe("Calculo Valor Hora", () => {
    test("O valor por hora de um salario de 1000 reais", () => {
        // const salario = 1000;
        // const valorPorHora = calcularValorPorHora(salario);
        // const resultadoEsperado = 6

        expect(valorPorHora).toBe(resultadoEsperado);
    });

    test("Salario de 2000", () => {
        expect(calcularValorPorHora(2000)).toBe(12)
    })
});

describe("1 + 1", () => {
    test('1 + 1 não seja 0', () => {
        expect(1 + 1).not.toBe(0)
    });

    test('1 + 1 = 2', () => {
        expect(1 + 1).toBe(2)
    });
});