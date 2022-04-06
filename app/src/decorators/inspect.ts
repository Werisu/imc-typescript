export function inspect (
    target: any,
    propertyKey: string,
    descriptor: PropertyDescriptor
){
    let metodoOriginal = descriptor.value;
    descriptor.value = function(...args: any[]){
        console.log(`--- método: ${propertyKey}`);
        console.log(`------ argumentos: ${JSON.stringify(args)}`);
        let retorno = metodoOriginal.apply(this, args);
        console.log(`------ função: ${JSON.stringify(retorno)}`);
    }
    return descriptor;
};