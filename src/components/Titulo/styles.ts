import styled from 'styled-components'

type Props = {
  $fontSize?: number
  $align?: 'left' | 'center' | 'right'
}

export const Titulo = styled.h3<Props>`
  font-size: ${(props) =>
    props.$fontSize ? `${props.$fontSize}px` : '16px'};
  color: ${(props) => props.theme.corPrincipal};
  font-weight: bold;

  text-align: ${(props) => props.$align || 'left'};

  margin-top: 48px;
  margin-bottom: 24px;
`