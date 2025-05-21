import  Item from "../../models/Filmes"
import FilmeItem from "../Filme"

export type Props = {
    itens: Item[]
} 

const ListaDeFilmes = ( { itens } : Props ) => (
    <>
        {itens.map((filme) => (
            <FilmeItem
            key={filme.id}
            imagem={filme.imagem}
            titulo={filme.titulo}
            anoLancamento={filme.anoLancamento}
            duracao={filme.duracao}
            sinopse={filme.sinopse}
            diretorEProdutor={filme.diretorEProdutor}
            nota={filme.nota}
            />
        ))}
    </>
)

export default ListaDeFilmes