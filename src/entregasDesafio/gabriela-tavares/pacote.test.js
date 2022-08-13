const { calcularPacote } = require("./pacote");
const { calcularHorasDeProjeto } =  require("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")
horasPorProjeto.calcularHorasDeProjeto.mockReturnValue()

describe("Calcular Pacote", () => {
  it("Deve ser pacote_premium para projeto com todas as funcionalidades - 104h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(104)
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).toBe("pacote_premium");
  });

  it("Deve ser pacote_basico para projeto - 50h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).toBe("pacote_basico");;
  });

  it("Deve ser pacote_intermediario para projeto - 99h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(99)
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).toBe("pacote_intermediario");
  });

  it("Deve ser pacote_intermediario para projeto - 100h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(100)
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).toBe("pacote_intermediario");
  });

  it("Deve ser pacote_premium para projeto - 200h", () => {
    horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(200)
    const horas = calcularHorasDeProjeto();
    expect(calcularPacote(horas)).toBe("pacote_premium");
  });
});
