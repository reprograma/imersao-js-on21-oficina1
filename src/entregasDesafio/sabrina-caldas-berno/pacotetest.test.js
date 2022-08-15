const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')


describe(' Valor do Projeto de acordo com o tipo de pacote ', () => {
        
    test('Retorna o valor total para um projeto básico dada as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(2464)

    });

    test('Retorna o valor total para um projeto intermediário dada as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        pacote.calcularPacote.mockReturnValue('pacote_intermediario');
        const funcionalidades = [
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp'
        ];

        const valorHora = 85;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(5331)

    });

    test('Retorna o valor total para um projeto premium dada as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        pacote.calcularPacote.mockReturnValue('pacote_premium');
        const funcionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria'
        ];

        const valorHora = 50;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(5980)

    })
})