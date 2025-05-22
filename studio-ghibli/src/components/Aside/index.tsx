import { AsideContainer } from "./styles"


const Aside = () => (
    <AsideContainer>    
        <input type="text" placeholder="Buscar filme" />
        <label htmlFor="sinopse">Incluir sinopse na pesquisa
            <input type="checkbox" id="sinopse" />
        </label>

        <div>
            <ul>    
                <p>Filtros</p>
                <li>Assistidos</li>
                <li>Favoritos</li>
                <li>Com notas</li>
                <li>Avaliação</li>
            </ul>
            <button type="button">Limpar tudo</button>

        </div>


    </AsideContainer>    
)

export default Aside