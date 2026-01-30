import Titulo from '../../components/Titulo'
import { Container, StackGrid, StackCard } from '../Tecnologias/styles'

const stack = [
  'React',
  'TypeScript',
  'Styled-components',
  'HTML',
  'CSS',
  'Git',
  'GitHub',
  'Vercel'
]

const Tecnologias = () => (
  <Container>
    <Titulo fontSize={24}>Tecnologias utilizadas</Titulo>

    <StackGrid>
      {stack.map((item) => (
        <StackCard key={item}>{item}</StackCard>
      ))}
    </StackGrid>
  </Container>
)

export default Tecnologias
