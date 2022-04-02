export class Pessoa {

    constructor(
        readonly nome: string,
        readonly peso: number,
        readonly altura: number,
        readonly imc: number,
        readonly data: Date
    ) {}
}