import { Pessoas } from './../models/pessoas.js';
import { Pessoa } from "../models/pessoa.js";

export class ImcController {
  private nome: HTMLInputElement;
  private peso: HTMLInputElement;
  private altura: HTMLInputElement;
  
  private pessoas = new Pessoas;
  
  public imc: number;

  constructor() {
    this.nome = document.querySelector("#nome");
    this.peso = document.querySelector("#peso");
    this.altura = document.querySelector("#altura");
  }

  adiciona(): void {
    const pessoa = this.criarPessoa();
    this.pessoas.adiciona(pessoa);
    console.log(this.pessoas.lista())
    console.log(pessoa.imc);
    this.limparFormulario();
  }

  criarPessoa(): Pessoa {
    const nome = this.nome.value;
    const peso = parseFloat(this.peso.value);
    const altura = parseFloat(this.altura.value);
    var imc = this.calcula(peso, altura);
    return new Pessoa(nome, peso, altura, imc);
  }

  calcula(peso: number, altura: number): number {
    // IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)
    this.imc = peso / (altura * altura);
    return this.imc;
  }

  limparFormulario(): void{
    this.nome.value = '';
    this.peso.value = '';
    this.altura.value = '';
    this.nome.focus();
  }
}
