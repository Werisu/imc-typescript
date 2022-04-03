export class Pessoa {
    constructor(nome, peso, altura, imc, status, data) {
        this.nome = nome;
        this.peso = peso;
        this.altura = altura;
        this.imc = imc;
        this.status = status;
        this.data = data;
    }
    static criaDe(nomeString, pesoString, alturaString, imc, status, data) {
        const nome = nomeString;
        const peso = parseFloat(pesoString);
        const altura = parseFloat(alturaString);
        return new Pessoa(nome, peso, altura, imc, status, data);
    }
}
