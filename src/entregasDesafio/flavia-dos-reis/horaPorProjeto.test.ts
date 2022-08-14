const{ HORAS_POR_FUNCIONALIDADE } = require("../../dominio/calculadora/constantes/constantes")

const{calcularHorasDeProjeto} = require("../../dominio/calculadora/Projeto/horasPorProjeto")

const listaDeFuncionalidades = ["setup","formulario","responsividade","otimizacao_seo","construcao_1_pagina","integracao_mailchimp",
"ssr","integracao_api_propria"]

describe('Cálculo de horas de projeto', () => {
   const listaComTodasFuncionalidades = [
    "setup",
    "formulario",
    "responsividade",
    "otimizacao_seo",
    "construcao_1_pagina",
    "integracao_mailchimp",
    "ssr",
    "integracao_api_propria",
  ];

  test ('Horas por projeto não deve ser NaN', () => {
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    expect (horasParaConstrucaoPagina).not.toBe(NaN)
  })

  test ('Deve conter apenas os projetos da lista', () =>{
    expect (["setup","formulario",,"otimizacao_seo","construcao_1_pagina","responsividade","integracao_mailchimp",
    "ssr","integracao_api_propria"]).toEqual(expect.arrayContaining(listaDeFuncionalidades))
  })

  test ('Não haverá mais correspondência se faltar algum projeto da lista', () =>{
    expect (["construcao_1_pagina","responsividade","integracao_mailchimp",
    "ssr","integracao_api_propria"]).not.toEqual(expect.arrayContaining(listaDeFuncionalidades))
  })

  test('Deve retorna NaN se funcionalidade não existir', () =>{
    const listaDeFuncionalidades=['nao_existe']
    expect (NaN).toBeNaN()
  })

  test('Deve retorna 32 horas se funcionalidade for responsividade e otimização seo', () =>{
    const listaDeFuncionalidades=['responsividade', 'otimizacao_seo']
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    expect (horasParaConstrucaoPagina).toBe(32)
  })

  test('Deve retorna 24 horas se funcionalidades forem ssr e integração mailchimp', () =>{
    const listaDeFuncionalidades=['ssr', 'integracao_mailchimp']
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    expect (horasParaConstrucaoPagina).toBe(24)
  })

  test('Deve retorna 16 horas se funcionalidades forem ssr e setup', () =>{
    const listaDeFuncionalidades=['ssr', 'setup']
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    expect (horasParaConstrucaoPagina).toBe(16)
  })

  test('Cálculo de horas para construção de 1 página', () => {
    const listaDeFuncionalidades=['construcao_1_pagina']
    //console.log(`Minha lista de funcionalidades é ${listaDeFuncionalidades}.`);
    const horasParaConstrucaoPagina = calcularHorasDeProjeto(listaDeFuncionalidades)
    //console.log(horasParaConstrucaoPagina)
    expect (horasParaConstrucaoPagina).toBe(8);
  })

  test("Cálculo do projeto com todas as funcionalidades", () => {
    const  tempoTotalReal = calcularHorasDeProjeto(listaComTodasFuncionalidades)
    const tempoTotalEsperado = 104
    expect(tempoTotalReal).toBe(tempoTotalEsperado)
  })
})