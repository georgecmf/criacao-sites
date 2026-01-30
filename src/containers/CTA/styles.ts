import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 80px;
  padding: 48px 24px;
  text-align: center;
  border-top: 1px solid ${(props) => props.theme.corDaBorda};
`

export const Titulo = styled.h2`
  font-size: 28px;
  margin-bottom: 12px;
  color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    font-size: 22px;
  }
`

export const Texto = styled.p`
  font-size: 16px;
  max-width: 520px;
  margin: 0 auto 24px;
  color: ${(props) => props.theme.corSecundaria};
`

export const Botao = styled.a`
  display: inline-block;
  padding: 12px 24px;
  border-radius: 10px;

  border: 1.5px solid ${(props) => props.theme.corDaBorda};
  color: ${(props) => props.theme.corDeFundoBotao};

  font-weight: 600;
  text-decoration: none;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotao};
    color: #fff;
  }
`
