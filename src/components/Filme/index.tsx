import { Imagem } from "./styles"

type Props = {
    imagem: string
    titulo: string
    anoLancamento: string
    duracao: string
    sinopse: string
    diretorEProdutor: string
    nota: string
}

const FilmeItem = ({
    imagem,
    titulo,
    anoLancamento,
    duracao,
    sinopse,
    diretorEProdutor,
    nota
} : Props) => {
    return(

        <ul>
            <li>
                <Imagem src={imagem} alt={titulo} />
                <h3>{titulo}</h3>
                <ul>
                    <li>{anoLancamento}</li>
                    <li>{duracao}</li>
                    <li>{sinopse}</li>
                    <li>{diretorEProdutor}</li>
                    <li>{nota}</li>
                </ul>
            </li>
        </ul>
    )
}

export default FilmeItem