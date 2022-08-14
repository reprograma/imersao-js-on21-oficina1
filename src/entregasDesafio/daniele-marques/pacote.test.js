const { calcularPacote } = require("../../dominio/calculadora/Projeto/pacote");
describe("calcular o tipo de pacote", () => {
  const mockHoras = {
    basico: function basico() {
      return (Math.random() * (50 * 1) + 1).toFixed();
    },

    intermediario: function intermediario() {
      return Math.floor(Math.random() * (200 - 100 + 1) + 100).toFixed();
    },

    premium: function premium() {
      return Math.floor(Math.random() * (2000 - 200 + 1) + 200).toFixed();
    },
  };

  test("Se o valor do pacote for entre 1 e 50", () => {
    expect(calcularPacote(mockHoras.basico())).toEqual("pacote_basico");
  });
  test("Se o valor do pacote for entre 50 e 100", () => {
    expect(calcularPacote(mockHoras.intermediario())).toEqual(
      "pacote_intermediario"
    );
  });
  test("Se o valor do pacote for acima de 200", () => {
    expect(calcularPacote(mockHoras.premium())).toEqual("pacote_premium");
  });
});
