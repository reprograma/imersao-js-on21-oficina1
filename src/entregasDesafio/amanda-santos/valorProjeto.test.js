const {calcularValorTotalProjeto} = require('../../dominio/calculadora/Projeto/valorProjeto')


describe("Valor do Projeto", () =>{


    test("Calcula valor total do projeto", () => {

        const listaDeFuncionalidades = ["construcao_1_pagina", "construcao_1_pagina",  "formulario", "formulario"];
        const valorHora = 6;
    
        expect(calcularValorTotalProjeto(listaDeFuncionalidades, valorHora)).toBe(317);
    })
  

})


