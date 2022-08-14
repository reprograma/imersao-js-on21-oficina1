const { calcularPacote } = require("./pacote");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Cálculo do Pacote", () => {
  //   beforeEach(() => {
  //     horasPorProjeto.calcularHorasDeProjeto.mockClear();
  //   });

  test("O pacote do projeto com 50hrs é básico", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50);
    const horas = calcularHorasDeProjeto();
    const resultadoObtido = calcularPacote(horas);
    const resultadoEsperado = "pacote_basico";
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
  test("O pacote do projeto com 99hrs é intermediário", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(99);
    const horas = calcularHorasDeProjeto();
    const resultadoObtido = calcularPacote(horas);
    const resultadoEsperado = "pacote_intermediario";
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
  test("O pacote do projeto com 100hrs é intermediário", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100);
    const horas = calcularHorasDeProjeto();
    const resultadoObtido = calcularPacote(horas);
    const resultadoEsperado = "pacote_intermediario";
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
  test("O pacote do projeto com 200hrs é premium", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200);
    const horas = calcularHorasDeProjeto();
    const resultadoObtido = calcularPacote(horas);
    const resultadoEsperado = "pacote_premium";
    expect(resultadoObtido).toBe(resultadoEsperado);
  });
});
