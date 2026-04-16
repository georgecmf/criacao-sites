import Titulo from '../../components/Titulo'
import { Container, Texto, Botao } from './styles'

const CTA = () => (
  <Container>
    <Titulo fontSize={24} align='center'>
      Pronto para ter seu site no ar?
      </Titulo>

    <Texto>
      Me chama no WhatsApp e te explico a melhor solução para o seu negócio, sem
      compromisso.
    </Texto>

    <Botao href="https://wa.me/5551986028455?text=Olá,%20quero%20um%20site%20para%20atrair%20mais%20clientes" target="_blank">
      Falar no WhatsApp
    </Botao>
  </Container>
)

export default CTA
