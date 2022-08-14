const {
  HORAS_POR_FUNCIONALIDADE,
} = require("../../dominio/calculadora/constantes/constantes");
const {
  calcularHorasDeProjeto,
} = require("../../dominio/calculadora/Projeto/horasPorProjeto");

describe("Testando as horas por tipo de projeto", () => {
  expect(calcularHorasDeProjeto(HORAS_POR_FUNCIONALIDADE.setup)).toEqual(8);
});

test("Um projeto com duas funcionalidade de setup e formulario ", () => {
  const projeto = { setup: 8, formulario: 16 };

  expect(calcularHorasDeProjeto(projeto.setup, projeto.formulario).toEqual(24));
});

test("Um projeto com todas as funcionalidades ", () => {
  const myMock = jest.fn();
  myMock.mockReturnValue(HORAS_POR_FUNCIONALIDADE({ total: 104 }));
  expect(calcularHorasDeProjeto(myMock().total).toEqual(104));
});
