import Titulo from '../Titulo'
import Paragrafo from '../Paragrafo'
import { Container, Grid, Item } from './styles'

const Beneficios = () => (
  <Container>
    <Titulo fontSize={24} align='center'>
    Por que fazer comigo
    </Titulo>

    <Grid>
      <Item>
        <h3>⚡ Pronto rápido</h3>
        <Paragrafo>
          Nada de esperar semanas. Em poucos dias seu site está no ar.
        </Paragrafo>
      </Item>

      <Item>
        <h3>💰 Sem mensalidade</h3>
        <Paragrafo>
          Você paga uma vez e o site é seu para sempre.
        </Paragrafo>
      </Item>

      <Item>
        <h3>📈 Focado em clientes</h3>
        <Paragrafo>
          Cada detalhe pensado para transformar visitantes em contatos.
        </Paragrafo>
      </Item>

      <Item>
        <h3>✅ Só paga se gostar</h3>
        <Paragrafo>
          Você vê funcionando antes e só paga se aprovar.
        </Paragrafo>
      </Item>

      <Item>
        <h3>📱 Funciona no celular</h3>
        <Paragrafo>
          Seu site adaptado para celular, onde a maioria dos clientes está.
        </Paragrafo>
      </Item>

      <Item>
        <h3>🎯 Feito para seu negócio</h3>
        <Paragrafo>
          Nada de modelo genérico. Tudo pensado para o seu tipo de cliente.
        </Paragrafo>
      </Item>
    </Grid>
  </Container>
)

export default Beneficios