const {
  calcularPacote,
} = require("../../entregasDesafio/flavia-dos-reis/pacote");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");
const MAX_HORAS_POR_PACOTE = require("../../dominio/calculadora/constantes/constantes")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Determina o tipo de pacote com base nas horas por projeto", () => {
  test("Qual pacote do projeto com todas a funcionalidades -104h", () => {
    const horas = 101;

    expect(calcularPacote(horas)).toBe("pacote_premium");
  });

  test("Calcular pacote com 50h de projeto", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50);
    const horas = calcularHorasDeProjeto();

    expect(calcularPacote(horas)).toBe("pacote_basico");
  });

  test("Calcular pacote com 100h de projeto", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100);
    const horas = calcularHorasDeProjeto();

    expect(calcularPacote(horas)).toBe("pacote_intermediario");
  });

  test("Calcular pacote com 200h de projeto", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200);
    const horas = calcularHorasDeProjeto();

    expect(calcularPacote(horas)).toBe("pacote_premium");
  });

  test ("Deve retornar pacote básico", () => {
    const horas = 50
    expect(calcularPacote(horas)).not.toBe("pacote_premium")
  
  })

  test("Não pode retornar valor nulo.", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200);
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).not.toBeNull()
  })

 /*  test("Deve retornar o número de vezes que o pacote é calculado", () => {
    const HPP = jest.fn();
   horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200);
    const horas = calcularHorasDeProjeto();
    calcularPacote(horas);
    MAX_HORAS_POR_PACOTE(HPP,['pacote_basico','pacote_intermediario','pacote_premium']);
    expect(HPP).toHaveBeenCalledTimes(1)
  }) */
});
