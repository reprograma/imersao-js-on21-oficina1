const { calcularValorPorHora } = require('../../dominio/calculadora/Hora/valorHora')
describe('1 + 1', () => {
  test('1 + 1 não é 0', () => {
    expect(1 + 1).not.toBe(0)
  })

  test('1 + 1 igual 2', () => {
    expect(1 + 1).toBe(2)
  })
})

describe('Calculo Valor Hora', () => {
  test("O valor por hora de um salario de 1000 reais é 6 reais/hora", () => {
    const salario = 1000
    const valorHora =  calcularValorPorHora(salario)
    const resultadoEsperado = 6
  
    expect(valorHora).toBe(resultadoEsperado)
  })

  test("O valor por hora de um salario de 2000 reais é 12 reais/hora", () => {
    expect(calcularValorPorHora(2000)).toBe(12)
  })
})
