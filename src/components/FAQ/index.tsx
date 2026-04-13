import { useState } from 'react'
import Titulo from '../Titulo'
import { Container, Item, Pergunta, Resposta } from './styles'

const faq = [
  {
    pergunta: 'Quanto tempo demora para ficar pronto?',
    resposta: 'Normalmente entre 2 a 5 dias, dependendo do projeto.'
  },
  {
    pergunta: 'Preciso pagar tudo antes?',
    resposta: 'Não. Você paga uma entrada e o restante só após aprovação.'
  },
  {
    pergunta: 'E se eu não gostar?',
    resposta: 'Sem problema. Ajustamos até ficar do jeito que você quer.'
  },
  {
    pergunta: 'O site funciona no celular?',
    resposta: 'Sim, todos os sites são feitos para funcionar perfeitamente no celular.'
  },
  {
    pergunta: 'Depois de pronto, posso pedir mudanças?',
    resposta: 'Sim, você pode solicitar ajustes e melhorias quando precisar.'
  }
]

const FAQ = () => {
  const [ativo, setAtivo] = useState<number | null>(null)

  const toggle = (index: number) => {
    setAtivo(ativo === index ? null : index)
  }

  return (
    <Container>
      <Titulo fontSize={24}>Dúvidas frequentes</Titulo>

      {faq.map((item, index) => (
        <Item key={index} onClick={() => toggle(index)}>
          <Pergunta>
            {item.pergunta}
            <span>{ativo === index ? '−' : '+'}</span>
          </Pergunta>

          {ativo === index && <Resposta>{item.resposta}</Resposta>}
        </Item>
      ))}
    </Container>
  )
}

export default FAQ