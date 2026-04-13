import Projeto from '../../components/Projeto'
import Titulo from '../../components/Titulo'
import { Container, Lista } from './styles'

const projetos = [
  {
    titulo: 'Mimos da Bru',
    descricao: 'Loja online com foco em vendas e identidade visual forte.',
    imagem: '/imagens/mimus-bruna.png',
    link: 'https://site-mimosbru-george.vercel.app',
    github: 'https://github.com/georgecmf/site.mimosbru'
  },
  {
    titulo: 'Nail Designer',
    descricao: 'Site profissional para atrair clientes e facilitar agendamentos.',
    imagem: '/imagens/bruna-nail.png',
    link: 'https://bruna-nail-designer-georgecmfs-projects.vercel.app',
    github: 'https://github.com/georgecmf/bruna-nail-designer'
  },
  {
    titulo: 'Projeto Restaurante',
    descricao: 'Cardápio online moderno com layout responsivo.',
    imagem: '/imagens/restaurante3.png',
    link: 'https://projeto-restaurante-one.vercel.app',
    github: 'https://github.com/georgecmf/projeto-restaurante'
  },
  {
    titulo: 'Clone Disney+',
    descricao: 'Interface moderna com animações e design profissional.',
    imagem: '/imagens/disney+.png',
    link: 'https://clone-disneyplus-pied-xi.vercel.app',
    github: 'https://github.com/georgecmf/clone_disneyplus'
  }
]

const Projetos = () => (
  <Container>
    <Titulo fontSize={24}>Sites que já desenvolvi</Titulo>
    <Lista>
      {projetos.map((projeto) => (
        <li key={projeto.titulo}>
          <Projeto
            titulo={projeto.titulo}
            descricao={projeto.descricao}
            imagem={projeto.imagem}
            link={projeto.link}
            github={projeto.github}
          />
        </li>
      ))}
    </Lista>
  </Container>
)

export default Projetos
