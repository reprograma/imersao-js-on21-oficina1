const { calcularpacote, calcularPacote } = require("./pacote")
const {calcularHorasDeProjeto}  = require("../../dominio/calculadora/Projeto/horasPorProjeto")
const horasPorProjeto = require("../../dominio/calculadora/Projeto/horasPorProjeto")

jest.mock("../../dominio/calculadora/Projeto/horasPorProjeto")



describe ("calcular Pacote" ,() => {

    test("Qual o pct 104h" , () =>{

        const horas = 104

        expect(calcularPacote(horas)).toBe("pacote_premium")


    })

    test("Calcular pacote p 50h proj", () =>{
    //const funcMock =jest.mock()
   // const jestFn = jest.fn()
   // console.log('mock ===>>>', funcMock);
   // console.log('jestFn ===>>>', jestFn);
// consolelog('Hosrs por Proje Mock ===>',horasPorProjeto);
  //  expect(1).toBe(1)
  horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(50)

    const horas = calcularHorasDeProjeto()
    console.log('horas ===>' , horas);
    expect(calcularPacote(horas)).toBe("pacote_basico")

    })

   
    test("100h" ,() =>{
        horasPorProjeto.calcularHorasDeProjeto.mockReturnValue(100)
        const horas = calcularHorasDeProjeto()
        console.log('horas 100 ===>' , horas);

        expect(calcularPacote(horas)).toBe("pacote_intermediario")
    }
    )

})