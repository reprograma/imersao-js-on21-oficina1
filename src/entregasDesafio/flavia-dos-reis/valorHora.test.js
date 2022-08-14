const {calcularValorPorHora, horasTrabalhadasPorMes, valorPorHora} = require("../../dominio/calculadora/Hora/valorHora")
const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../../dominio/calculadora/constantes/constantes')

describe('Cálculo Valor Hora', () => {
  test ('Valor/hora para um salário de R$1000 é R$ 6/hora', () => {
    expect(calcularValorPorHora(1000)).toBe(6)
  })

  test ('Qualquer valor por hora for negativo retornará renda mesnsal -0', () =>{
    expect(calcularValorPorHora(-10)).toBe(-0)
  })

  test ('Se valor por hora for zero retornará renda mesnsal 0', () =>{
    expect(calcularValorPorHora(0)).toBe(0)
  })
})