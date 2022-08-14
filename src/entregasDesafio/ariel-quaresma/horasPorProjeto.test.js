const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Cálculo das funcionalidades individualmente", () => {
    test("Cálculo de horas de setup", () => {
        const listaDeFuncionalidades = ['setup']
        const horasParaSetup = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaSetup).toBe(8)
    })

    test("Cálculo de horas para construção de formulário", () => {
        const listaDeFuncionalidades = ['formulario']
        const horasParaFormulario = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaFormulario).toBe(16)
    })

    test("Cálculo de horas para responsividade", () => {
        const listaDeFuncionalidades = ['responsividade']
        const horasParaResponsividade = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaResponsividade).toBe(16)
    })

    test("Cálculo de horas para otimizacao_seo", () => {
        const listaDeFuncionalidades = ['otimizacao_seo']
        const horasParaOtimizacao_seo = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaOtimizacao_seo).toBe(16)
    })

    test("Cálculo de horas para construcao_1_pagina", () => {
        const listaDeFuncionalidades = ['construcao_1_pagina']
        const horasParaConstrucao1pagina = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaConstrucao1pagina).toBe(8)
    })

    test("Cálculo de horas para integracao mailchimp", () => {
        const listaDeFuncionalidades = ['integracao_mailchimp']
        const horasParaIntegracaoMailchimp = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaIntegracaoMailchimp).toBe(16)
    })

    test("Cálculo de horas para ssr", () => {
        const listaDeFuncionalidades = ['ssr']
        const horasParaSsr = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaSsr).toBe(8)
    })

    test("Cálculo de horas para integracao api propria", () => {
        const listaDeFuncionalidades = ['integracao_api_propria']
        const horasParaIntegracaoApiPropria = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaIntegracaoApiPropria).toBe(16)
    })

})

describe("Cálculo das funcionalidades agrupadas", () => {

    test("Cálculo tempo total de todas as funcionalidades", () => {
        const listaDeFuncionalidades = [
        'setup',
        'formulario',
        'responsividade',
        'otimizacao_seo',
        'construcao_1_pagina',
        'integracao_mailchimp',
        'ssr',
        'integracao_api_propria']

    const horasParaTodasFuncionalidades = calcularHorasDeProjeto(listaDeFuncionalidades)
    expect(horasParaTodasFuncionalidades).toBe(104)
})
})