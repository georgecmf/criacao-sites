import Paragrafo from '../Paragrafo'
import Titulo from '../Titulo'
import { Card, LinkBotao, Actions } from './styles'

type Props = {
  titulo: string
  descricao: string
  imagem: string
  link: string
  github?: string
}

const Projeto = ({ titulo, descricao, imagem, link, github }: Props) => {
  const handleClick = () => {
    window.open(link, '_blank')
  }
  return (
    <Card onClick={handleClick}>
      <img src={imagem} alt={titulo} />

      <Titulo>{titulo}</Titulo>

      <Paragrafo $tipo="secundario">{descricao}</Paragrafo>

      <Actions>
        <LinkBotao href={link} 
        target="_blank"
        onClick={(e)=> e.stopPropagation}
        >
          Ver site ao vivo
        </LinkBotao>

        {github && (
          <LinkBotao 
            href={github} 
            target="_blank"
            onClick={(e)=>e.stopPropagation()} 
            >
            Código
          </LinkBotao>
        )}
      </Actions>
    </Card>
  )
}

export default Projeto
