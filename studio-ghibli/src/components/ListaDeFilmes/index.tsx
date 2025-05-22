import { useGetFilmesQuery } from "../../services/api"
import FilmeItem from "../Filme"
import { Lista } from "./styles"


const ListaDeFilmes = () => {
    const { data: filme } = useGetFilmesQuery()

    return(
        <Lista>
            {filme?.map((filme) => (
                <FilmeItem
                key={filme.id}
                image={filme.image}
                title={filme.title}
                release_date={filme.release_date}
                running_time={filme.running_time}
                description={filme.description}
                director={filme.director}
                producer={filme.producer}
                rt_score={filme.rt_score}
                />
            ))}
        </Lista>
    )
}

export default ListaDeFilmes