import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
`

export const Item = styled.div`
  border-bottom: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 12px 0;
  cursor: pointer;
`

export const Pergunta = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 16px;
  font-weight: bold;

  span {
    font-size: 20px;
  }
`

export const Resposta = styled.p`
  font-size: 14px;
  color: #aaa;
  margin-top: 8px;
`