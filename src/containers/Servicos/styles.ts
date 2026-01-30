import styled from 'styled-components'

export const Container = styled.section`
  margin-top: 40px;
  margin-bottom: 40px;
  color: ${(props) => props.theme.corPrincipal};
  background-color: ${(props) => props.theme.corDeFundo};
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    align-items: center;
    text-align: center;
  }
`

export const Title = styled.h2`
  font-size: 24px;
  margin-bottom: 24px;
`

export const ServiceHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`

export const ServicesGrid = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  align-items: stretch;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

export const ServiceCard = styled.li`
  background-color: ${(props) => props.theme.corDeFundo};
  border: 1px solid ${(props) => props.theme.corDaBorda};
  border-radius: 16px;
  padding: 24px;

  display: flex;
  flex-direction: column;
  gap: 12px;
  height: 100%;

  transition:
    transform 0.2s ease,
    box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 24px rgba(0, 0, 0, 0.15);
  }

  h3 {
    font-size: 18px;
    font-weight: bold;
  }

  p {
    font-size: 14px;
    line-height: 1.6;
    color: ${(props) => props.theme.corSecundaria};
  }
`

export const Price = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${(props) => props.theme.corDeFundoBotao};
`
export const ServiceIcon = styled.div`
  font-size: 24px;
  color: ${(props) => props.theme.corPrincipal};
`
export const FooterServico = styled.div`
  margin-top: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`

export const BotaoServico = styled.a`
  align-self: center;

  width: 100%;
  max-width: 220px;
  padding: 10px;

  border-radius: 8px;
  border: 1.5px solid ${(props) => props.theme.corDaBorda};

  color: ${(props) => props.theme.corDeFundoBotao};
  text-align: center;
  font-weight: 600;
  text-decoration: none;

  background-color: transparent;
  transition: 0.2s;

  &:hover {
    background-color: ${(props) => props.theme.corDeFundoBotao};
    color: #fff;
  }
`
export const TrustBlock = styled.div`
  margin: 40px auto 0;
  max-width: 800px;
  text-align: center;
  font-size: 18px;
  color: ${(props) => props.theme.corDeFundoBotao};

  p {
    margin: 8px 0;
  }
`
export const PriceNote = styled.p`
  margin-top: 16px;
  text-align: center;
  font-size: 14px;
  color: ${(props) => props.theme.corSecundaria};
`
