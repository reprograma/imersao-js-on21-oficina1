const {calcularValorTotalProjeto}= require("../../dominio/calculadora/Projeto/valorProjeto")

describe("CalculaValorProjeto",()=>{
    test("1 funcionalidade",()=>{
        const funcionalidades =["construcao_1_pagina"]
        const valorHora = 16
        const VLtotal = calcularValorTotalProjeto(funcionalidades, valorHora)
        console.log("Valor total 1 funcionalidade ===", VLtotal)
    });
})