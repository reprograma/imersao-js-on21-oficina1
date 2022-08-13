const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora");

describe("Cálculo valor hora do trabalho", ()=>{
    test("O valor por hora de um salário de um mil reais", ()=>{
        //const salario = 1000
        //const valorPorHora = calcularValorPorHora(salario)
        // const resultadoEsperado = 6
        expect(calcularValorPorHora(1000)).toBe(6)
    }),
    test("O valor por hora de um salário de dois mil reais", ()=>{
        const salario = 2000
        const valorPorHora = calcularValorPorHora(salario)
        const resultadoEsperado = 12
        expect(valorPorHora).toBe(12)
    })
});

test("1 + 1 igual a 2", ()=>{
    expect(1+1).toBe(2)
});

test("1 + 1 igual não seja zero", ()=>{
    expect(1+1).not.toBe(0)
});
