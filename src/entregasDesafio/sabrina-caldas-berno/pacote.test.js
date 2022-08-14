const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com as horas totais do projeto', () => {

    test('testar o pacote básico', () => {
        const horasProjeto = 50;

        const result = calcularPacote(horasProjeto)
        expect(result).toEqual('pacote_basico')
    })
   
})