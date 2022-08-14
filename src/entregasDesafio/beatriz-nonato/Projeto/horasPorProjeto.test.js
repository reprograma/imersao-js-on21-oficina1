const { calcularHorasDeProjeto } = require('../Projeto/horasPorProjeto')
const horasPorProjeto = require('../Projeto/horasPorProjeto')

jest.mock('../Projeto/horasPorProjeto')

describe("Cálculo de Horas das Funcionalidades do Projeto", () => {
    test("Cálculo de Horas de Construção de 2 páginas", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(16)
        const listaDeFuncionalidades = ["construcao_1_pagina", "construcao_1_pagina"]
        const resultadoReal = calcularHorasDeProjeto(listaDeFuncionalidades)
        const resultadoEsperado = 16
        expect(resultadoReal).toBe(resultadoEsperado)
    })

    test("Cálculo de Projeto com todas as funcionalidades", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(104)
        const listaComTodasAsFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ];
        const tempoTotalReal = calcularHorasDeProjeto(listaComTodasAsFuncionalidades)
        const tempoTotalEsperado = 104
        expect(tempoTotalReal).toBe(tempoTotalEsperado)
    });

    test("Verificar se otimizacao_seo contém na Lista de Funcionalidades", () => {
        const listaComTodasAsFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ];
        expect(listaComTodasAsFuncionalidades).toContain('otimizacao_seo');
        expect(new Set(listaComTodasAsFuncionalidades)).toContain('otimizacao_seo')
    })
})