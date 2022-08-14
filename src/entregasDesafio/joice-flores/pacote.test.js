const { calcularPacote } = require('./pacote')

describe('Calcula pacote', () => {
  test('Verifica se é um pacote premium', () => {
    const horas = 104
    expect(calcularPacote(horas)).toBe('pacote_premium')
  })

  test('Verifica se é um pacote intermediário', () => {
    const horas = 100
    expect(calcularPacote(horas)).toBe('pacote_intermediario')
  })

  test('Verifica se é um pacote básico', () => {
    const horas = 50
    expect(calcularPacote(horas)).toBe('pacote_basico')
  })
})