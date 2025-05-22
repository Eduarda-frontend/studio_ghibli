import { AsideContainer } from "./styles"


const Aside = () => (
    <AsideContainer>    
        <input type="text" placeholder="Buscar filme" />
        <label htmlFor="sinopse">Incluir sinopse
            <input type="checkbox" id="sinopse" />
        </label>


    </AsideContainer>    
)

export default Aside