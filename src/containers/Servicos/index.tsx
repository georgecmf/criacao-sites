import {
  Container,
  Title,
  ServicesGrid,
  ServiceCard,
  ServiceIcon,
  ServiceHeader,
  Price,
  PriceNote,
  BotaoServico,
  FooterServico,
  TrustBlock
} from './styles'

export default function Servicos() {
  return (
    <Container id="servicos">
      <Title>Serviços</Title>

      <ServicesGrid>
        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>💻</ServiceIcon>
            <h3>Site Institucional</h3>
          </ServiceHeader>
          <p>
            Site profissional para empresas ou profissionais, com design
            moderno, responsivo e otimizado.
          </p>
          <FooterServico>
            <Price>A partir de R$ 600</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Falar no WhatsApp
            </BotaoServico>
          </FooterServico>
        </ServiceCard>

        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>🚀</ServiceIcon>
            <h3>Landing Page</h3>
          </ServiceHeader>
          <p>
            Página focada em conversão, ideal para anúncios, produtos ou
            serviços específicos.
          </p>
          <FooterServico>
            <Price>A partir de R$ 400</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Falar no WhatsApp
            </BotaoServico>
          </FooterServico>
        </ServiceCard>

        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>🛠️</ServiceIcon>
            <h3>Manutenção de Sites</h3>
          </ServiceHeader>
          <p>
            Ajustes, correções, melhorias visuais e suporte para sites já
            existentes.
          </p>
          <FooterServico>
            <Price>A partir de R$ 70</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Falar no WhatsApp
            </BotaoServico>
          </FooterServico>
        </ServiceCard>
      </ServicesGrid>
      <TrustBlock>
        <p>✔ Atendimento direto, sem intermediários</p>
        <p>✔ Sites responsivos e rápidos</p>
        <p>✔ Entrega organizada e dentro do prazo</p>
      </TrustBlock>
      <PriceNote>
        * Os valores podem variar conforme a complexidade do projeto e
        funcionalidades solicitadas.
      </PriceNote>
    </Container>
  )
}
