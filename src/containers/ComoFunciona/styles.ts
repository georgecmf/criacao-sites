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

  justify-content: flex-start;
  align-items: flex-start;

  gap: 12px;
  height: 100%;

  transition: 0.2s;

  &:hover {
    transform: translateY(-4px);
  }
`

export const StepTitle = styled.h3`
  font-size: 16px;
  font-weight: 600;
  color: ${(props) => props.theme.corPrincipal};
  margin: 0;

  display: flex;
  align-items: center;
  gap: 8px;

  span {
    flex-shrink: 0;
  }
`

export const StepText = styled.p`
  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};
  line-height: 1.5;
  margin: 0;
`
