import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Container, Lista, Card, Nome } from './styles'

const depoimentos = [
  {
    texto:
      'Eu não tinha site e perdia clientes. Depois que ficou pronto, comecei a receber mais contatos direto no WhatsApp.',
    nome: 'Carlos Silva',
    detalhe: 'Barbeiro'
  },
  {
    texto:
      'Ficou muito profissional. Agora consigo mandar o site e o cliente já entende tudo sem precisar explicar.',
    nome: 'Juliana Souza',
    detalhe: 'Manicure'
  },
  {
    texto:
      'Foi rápido e fácil. Gostei muito do resultado e já estou usando para divulgar meu negócio.',
    nome: 'Rafael Lima',
    detalhe: 'Hamburgueria'
  }
]

const Depoimentos = () => (
  <Container>
    <Titulo fontSize={24}>Quem fez, recomenda</Titulo>

    <Lista>
      {depoimentos.map((item, index) => (
        <Card key={index}>
          <div>⭐⭐⭐⭐⭐</div>

          <Paragrafo>{`"${item.texto}"`}</Paragrafo>

          <Nome>
            <strong>{item.nome}</strong>
            <span>{item.detalhe}</span>
          </Nome>
        </Card>
      ))}
    </Lista>
  </Container>
)

export default Depoimentos