import styled from 'styled-components'

export const Container = styled.section`
  margin: 48px auto;
  max-width: 900px;
  text-align: center;
  `

  export const Grid = styled.div`
  margin-top: 24px;

  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const Item = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-left: 4px solid ${(props) => props.theme.corPrincipal};
  border-radius: 12px;
  padding: 18px;

  background-color: ${(props) => props.theme.corDeFundo};

  transition: 0.2s;

  &:hover {
    transform: translateY(-3px);
  }

  h3 {
    margin-bottom: 6px;
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.theme.corPrincipal};
  }

  p {
    font-size: 14px;
    color: ${(props) => props.theme.corSecundaria};
    line-height: 1.5;
  }
`