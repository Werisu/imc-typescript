import { Pessoas } from './../models/pessoas.js';
import { Pessoa } from "../models/pessoa.js";
import { PessoasView } from '../views/pessoas-view.js';

export class ImcController {
  private nome: HTMLInputElement;
  private peso: HTMLInputElement;
  private altura: HTMLInputElement;
  public imc: number;
  public data: Date;
  private pessoas = new Pessoas();
  private pessoasView = new PessoasView('#pessoasView');

  constructor() {
    this.nome = document.querySelector("#nome");
    this.peso = document.querySelector("#peso");
    this.altura = document.querySelector("#altura");
    this.pessoasView.update(this.pessoas);
  }

  adiciona(): void {
    const pessoa = this.criarPessoa();
    this.pessoas.adiciona(pessoa);
    this.pessoasView.update(this.pessoas);
    this.limparFormulario();
  }

  criarPessoa(): Pessoa {
    const nome = this.nome.value;
    const peso = parseFloat(this.peso.value);
    const altura = parseFloat(this.altura.value);
    const imc = this.calcula(peso, altura);
    const data = new Date();
    return new Pessoa(nome, peso, altura, imc, data);
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
