import styled from 'styled-components'

export const Container = styled.section`
  margin: 40px auto;
  max-width: 700px; /* MESMA IDEIA DO HERO */

  display: flex;
  flex-direction: column;
  gap: 16px;

  text-align: center; /* deixa consistente */
`

export const Item = styled.div`
  h3 {
    margin-bottom: 6px;
  }

  p {
    color: ${(props) => props.theme.corSecundaria};
    font-size: 14px;
    max-width: 500px;
    margin: 0 auto;
  }
`