const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

const {
  calcularValorTotalProjeto,
} = require("../../dominio/calculadora/Projeto/valorProjeto");

describe("Testando valores dos projetos", () => {
  test("Se o total de horas do projeto for 44h e o valor da hora sair a 6$, calcule o valor total do projeto", () => {
    const myMock = jest.fn();
    myMock.mockReturnValueOnce(44);

    const myMockTwo = jest.fn();
    myMockTwo.mockReturnValueOnce(6);

    expect(
      calcularValorTotalProjeto(
        calcularValorPorHora(myMock()),
        calcularHorasDeProjeto(myMockTwo())
      ).toEqual(1320)
    );
  });
});
