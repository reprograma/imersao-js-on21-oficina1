
const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

const listaDeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]

describe("Calculo de Horas de Projeto", () => {
    test("Calculo de Horas de Construcao de 1 pagina", () => {
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        console.log('minha lista', listaDeFuncionalidades);
        const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        console.log(horasParaConstrucaoPagina);

        
    })
})