import {
  Container,
  Title,
  StepsGrid,
  StepCard,
  StepNumber,
  StepTitle,
  StepText
} from './styles'

const ComoFunciona = () => (
  <Container>
    <Title>Como funciona</Title>

    <StepsGrid>
      <StepCard>
        <StepNumber>1</StepNumber>
        <StepTitle>Contato</StepTitle>
        <StepText>Você me chama no WhatsApp e explica o que precisa.</StepText>
      </StepCard>

      <StepCard>
        <StepNumber>2</StepNumber>
        <StepTitle>Planejamento</StepTitle>
        <StepText>Definimos o tipo de site ideal para o seu negócio.</StepText>
      </StepCard>

      <StepCard>
        <StepNumber>3</StepNumber>
        <StepTitle>Desenvolvimento</StepTitle>
        <StepText>
          Crio o site com foco em design, performance e responsividade.
        </StepText>
      </StepCard>

      <StepCard>
        <StepNumber>4</StepNumber>
        <StepTitle>Entrega</StepTitle>
        <StepText>Site publicado e funcionando, pronto para divulgar.</StepText>
      </StepCard>
    </StepsGrid>
  </Container>
)

export default ComoFunciona
