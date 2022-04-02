import { Pessoa } from './pessoa';
export class Pessoas{
    pessoas: Array<Pessoa> = [];

    public adiciona(pessoa: Pessoa): void{
        this.pessoas.push(pessoa)
    }

    public lista(): ReadonlyArray<Pessoa>{
        return this.pessoas;
    }
}