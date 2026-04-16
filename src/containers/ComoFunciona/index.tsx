import Titulo from '../../components/Titulo'
import {
  Container,
  StepsGrid,
  StepCard,
  StepTitle,
  StepText
} from './styles'

const ComoFunciona = () => (
  <Container>
    <Titulo fontSize={24} align='center'>
      Como funciona
      </Titulo>

    <StepsGrid>
      <StepCard>
        <span>📞</span>
        <StepTitle>Contato</StepTitle>
        <StepText>Você me chama no WhatsApp e explica o que precisa.</StepText>
      </StepCard>

      <StepCard>
        <span>📋</span>
        <StepTitle>Planejamento</StepTitle>
        <StepText>Definimos o tipo de site ideal para o seu negócio.</StepText>
      </StepCard>

      <StepCard>
         <span>💻</span>
        <StepTitle>Desenvolvimento</StepTitle>
        <StepText>
          Crio o site com foco em design, performance e responsividade.
        </StepText>
      </StepCard>

      <StepCard>
        <span>🚀</span>
        <StepTitle>Entrega</StepTitle>
        <StepText>Site publicado e funcionando, pronto para divulgar.</StepText>
      </StepCard>
    </StepsGrid>
  </Container>
)

export default ComoFunciona