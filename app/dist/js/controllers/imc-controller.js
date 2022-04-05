var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { Pessoas } from './../models/pessoas.js';
import { Pessoa } from "../models/pessoa.js";
import { PessoasView } from '../views/pessoas-view.js';
import { MensagemView } from '../views/mensagem-view.js';
import { Status } from '../enums/status.js';
import { logarTempoDeExecucao } from '../decorators/logar-tempo-de-execucao.js';
export class ImcController {
    constructor() {
        this.pessoas = new Pessoas();
        this.pessoasView = new PessoasView('#pessoasView');
        this.mensagemView = new MensagemView("#mensagemView");
        this.nome = document.querySelector("#nome");
        this.peso = document.querySelector("#peso");
        this.altura = document.querySelector("#altura");
        this.data = new Date();
        this.pessoasView.update(this.pessoas);
    }
    adiciona() {
        this.calcula(parseFloat(this.peso.value), parseFloat(this.altura.value));
        const pessoa = Pessoa.criaDe(this.nome.value, this.peso.value, this.altura.value, this.imc, this.status, this.data);
        if (!this.eNomeValido(pessoa.nome)) {
            this.mensagemView.update(`nome só pode conter letras`);
            return;
        }
        this.pessoas.adiciona(pessoa);
        this.atualizaView();
        this.limparFormulario();
    }
    calcula(peso, altura) {
        this.imc = peso / (altura * altura);
        this.categorizacao(this.imc);
        return this.imc;
    }
    limparFormulario() {
        this.nome.value = '';
        this.peso.value = '';
        this.altura.value = '';
        this.nome.focus();
    }
    eNomeValido(nome) {
        var padrao = /[^a-zà-ú]/gi;
        return nome.match(padrao) == null;
    }
    atualizaView() {
        this.pessoasView.update(this.pessoas);
        this.mensagemView.update("Pessoa adicionado com sucesso!");
    }
    categorizacao(imc) {
        if (imc >= 18.5 && imc <= 24.9) {
            this.status = Status.PESO_NORMAL;
        }
        else if (imc >= 25 && imc <= 29.9) {
            this.status = Status.SOBREPESO;
        }
        else if (imc >= 30 && imc <= 34.9) {
            this.status = Status.OBESIDADE_GRAU_1;
        }
        else if (imc >= 35 && imc <= 39.9) {
            this.status = Status.OBESIDADE_GRAU_2;
        }
        else if (imc >= 40) {
            this.status = Status.OBESIDADE_GRAU_3;
        }
        else {
            this.status = Status.ABAIXO_DO_PESO;
        }
    }
}
__decorate([
    logarTempoDeExecucao()
], ImcController.prototype, "adiciona", null);
