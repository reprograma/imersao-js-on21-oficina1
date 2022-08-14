const {calcularValorPorHora} = require ("../../dominio/calculadora/Hora/valorHora")

describe('Cálculo Valor Hora', () => {
  test ('Valor por hora será de R$35 para um salário de R$3872 ', () => {
    expect(calcularValorPorHora(6160)).toBe(35)
  })
})