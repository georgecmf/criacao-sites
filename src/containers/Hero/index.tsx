import { Container, Titulo, Subtitulo, HeroButton, HeroTrust } from './styles'

const Hero = () => (
  <Container>
    <Titulo>
       Crio sites profissionais para você atrair clientes todos os dias
    </Titulo>

    <Subtitulo>
      Pronto rápido, sem mensalidade e você só paga se gostar.
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
