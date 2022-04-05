export class Pessoas {
    constructor() {
        this.pessoas = [];
    }
    adiciona(pessoa) {
        this.pessoas.push(pessoa);
    }
    lista() {
        return this.pessoas;
    }
}
