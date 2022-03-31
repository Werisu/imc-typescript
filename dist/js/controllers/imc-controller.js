import { Pessoa } from "../models/pessoa.js";
export class ImcController {
    constructor() {
        this.nome = document.querySelector('#nome');
        this.peso = document.querySelector('#peso');
        this.altura = document.querySelector('#altura');
    }
    adiciona() {
        const nome = this.nome.value;
        const peso = parseFloat(this.peso.value);
        const altura = parseFloat(this.altura.value);
        const pessoa = new Pessoa(nome, peso, altura);
        console.log(pessoa);
        var resultado = this.calcula(pessoa.peso, pessoa.altura);
        console.log(resultado);
    }
    calcula(peso, altura) {
        // IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)
        this.imc = peso / (altura * altura);
        return this.imc;
    }
}
