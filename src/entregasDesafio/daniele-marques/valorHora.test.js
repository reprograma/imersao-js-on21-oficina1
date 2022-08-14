const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

describe("Calculo valor hora", () => {
  const iniciarFuncao = {
    estado: false,
    calcularValorPorHora,
  };

  beforeEach(() => {
    iniciarFuncao.estado = true;
  });

  test("A função tem estado true para poder iniciar os testes", () => {
    expect(iniciarFuncao.estado).toBeTruthy();
  });

  test("A função não pode retornar valor nulo", () => {
    expect(calcularValorPorHora()).not.toBeNull();
  });
  test("O valor por hora de um salario de 1000 reais é 6r$/hora", () => {
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(1000);
    expect(calcularValorPorHora(myMock())).toEqual(6);
  });

  test("Salário de 2000", () => {
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(2000);
    expect(calcularValorPorHora(myMock())).toEqual(12);
  });
});

test("Salário de 3000", () => {
  const myMock = jest.fn();
  myMock.mockReturnValueOnce(3000);
  expect(calcularValorPorHora(myMock())).toEqual(18);
});
