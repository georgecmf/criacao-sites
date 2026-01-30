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

export const Lista = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-top: 32px;
  column-gap: 36px;
  row-gap: 40px;
  padding: 0;
  list-style: none;
  align-items: stretch;
  width: 100%;

  li {
    display: flex;
  }

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    row-gap: 16px;
    text-align: left;
  }
`
