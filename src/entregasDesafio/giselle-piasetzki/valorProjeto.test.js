const {calcularValorTotalProjeto} = require("./valorProjeto");


describe ("Calcular valor total do projeto", () => {

    test("Valor total de um projeto", () => {
        const listaDeFuncionalidades = ["formulario", "setup", "responsividade", "integracao_api_propria"];
        const valorDaHora = 10
        const valorTotalDoProjeto = calcularValorTotalProjeto(listaDeFuncionalidades, valorDaHora)

        expect(valorTotalDoProjeto).toBe(672)   
    })
})