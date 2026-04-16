import { Titulo as TituloEstilo } from './styles'

export type Props = {
  children: string
  fontSize?: number
  align?: 'left' | 'center' | 'right'
}

const Titulo = ({ children, fontSize = 16, align = 'left' }: Props) => (
  <TituloEstilo $fontSize={fontSize} $align={align}>
    {children}
  </TituloEstilo>
)

export default Titulo
