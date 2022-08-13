const{ calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")

describe('Cálculo Valor Hora', () => {
    test('O valor por hora de um salário de 1000 reais é 6 reais/hora', () => {
    
        expect(calcularValorPorHora(1000)).toBe(6)
    })
})

describe('1 + 1', () => {
    test('1 + 1 não seja 0', () => {
        expect(1 + 1).not.toBe(0)
    });
    
    test('1 + 1 é 2', () => {
        expect(1 + 1).toBe(2)
    });
    
})

