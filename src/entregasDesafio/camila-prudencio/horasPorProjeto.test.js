const { calcularHorasDeProjeto, } = require('./horasPorProjeto')

//const listaDeFuncionalidades = ["construcao_1_pagina", "integracao_api_propria", "formulario"]

describe('Cálculo de Horas de Projeto', () => {
    test('Cálculo de Horas de Construção de 1 página', () => {
        const listaDeFuncionalidades = ['construcao_1_pagina']

        const resultadoReal = calcularHorasDeProjeto(listaDeFuncionalidades)
        
        const resultadoEsperado = 16

        expect(resultadoReal).toBe(resultadoEsperado)
    });
    test('Cálculo de Projeto com todas as funcionalidades', () => {
        
        const listaComTodasFuncionalidades = [
            'setup',
            'fomulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria',
        ];

        const tempoTotalReal = calcularHorasDeProjeto(listaComTodasFuncionalidades)
        const tempoTotalEsperado = 104

        expect(tempoTotalReal).toBe(tempoTotalEsperado)
    });
    
    
})