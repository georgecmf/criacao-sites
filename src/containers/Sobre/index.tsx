import Titulo from '../../components/Titulo'
import Paragrafo from '../../components/Paragrafo'
import { Container } from './styles'

const Sobre = () => (
  <Container>
    <Titulo fontSize={24}>Sobre o serviço</Titulo>

    <Paragrafo $tipo="principal">
      Crio sites profissionais para pequenos negócios e profissionais autônomos
      que querem marcar presença online e atrair mais clientes.
    </Paragrafo>

    <Paragrafo $tipo="principal">
      Desenvolvo sites modernos, rápidos e responsivos, pensados para funcionar
      bem no celular e transmitir credibilidade desde o primeiro contato.
    </Paragrafo>
  </Container>
)

export default Sobre
