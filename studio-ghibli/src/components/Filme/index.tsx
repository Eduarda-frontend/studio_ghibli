import { Imagem } from "./styles"

type Props = {
    image: string
    title: string
    release_date: string
    running_time: string
    description: string
    director: string
    producer: string
    rt_score: string
}

const FilmeItem = ({
    image,
    title,
    release_date,
    running_time,
    description,
    director,
    producer,
    rt_score
} : Props) => {
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
                <input type="checkbox"  id="assistido" />
                </label>
                <label htmlFor="favoritar">
                    Favoritar filme
                <input type="checkbox"  id="favoritar" />
                </label>

            </li>
        </ul>
    )
}

export default FilmeItem