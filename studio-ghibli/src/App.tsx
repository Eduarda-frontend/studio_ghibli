import EstiloGlobal from "./styles"
import Header from "./conteiners/Header"
import Main from "./conteiners/Main"
import { Provider } from "react-redux"
import { store } from './store'

export type Filme = {
  rt_score: string
  image: string
  title: string
  release_date: string
  running_time: string
  description: string
  director: string
  producer: string
  nota: string
  id: string
}

function App() {

  return (
    <Provider store={store}>  
        <EstiloGlobal />
        <Header />
        <Main />
    </Provider>

  )
}

export default App
