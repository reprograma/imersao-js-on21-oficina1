const {calcularValorPorHora} = require("./valorHora")

test ('If 1 + 1 not equal 0', () => {
  expect(1+1).not.toBe(0)
})

test ('If 1 + 1 is equal 2', () => {
  expect(1+1).toBe(2)
})

test ('Valor/hora para um salário de 1000 reais', ()=>{
  const salário = 1000
  const valorPorHora = calcularValorPorHora(salário)
  const resultadoEsperado = 6

  expect(valorPorHora).toBe(resultadoEsperado)
})