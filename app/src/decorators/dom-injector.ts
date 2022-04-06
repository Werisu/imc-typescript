export function domInjector(seletor: string){
    return function (target:any, propertyKey:string){
        console.log(`Modificando protype ${target.constructor.name}
             e adicionando getter para a propriedade ${propertyKey}`);
        
        let elemento: HTMLElement;
        const getter = function (){
            if (!elemento) {
                console.log('buscando pela primeira vez');
                
                elemento = document.querySelector(seletor) as HTMLElement;
            }

            return elemento;
        }

        Object.defineProperty(
            target,
            propertyKey,
            { get: getter }
        )
    }
}