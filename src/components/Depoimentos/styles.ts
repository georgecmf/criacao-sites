import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
`

export const Lista = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 16px;
  margin-top: 16px;
`

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 8px;
  padding: 16px;
  background-color: ${(props) => props.theme.corDeFundo};

  display: flex;
  flex-direction: column;
  gap: 12px;

  p {
    font-size: 14px;
  }
`

export const Nome = styled.div`
  font-size: 14px;

  span {
    display: block;
    color: #aaa;
    font-size: 12px;
  }
`