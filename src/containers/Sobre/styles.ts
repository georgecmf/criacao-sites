import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;

  display: flex;
  font-size: 24px;
  flex-direction: column;
  gap: 16px;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`
