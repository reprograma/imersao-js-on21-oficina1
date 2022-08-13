const { calcularValorPorHora } = require("./valorHora");

describe("Calculo valor hora", () => {
  test("O valor por hora de um salario de 1000 reais é 6r$/hora", () => {
    expect(calcularValorPorHora(1000)).toBe(6);
  });
});
describe("1 + 1", () => {
  test("adds 1 + 2 to equal 3", () => {
    expect(1 + 2).toBe(3);
  });
});
