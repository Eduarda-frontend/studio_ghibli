import ListaDeFilmes from "./components/ListaDeFilmes"
import type Filme from "./models/Filmes"

import imagemFilme from './assets/img.jpg'
import EstiloGlobal from "./styles"
import Header from "./components/Header"
import Container from "./components/Background"


const ghibli: Filme[] = [
  {
    imagem: imagemFilme,
    titulo: 'Nome do Filme',
    anoLancamento: '23/04/2025',
    duracao:'12:00',
    sinopse:' Não sei o que, não sei o que',
    diretorEProdutor: 'Afonto e Raimundo',
    nota:'10',
    id: 1
  }
]



function App() {

  return (
    <>
    
        <Container />
        <div>
          <EstiloGlobal />
            <Header />
            <div>
              <ListaDeFilmes itens={ghibli}/>
            </div>

        </div>

    </>

  )
}

export default App
