const {calcularHoraPorProjeto} = require ("./dominio/calculadora/Projeto/horasPorProjeto")

const listaDeFuncionalidades = ['construcao_1_pagina', 'integracao_api_propria', 'formulario']

describe["Calculo de horas por projeto", ()=>{
    test('Calculo de horas de Construção de 1 página', () => { 
        const listaDeFuncionalidades = ["construcao_1_pagina"]
        
        const horasParaConstruçãoPagina = calcularHoraPorProjeto(listaDeFuncionalidades)
      

        const resultadoReal =8
        const resultadoEsperado = 16
        
        
        


        const listaDeFunc = [
            'setup',
            'formulario',
            'responsividade',
            'otimizacao_seo',
            'construcao_1_pagina',
            'integracao_mailchimp',
            'ssr',
            'integracao_api_propria',

        ]
        const tempoTotalEsperado = 184
        const tempoTotalReal = calcularHoraPorProjeto(listaDeFuncionalidades)
        expect(horasParaConstruçãoPagina).toBe(8)
     })
  
}]