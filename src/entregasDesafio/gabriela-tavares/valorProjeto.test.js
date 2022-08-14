const {
  calcularValorBaseProjeto,
  calcularValorTotalProjeto,
} = require("./valorProjeto");
const valorProjeto = require("./valorProjeto");
const {
  TAXAS_CONTRATUAIS_POR_PACOTE,
} = require("../../dominio/calculadora/constantes/constantes");
const { calcularPacote } = require("./pacote");
const pacote = require("./pacote");
const {
  calcularValorPorHora,
} = require("../../dominio/calculadora/Hora/valorHora");

jest.mock("./valorProjeto");
valorProjeto.calcularValorBaseProjeto.mockReturnValue(600);

describe("calcularValorBaseProjeto", () => {
  it("Deve retornar o valor total do projeto com a taxa para o valor total de R$600", () => {
    const calcularValorBaseProjeto =
      valorProjeto.calcularValorBaseProjeto.mockReturnValue(600);
    const totalDeHorasPorProjeto = calcularValorPorHora(2000);
    const totalHorasPorProjeto = 50;
    const pacote = calcularPacote(totalHorasPorProjeto);
    const valorBase = calcularValorBaseProjeto(
      totalHorasPorProjeto,
      totalDeHorasPorProjeto
    );
    const resultado = valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote];
    const valorEsperado = 660;

    expect(resultado).toBe(valorEsperado);
  });

  it("Deve retornar o valor total do projeto com a taxa para o valor total de R$1200", () => {
    const calcularValorBaseProjeto =
      valorProjeto.calcularValorBaseProjeto.mockReturnValue(1200);
    const totalDeHorasPorProjeto = calcularValorPorHora(2000);
    const totalHorasPorProjeto = 100;
    const pacote = calcularPacote(totalHorasPorProjeto);
    const valorBase = calcularValorBaseProjeto(
      totalHorasPorProjeto,
      totalDeHorasPorProjeto
    );
    const resultado = parseInt(
      valorBase * TAXAS_CONTRATUAIS_POR_PACOTE[pacote]
    );
    const valorEsperado = 1440;

    expect(resultado).toBe(valorEsperado);
  });
});
