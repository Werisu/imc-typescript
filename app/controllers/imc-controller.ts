import { Pessoas } from './../models/pessoas.js';
import { Pessoa } from "../models/pessoa.js";
import { PessoasView } from '../views/pessoas-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { Status } from '../enums/status.js';

export class ImcController {
  private nome: HTMLInputElement;
  private peso: HTMLInputElement;
  private altura: HTMLInputElement;
  private imc: number;
  private data: Date;
  private status: string;
  private pessoas = new Pessoas();
  private pessoasView = new PessoasView('#pessoasView');
  private mensagemView = new MensagemView("#mensagemView");

  constructor() {
    this.nome = document.querySelector("#nome") as HTMLInputElement;
    this.peso = document.querySelector("#peso") as HTMLInputElement;
    this.altura = document.querySelector("#altura") as HTMLInputElement;
    this.data = new Date();
    this.pessoasView.update(this.pessoas);
  }

  adiciona(): void {
    this.calcula(parseFloat(this.peso.value), parseFloat(this.altura.value));
    
    const pessoa = Pessoa.criaDe(
      this.nome.value,
      this.peso.value,
      this.altura.value,
      this.imc,
      this.status,
      this.data
    );

    if (!this.eNomeValido(pessoa.nome)) {
      this.mensagemView.update(`nome só pode conter letras`)
      return ;
    }
    
    this.pessoas.adiciona(pessoa);
    this.atualizaView();
    this.limparFormulario();
  }

  private calcula(peso: number, altura: number): number {
    // IMC = 80 kg ÷ (1,80 m × 1,80 m) = 24,69 kg/m2 (Peso ideal)
    this.imc = peso / (altura * altura);
    this.categorizacao(this.imc);
    return this.imc;
  }

  private limparFormulario(): void{
    this.nome.value = '';
    this.peso.value = '';
    this.altura.value = '';
    this.nome.focus();
  }

  private eNomeValido(nome: string){
    var padrao = /[^a-zà-ú]/gi;
    return nome.match(padrao) == null;
  }

  private atualizaView(): void {
    this.pessoasView.update(this.pessoas);
    this.mensagemView.update("Pessoa adicionado com sucesso!");
  }

  private categorizacao(imc: number): void{
    if (imc >= 18.5 && imc <= 24.9) {
      this.status = Status.PESO_NORMAL;
    } else if(imc >= 25 && imc <= 29.9){
      this.status = Status.SOBREPESO;
    } else if(imc >= 30 && imc <= 34.9){
      this.status = Status.OBESIDADE_GRAU_1;
    } else if(imc >= 35 && imc <= 39.9){
      this.status = Status.OBESIDADE_GRAU_2;
    } else if(imc >= 40){
      this.status = Status.OBESIDADE_GRAU_3;
    } else{
      this.status = Status.ABAIXO_DO_PESO;
    }
  }
}
