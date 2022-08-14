const { calcularHorasDeProjeto } = require("../../dominio/calculadora/Projeto/horasPorProjeto")

// const listaDeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"];

describe("Cálculo de horas de projeto", () => {
    test("Cálculo de Horas de Construção de 1 página", () => {
        const listaDeFuncionalidades = ['construcao_1_pagina', 'construcao_1_pagina']
        const horasParaConstPagina = calcularHorasDeProjeto(listaDeFuncionalidades)

        expect(horasParaConstPagina).toBe(16)
    })

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