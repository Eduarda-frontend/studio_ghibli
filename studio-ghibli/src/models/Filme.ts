class Filme {
    rt_score: string
    image: string
    title: string
    release_date: string
    running_time: string
    description: string
    director: string
    producer: string
    status: 'assistido' | 'assistir'
    id: string

    constructor(
        rt_score: string,
        image: string,
        title: string,
        release_date: string,
        running_time: string,
        description: string,
        director: string,
        producer: string,
        status: 'assistido' | 'assistir',
        id: string,
    ){
        this.rt_score = rt_score
        this.image = image
        this.title = title
        this.release_date = release_date
        this.running_time =running_time
        this.description = description
        this.director = director
        this.producer = producer
        this.status = status
        this.id = id
    }
}

export default Filme
