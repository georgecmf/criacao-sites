import styled from 'styled-components'

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
  border-radius: 8px;
  background-color: ${(props) => props.theme.corDeFundo};

  display: flex;
  flex-direction: column;
  gap: 12px;

  cursor: pointer;
transition: transform 0.2s ease;

&:hover {
  transform: translateY(-5px);
}

  overflow: hidden; /* importante */

  img {
    width: 100%;
    height: 180px; /* altura padrão */
    object-fit: cover; /* mantém proporção e corta o excesso */
  }

  img {
  width: 100%;
  height: 180px;
  object-fit: cover;
  transition: transform 0.3s ease;
}

&:hover img {
  transform: scale(1.05);
}
`

export const Actions = styled.div`
  display: flex;
  gap: 8px;
  margin-top: auto;
`

export const LinkBotao = styled.a`
  flex: 1;
  color: ${(props) => props.theme.corDeFundo};
  font-size: 14px;
  background-color: ${(props) => props.theme.corDeFundoBotao};
  text-decoration: none;
  padding: 8px 12px;

  border-radius: 4px;
  text-align: center;
  transition: opacity 0.3s ease;

  &:hover {
    opacity: 0.8;
  }
`
