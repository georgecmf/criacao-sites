import { Container, Titulo, Subtitulo, HeroButton, HeroTrust } from './styles'

const Hero = () => (
  <Container>
    <Titulo>
      Sites profissionais para pequenos negócios que querem atrair clientes e
      passar credibilidade online.
    </Titulo>

    <Subtitulo>
      Criação de sites rápidos, modernos e funcionais, sem complicação.
    </Subtitulo>
    <HeroButton href="https://wa.me/5551986028455" target="_blank">
      Falar no WhatsApp
    </HeroButton>
    <HeroTrust>
      <li>✔ Atendimento direto via WhatsApp</li>
      <li>✔ Orçamento sem compromisso</li>
      <li>✔ Sites rápidos e responsivos</li>
    </HeroTrust>
  </Container>
)

export default Hero
