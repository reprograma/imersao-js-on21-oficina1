const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")


//O describe engloba testes e descreve aquele pedaço de testes

// describe("Testes para aprendizado", () => {
//     test("1 + 1 não seja 0", () => {
//         expect(1 + 1).not.toBe(0)
//     })

//     test("1 + 1 igual 2", () => {
//         expect(1 + 1).toBe(2)
//     })

// })

describe("Testes da calculadora", () => {

    test("O valor por hora de um salário de 1000 reais", () => {
        const salario = 1000;
        const valorPorHora = calcularValorPorHora(salario)
        const resultadoEsperado = 6
        console.log(">>>>", valorPorHora);

        //expect(calcularValorPorHora(1000)).toBe(6) também pode ser passado dessa forma

        expect(valorPorHora).toBe(resultadoEsperado)
    });

    test("Valor por hora para salário de 2000 reais", () => {
        expect(calcularValorPorHora(2000)).toBe(12);
    })
})
