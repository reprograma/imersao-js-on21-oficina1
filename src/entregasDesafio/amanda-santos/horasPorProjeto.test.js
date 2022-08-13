const { calcularHorasDeProjeto } = require('../../dominio/calculadora/Projeto/horasPorProjeto')

// const listaDeFuncionalidades = ["construcao_l_paginas", "integracao_api_propria", "formulario"];


describe("Calculo de horas de projeto", ()=>{


    test("Calculo de horas de construcao de uma pagina", ()=>{
        const listaDeFuncionalidades = ["construcao_1_pagina", "construcao_1_pagina"]
        const horasParaConstrucaoDePagina = calcularHorasDeProjeto(listaDeFuncionalidades)

        console.log(horasParaConstrucaoDePagina)

        expect(horasParaConstrucaoDePagina).toBe(16)

    })

})