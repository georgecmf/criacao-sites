import styled, { createGlobalStyle } from 'styled-components'

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;
  }

  body {
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: ${(props) => props.theme.corDeFundo};

    @media (max-width: 768px) {
      padding-top: 16px;
      padding-bottom: 16px;
    }
  }
`

export default EstiloGlobal

export const Container = styled.div`
  max-width: 1100px;
  width: 100%;
  margin: 0 auto;

  padding: 0 16px; /* ESSENCIAL pra centralizar bem */

  display: flex;
  flex-direction: column;
  align-items: center; /* centraliza conteúdo */

  main {
    width: 100%;
    max-width: 900px; /* deixa mais alinhado e profissional */
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`