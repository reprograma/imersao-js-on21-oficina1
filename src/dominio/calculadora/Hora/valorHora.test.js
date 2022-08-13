const {calcularValorPorHora} = require("./valorHora")

describe('Cálculo Valor Hora', () => {
  
  
  test ('Valor/hora para um salário de R$1000 é R$ 6/hora', ()=>{
    /* const salário = 1000
    const valorPorHora = calcularValorPorHora(salário)
    const resultadoEsperado = 6 */
  
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