import type { ChangeEvent } from "react"
import type FilmeClass from "../../models/Filme"
import { Imagem } from "./styles"
import { useDispatch } from "react-redux"
import { assistido } from "../../store/reducers/filtro"

type Props = FilmeClass

const FilmeItem = ({
    image,
    title,
    release_date,
    running_time,
    description,
    director,
    producer,
    rt_score,
    status,
    id
} : Props) => {
    const dispatch = useDispatch()

    function alteraStatusFilme( evento: ChangeEvent<HTMLInputElement>){
        dispatch(
            assistido({
                id,
                assistido: evento.target.checked
            })
        )
    }
    return(

        <ul>
            <li>
                <Imagem>
                    <img src={image} alt={title} />
                </Imagem>
                <h3>Titulo: {title}</h3>
                <ul>
                    <li>Ano do lançamento: {release_date}</li>
                    <li>Duração: {running_time}</li>
                    <li>Diretor: {director}</li>
                    <li>Produtor: {producer}</li>
                    <li>Sinopse: {description}</li>
                    <li>Nota de avaliação: {rt_score}</li>
                </ul>

                <label htmlFor="assistido">
                    Marcar como assistido
                <input 
                type="checkbox" 
                checked={status === true}
                id={id}
                onChange={alteraStatusFilme}
                />
                </label>
                <label htmlFor="favoritar">
                    Favoritar filme
                <input 
                type="checkbox" 
                checked={status === true}
                id={id}
                onChange={alteraStatusFilme}
                />
                </label>

            </li>
        </ul>
    )
}

export default FilmeItem