const {calcularValorPorHora} = require("./valorHora")
const {horasTrabalhadasPorMes} = require("./valorHora")
const {valorPorHora} = require("./valorHora")
const {
  HORAS_POR_DIA,
  DIAS_UTEIS_NO_MES
} = require('../constantes/constantes')

describe('Cálculo Valor Hora', () => {
  test ('Valor/hora para um salário de R$1000 é R$ 6/hora', () => {
    expect(calcularValorPorHora(1000)).toBe(6)
  })

  test ('Deve retornar horas trabalhadas por mês', () => {
    expect(HORAS_POR_DIA * DIAS_UTEIS_NO_MES).toBe(176)
  })

  test('Deve retornar valor por hora', () => {
    const rendaMensal = 4500;
    const horasTrabalhadasPorMes = 40
    const valorPorHora = rendaMensal / horasTrabalhadasPorMes
    expect(valorPorHora).toBe(112.5)
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