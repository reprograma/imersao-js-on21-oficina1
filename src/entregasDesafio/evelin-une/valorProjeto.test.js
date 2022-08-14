const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora");
const { calcularValorTotalProjeto } = require("../../dominio/calculadora/Projeto/valorProjeto")


describe("Calcular valor total do projeto com taxa com salário de 1000 reais", () => {
    test("valor total do projeto com todas as funcionalidades", () => {
        
        const listaComTodasFuncionalidades = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria',
        ];
        const valorHora = 6;
    
        expect(calcularValorTotalProjeto(listaComTodasFuncionalidades, valorHora)).toBe(936)
    });

    test("valor total do projeto Construção de 1 página com salário de 2000 reais", () => {
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        const valorHora = calcularValorPorHora(2000);

        expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(106)
    })
    
})

