const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora');

describe("1 + 1", () => {
    test("1 = 1 igual a 2", () => {
        expect(1 + 1).toBe(2);
    })
});

describe('Cálculo Valor Hora', () => {
    test("O valor por hora de um salário 1000 reais é 6 reais/ hora ", () => {
        const salario = 1000;
        const valorPorHoraCalculado = calcularValorPorHora(salario);
        const valorEsperado = 6;

        expect(valorPorHoraCalculado).toBe(valorEsperado);

    });

    test("O valor por hora de um salário de 2000 reais é 12 reais / hora", () => {
       
        expect(calcularValorPorHora(2000)).toBe(12);
    })
});