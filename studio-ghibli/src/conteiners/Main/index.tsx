import Aside from "../../components/Aside"
import ListaDeFilmes from "../../components/ListaDeFilmes"
import { MainContainer } from "./styles"


const Main = () => (
    <MainContainer>
        <Aside />
        <ListaDeFilmes/>
    </MainContainer>
)

export default Main