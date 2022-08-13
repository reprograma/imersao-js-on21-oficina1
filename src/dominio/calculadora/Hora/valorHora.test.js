const {calcularValorPorHora} = require("./valorHora")

describe('Cálculo Valor Hora', () => {
  
  
  test ('Valor/hora para um salário de R$1000 é R$ 6/hora', ()=>{
    /* const salário = 1000
    const valorPorHora = calcularValorPorHora(salário)
    const resultadoEsperado = 6 */
  
    expect(calcularValorPorHora(1000)).toBe(6)
  })
})
