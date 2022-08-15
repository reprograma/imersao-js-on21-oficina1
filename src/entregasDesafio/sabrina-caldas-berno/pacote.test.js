const { calcularPacote } = require('../../dominio/calculadora/Projeto/pacote')

describe('Testar pacotes de acordo com as horas totais do projeto', () => {

    test('Testar o máximo de horas do pacote básico', () => {
        const horasProjeto = 50;

        const result = calcularPacote(horasProjeto)
        expect(result).toEqual('pacote_basico')
    });

    test('Testar o máximo de horas do pacote intermediário', () => {
        const horasProjeto = 100;

        const result = calcularPacote(horasProjeto)
        expect(result).toEqual('pacote_intermediario')
    });

    test('Testar o máximo de horas do pacote premium', () => {
        const horasProjeto = 200;

        const result = calcularPacote(horasProjeto)
        expect(result).toEqual('pacote_premium')
    });
    
})