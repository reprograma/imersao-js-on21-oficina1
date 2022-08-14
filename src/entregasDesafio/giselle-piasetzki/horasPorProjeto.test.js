const  {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo Horas de Projeto", () => {
    test("Cálculo de Horas de Construção de 1 página", () =>{
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoPagina).toBe(8)

    })
    test("Cálculo de Horas de Construção de 1 formulário com responsividade", () =>{
        const listaDeFuncionalidades = ["formulario", "responsividade"]
        const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoPagina).toBe(32)

    })
    test("Cálculo de Horas de Construção de todas as funcionalidades", () =>{
        const listaDeFuncionalidades = ["setup", "formulario", "responsividade", "otimizacao_seo", "construcao_1_pagina", "integracao_mailchimp", "ssr", "integracao_api_propria"]
        const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
        expect(horasParaConstrucaoPagina).toBe(104)

    })
});