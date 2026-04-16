import Titulo from '../../components/Titulo'
import {
  Container,
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
      <Titulo fontSize={24} align='center'>
        Qual tipo de site você precisa?
        </Titulo>

      <ServicesGrid>
        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>💻</ServiceIcon>
            <h3>Site para apresentar seu negócio</h3>
          </ServiceHeader>
          <p>
            Site completo para mostrar seu trabalho, passar confiança e facilitar o contato com clientes.
          </p>

          <p>✔ Entrega rápida</p>
          <p>✔ Funciona no celular</p>
          <p>✔ Sem mensalidade</p>

          <FooterServico>
            <Price>A partir de R$ 600</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Quero esse site
            </BotaoServico>
          </FooterServico>
        </ServiceCard>

        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>🚀</ServiceIcon>
            <h3>Página para vender produto ou serviço</h3>
          </ServiceHeader>
          <p>
            Ideal para anúncios. Página focada em transformar visitantes em mensagens e vendas.
          </p>

          <p>✔ Foco em conversão</p>
          <p>✔ Carregamento rápido</p>
          <p>✔ Design profissional</p>

          <FooterServico>
            <Price>A partir de R$ 400</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Quero esse site
            </BotaoServico>
          </FooterServico>
        </ServiceCard>

        <ServiceCard>
          <ServiceHeader>
            <ServiceIcon>🛠️</ServiceIcon>
            <h3>Correções e melhorias no seu site</h3>
          </ServiceHeader>
          <p>
            Resolvo problemas, faço ajustes e deixo seu site mais profissional e funcional.
          </p>

          <p>✔ Ajustes rápidos</p>
          <p>✔ Melhorias visuais</p>
          <p>✔ Suporte direto</p>

          <FooterServico>
            <Price>A partir de R$ 70</Price>
            <BotaoServico href="https://wa.me/5551986028455" target="_blank">
              Solicitar ajuste
            </BotaoServico>
          </FooterServico>
        </ServiceCard>
      </ServicesGrid>

      <TrustBlock>
        <p>✔ Entrega rápida e organizada</p>
        <p>✔ Você acompanha todo o processo</p>
        <p>✔ Só paga se gostar</p>
      </TrustBlock>

      <PriceNote>
        * Os valores podem variar conforme a complexidade do projeto e funcionalidades solicitadas.
      </PriceNote>
    </Container>
  )
}