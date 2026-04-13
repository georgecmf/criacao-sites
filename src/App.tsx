import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Hero from './containers/Hero'
import Beneficios from './components/Beneficios'
import Sobre from './containers/Sobre'
import Servicos from './containers/Servicos'
import Depoimentos from './components/Depoimentos'
import FAQ from './components/FAQ'
import ComoFunciona from './containers/ComoFunciona'
import CTA from './containers/CTA'
import EstiloGlobal, { Container } from './styles'
import temaLight from './themes/light'

function App() {
  return (
    <ThemeProvider theme={temaLight}>
      <EstiloGlobal />
      <Container>
        <main>
          <Hero />
          <Beneficios />
          <Sobre />
          <Projetos />
          <Servicos />
          <Depoimentos />
          <FAQ />
          <ComoFunciona />
          <CTA />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App