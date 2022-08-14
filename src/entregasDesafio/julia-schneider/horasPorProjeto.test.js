const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")
//const ListadeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]

describe("Cálculo de Horas de Projeto", () => {
  test("Cálculo de Horas de Construção de 1 página", () => {
    const ListadeFuncionalidades = ["construcao_1_pagina"]
    //console.log('minhalista' , ListadeFuncionalidades)
    
    const horasParaContrucaoPagina = calcularHorasDeProjeto(ListadeFuncionalidades)

    //test("Calculo de Horas de Construcao de 1 pagina", () => {
    
    const listaDeFuncionalidades = ["construcao_1_pagina"]
    //  console.log('minha lista', listaDeFuncionalidades);
    
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    //  console.log(horasParaConstrucaoPagina);

    test("Calculo de Horas de Construcao de 1 pagina", () => {
      const listaDeFuncionalidades = ["construcao_1_pagina"]
      //console.log('minha lista', listaDeFuncionalidades);
      
      const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
      //console.log('HorasParaConstrucaoPagina', horasParaConstrucaoPagina);

      expect(horasParaConstrucaoPagina)

      const tempoTotalReal = calcularHorasDeProjeto(listaDeFuncionalidades)
      const tempototalEsperado = 104
    })
  })})