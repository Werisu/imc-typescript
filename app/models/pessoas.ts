import { Pessoa } from './pessoa';
export class Pessoas{
    pessoas: Array<Pessoa> = [];

    adiciona(pessoa: Pessoa): void{
        this.pessoas.push(pessoa)
    }

    lista(): ReadonlyArray<Pessoa>{
        return this.pessoas;
    }
}