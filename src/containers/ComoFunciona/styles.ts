import styled from 'styled-components'

export const Container = styled.section`
  margin: 64px 0;

  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 32px;
  color: ${(props) => props.theme.corPrincipal};
`

export const StepsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`

export const StepCard = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 16px;
  padding: 24px;
  background-color: ${(props) => props.theme.corDeFundo};

  display: flex;
  flex-direction: column;
  gap: 8px;
`

export const StepNumber = styled.span`
  font-size: 14px;
  font-weight: bold;
  color: ${(props) => props.theme.corDeFundoBotao};
`

export const StepTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.corPrincipal};
`

export const StepText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};
  line-height: 1.5;
`
