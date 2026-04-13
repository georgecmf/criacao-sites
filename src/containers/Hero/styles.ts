import styled from 'styled-components'

export const Container = styled.section`
  margin: 0 auto 48px auto;
  max-width: 700px; /* ESSENCIAL */

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza tudo */
  text-align: center; /* força alinhamento */

  padding: 40px 0;
`

export const Titulo = styled.h1`
  font-size: 32px;
  max-width: 640px;
  line-height: 1.3;
  margin: 0 auto;
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
  margin-left: auto;
  margin-right: auto;
  font-size: 16px;
  color: ${(props) => props.theme.corSecundaria};
`
export const HeroButton = styled.a`
  width: fit-content;
  padding: 14px 28px;
  font-size: 16px;
  font-weight: bold;

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

  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: center; /* ESSENCIAL */

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
