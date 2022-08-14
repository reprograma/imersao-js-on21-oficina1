const {calcularPacote} = require('./pacote');
const {calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto");
jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("Calcular Pacote", ()=>{
   test("Qual o pacote para um projeto que contenha uma unidade de cada funcionaalidade disponível?", ()=>{
       const totalDeHorasPorProjeto = 104
        expect (calcularPacote(totalDeHorasPorProjeto)).toBe("pacote_premium")
   })

    test("Calcular pacote para 50 horas de projeto", ()=>{
        calcularHorasDeProjeto.mockReturnValueOnce(50)
        const horas = calcularHorasDeProjeto()
        console.log("horas >>>", horas);
        expect(calcularPacote(horas)).toBe("pacote_basico")
    })
});
