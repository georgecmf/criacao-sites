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

export const StackGrid = styled.ul`
  margin-top: 40px;
  margin-bottom: 40px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    text-align: left;
  }
`

export const StackCard = styled.li`
  background-color: ${(props) => props.theme.corDeFundo};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 16px;
  padding: 14px;

  display: flex;
  align-items: center;
  justify-content: center;

  font-size: 16px;
  font-weight: bold;
  color: ${(props) => props.theme.corPrincipal};

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 8px 16px rgba(0, 0, 0, 0.15);
  }
`
