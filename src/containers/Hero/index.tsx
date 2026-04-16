import { Container, Titulo, Subtitulo, HeroButton, HeroTrust } from './styles'

const Hero = () => (
  <Container>
    <Titulo>
      Crio sites profissionais para você atrair clientes todos os dias
    </Titulo>

    <Subtitulo>
      Pronto em poucos dias, sem mensalidade e você só paga se gostar.
    </Subtitulo>

    <HeroButton href="https://wa.me/5551986028455?text=Olá,%20quero%20um%20site%20para%20atrair%20mais%20clientes" target="_blank">
      Quero meu site
    </HeroButton>

    <HeroTrust>
      <li>✔ Entrega rápida</li>
      <li>✔ Sem mensalidade</li>
      <li>✔ Funciona perfeitamente no celular</li>
    </HeroTrust>
  </Container>
)

export default Hero