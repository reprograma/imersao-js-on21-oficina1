const { calcularValorTotalProjeto } = require('../Projeto/valorProjeto')
const { calcularValorBaseProjeto } = require('../Projeto/valorProjeto')
const { calcularHorasDeProjeto } = require('./horasPorProjeto');
const { calcularPacote } = require('./pacote');

describe("Calcular Valor Total do Projeto", () => {
    test("Calcular Hora do Projeto com Todas as Funcionalidades", () => {
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
        const totalHorasComTodasAsFuncionalidades = calcularHorasDeProjeto(listaComTodasAsFuncionalidades)
        expect(totalHorasComTodasAsFuncionalidades).toBe(104)
    })

    test("Calcular 75 horas de Projeto", () => {
        const horas = 75
        const tipoDePacotePorHoras = calcularPacote(horas)
        expect(tipoDePacotePorHoras).toBe("pacote_intermediario")
    })

    test("Calcular valor do projeto sem Taxas Contratuais", () => {
        const valorTotalDoProjeto = 104
        const valorPorHora = 55
        const valorTotalSemTaxas = calcularValorBaseProjeto(valorTotalDoProjeto, valorPorHora)
        expect(valorTotalSemTaxas).toBe(5720)
    })

    test("Calcular valor do projeto com Taxas Contratuais", () => {
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
        const valorPorHora = 55
        const valorTotalComTaxas = calcularValorTotalProjeto(listaComTodasAsFuncionalidades, valorPorHora)
        expect(valorTotalComTaxas).toBe(8580)
    })

})
