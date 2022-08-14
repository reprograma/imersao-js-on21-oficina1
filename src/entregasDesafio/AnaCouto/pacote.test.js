const { calcularValorPorHora } = require("../../dominio/calculadora/Hora/valorHora")
const {calcularPacote} = require ("../../dominio/calculadora/Projeto/pacote")
const {horasPorProjeto} =require("../../dominio/calculadora/Projeto/horasPorProjeto")

describe("calcular Pacote", ()=>{
    beforeEach(()=>{
        horasPorProjeto.calcularHorasPorProjeto.mockClear()
    })

    test("Qual o pacote do projeto com todas as funcionalidades 184", ()=>{
         const horas = 184

         expect(calcularPacote(horas)).toBe("pacote_premium")
    })
    
    test.only("Calcular pacote para 50h de projeto",()=>{
        
        const funcMock = jest.mock()
        const jestFn = jest.fn()
        console.log('mock =>', funcMock);
        console.log('jestFn =>', jestFn);
        console.log('horasPP mock', horaPorProjeto, calcularValorPorHora)
        expect(1).toBe(1)
        
       horasPorProjeto.calcularHorasPorProjeto.mockReturnValueOnce(50)
    })
    test("100h de projeto retorna pacote intermediário",()=>{
        horasPorProjeto.calcularHorasPorProjeto.mockReturnValueOnce(100)
        const horas = calcularHorasPorProjeto()
        console.log("horas >>>", horas)

        expect(calcularPacote(horas))
    })
})