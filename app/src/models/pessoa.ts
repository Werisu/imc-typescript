export class Pessoa {

    constructor(
        readonly nome: string,
        readonly peso: number,
        readonly altura: number,
        readonly imc: number,
        readonly status: string,
        readonly data: Date
    ) {}

    public static criaDe(nomeString: string, pesoString: string, alturaString: string, imc: number, status:string, data: Date): Pessoa{
        const nome = nomeString;
        const peso = parseFloat(pesoString);
        const altura = parseFloat(alturaString);
        return new Pessoa(nome, peso, altura, imc, status, data);
    }
}