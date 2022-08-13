const {   calcularValorPorHora  } = require('../../dominio/calculadora/Hora/valorHora')


describe("Calculo valor hora", ()=> {


    test("O valor por hora de um salário de 1000 reais", () => {

        const salario = 1000;
        const resultadoEsperado = 6;
    
        expect(calcularValorPorHora(salario)).toBe(resultadoEsperado);
    })
  

})

describe("Calculo soma", ()=> {

    test("1 + 1 = 2", () => {

        expect(1+1).toBe(2);
    })
    
})


