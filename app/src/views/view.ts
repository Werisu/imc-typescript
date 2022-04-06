import { inspect } from "../decorators/inspect.js";
import { logarTempoDeExecucao } from "../decorators/logar-tempo-de-execucao.js";

export abstract class View<T>{
    
    protected elemento: HTMLElement;

    constructor(seletor: string){
        const elemento = document.querySelector(seletor)
        if (elemento) {
            this.elemento = elemento as HTMLElement;
        }else{
            throw new Error(`O elemento ${seletor} não existe no DOM`);
            
        }
    }

    @logarTempoDeExecucao()
    @inspect
    public update(model: T): void{
        const template = this.template(model);
        this.elemento.innerHTML = template
    }

    protected abstract template(model: T): string;
}