class Filme {
    imagem: string
    titulo: string
    anoLancamento: string
    duracao: string
    sinopse: string
    diretorEProdutor: string
    nota: string
    id: number

    constructor(
        imagem: string,
        titulo: string,
        anoLancamento: string,
        duracao: string,
        sinopse: string,
        diretorEProdutor: string,
        nota: string,
        id: number
    ) {
        this.imagem = imagem
        this.titulo = titulo
        this.anoLancamento = anoLancamento
        this.duracao = duracao
        this.sinopse = sinopse
        this.diretorEProdutor = diretorEProdutor
        this.nota = nota
        this.id = id
    }
}

export default Filme