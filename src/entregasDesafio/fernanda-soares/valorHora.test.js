const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Cálculo Valor Hora", () => {
  test("O valor por hora de um salário de 1000 reais é R$6/hr", () => {
    //   const salario = 1000;
    //   const valorPorHora = calcularValorPorHora(salario);
    //   const valorEsperado = 6;
    //   expect(valorPorHora).toBe(valorEsperado);
    expect(calcularValorPorHora(1000)).toBe(6);
  });

  test("O valor por hora de um salário de 2000 reais é R$12/hr", () => {
    expect(calcularValorPorHora(2000)).toBe(12);
  });
});

describe("Cálculo 1 + 1", () => {
  test("1 + 1 igual a 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("1 + 1 não é igual a 0", () => {
    expect(1 + 1).not.toBe(0);
  });
});
