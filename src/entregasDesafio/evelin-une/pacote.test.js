const { calcularPacote} = require("./pacote")
const { calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")
jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("calcular pacote", () =>{
    test("Qual o pacote do projeto com todas funcionalidades", () => {
        const horas = 104
        expect(calcularPacote(horas)).toBe("pacote_premium")
    })
    
    test("Pacote de 50 horas", () => {
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(50)
        const horas = calcularHorasDeProjeto()
        
        expect(calcularPacote(horas)).toBe("pacote_basico")
   })

   test("Pacote com 100 horas", () => { 
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(100)
        const horas = calcularHorasDeProjeto()

        expect(calcularPacote(horas)).toBe("pacote_intermediario")
   })
   
   test("Pacote com 200 horas", () => { 
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValueOnce(200)
        const horas = calcularHorasDeProjeto()

        expect(calcularPacote(horas)).toBe("pacote_premium")
   })
})