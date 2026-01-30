import styled from 'styled-components'

export const Container = styled.section`
  margin-bottom: 48px;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Titulo = styled.h1`
  font-size: 32px;
  max-width: 640px;
  line-height: 1.3;
  color: ${(props) => props.theme.corPrincipal};

  @media (max-width: 768px) {
    text-align: center;
    font-size: 26px;
  }
`

export const Subtitulo = styled.p`
  margin-top: 12px;
  margin-bottom: 24px;
  max-width: 520px;
  font-size: 16px;
  color: ${(props) => props.theme.corSecundaria};

  @media (max-width: 768px) {
    text-align: center;
    margin-left: auto;
    margin-right: auto;
  }
`
export const HeroButton = styled.a`
  width: fit-content;
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

  @media (max-width: 768px) {
    margin: 0 auto;
    width: 100%;
    max-width: 280px;
  }
`
export const HeroTrust = styled.ul`
  margin-top: 24px;
  padding-left: 0;

  display: flex;
  flex-direction: column;
  gap: 10px;
  list-style: none;

  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};

  li {
    display: flex;
    align-items: center;
    gap: 6px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 12px;
    text-align: center;
  }
`
