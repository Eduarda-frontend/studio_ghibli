import EstiloGlobal from "./styles"
import Header from "./conteiners/Header"
import Main from "./conteiners/Main"
import { Provider } from "react-redux"
import { store } from './store'


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
