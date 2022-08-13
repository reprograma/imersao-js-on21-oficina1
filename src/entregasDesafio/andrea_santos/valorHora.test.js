const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");

describe("Cálculo Valor Hora", () => {
  test("O valor por hora de um salário de 1000 reais é 6 reais/hora", () => {
    const salario = 1000
    const valorPorHoraCalculado = calcularValorPorHora(salario);
    const valorPorHoraPassaSalarioMilReais = 6

    expect(valorPorHoraCalculado).toBe(valorPorHoraPassaSalarioMilReais);
  });

  test("Salario de 2000", () => {
    
    expect(calcularValorPorHora(2000)).toBe(12)
  })
});

describe("1 + 1", () => {
  test("1 + 1 é igual 2", () => {
    expect(1 + 1).toBe(2);
  });

  test("1 + 1 não seja 0", () => {
    expect(1 + 1).not.toBe(0);
  });
})