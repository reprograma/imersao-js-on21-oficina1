const {calcularValorPorHora} = require("../../dominio/calculadora/Hora/valorHora")

describe("Cálculo Valor Hora", () => {
    test("O valor por hora de um salário de 1000 reais", ()=>{
        const salario = 1000
        const valorPorHora = calcularValorPorHora(salario)
        const resultadoEsperado = 6
        expect(valorPorHora).toBe(resultadoEsperado)
    });

    test("O valor por hora de um salário de 2000 reais", () =>{
        expect(calcularValorPorHora(2000)).toBe(12)
    });
});
