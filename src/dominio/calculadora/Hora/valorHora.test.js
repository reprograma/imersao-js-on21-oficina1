const {calcularValorPorHora} = require ("../../calculadora/Hora/valorHora")

describe('Cálculo Valor Hora', () => {
  test ('Valor por hora será de R$22 para um salário de R$3872 ', () => {
    expect(calcularValorPorHora(3872)).toBe(22)
  })

  test ('Caso a renda mensal não seja informada o valor por hora não será R$ 25', () => {
    expect(calcularValorPorHora(0)).not.toBe(25)
  })

  test ('Valor/hora para um salário de R$1000 é R$ 6/hora', () => {
  
    expect(calcularValorPorHora(1000)).toBe(6)
  })
})

describe ('1 + 1', () => {
  test ('If 1 + 1 not equal 0', () => {
    expect(1+1).not.toBe(0)
  })
  
  test ('If 1 + 1 is equal 2', () => {
    expect(1+1).toBe(2)
  })
})