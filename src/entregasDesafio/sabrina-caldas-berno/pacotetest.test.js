const { calcularValorTotalProjeto } = require ('../../dominio/calculadora/Projeto/valorProjeto')
const pacote = require('../../dominio/calculadora/Projeto/pacote')

jest.mock('../../dominio/calculadora/Projeto/pacote.js')

//fazer para todos os pacotes -  extra
//qual mock vc vai usar 

describe(' Valor do Projeto ', () => {
    beforeEach( () => {
        pacote.calcularPacote.mockReturnValue('pacote_basico');
       // pacote.calcularPacote.mockReturnValue('pacote_intermediario');
    })
    
    test('Retorna o valor total para um projeto básico dada as funcionalidades pedidas e o valor da hora da desenvolvedora', () => {
        const funcionalidades = [
            'setup',
            'responsividade',
            'construcao_1_pagina'
        ];

        const valorHora = 70;
        const result = calcularValorTotalProjeto(funcionalidades, valorHora)
        expect(result).toEqual(2464)

    })
})