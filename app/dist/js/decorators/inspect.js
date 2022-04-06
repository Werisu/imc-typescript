export function inspect(target, propertyKey, descriptor) {
    let metodoOriginal = descriptor.value;
    descriptor.value = function (...args) {
        console.log(`--- método: ${propertyKey}`);
        console.log(`------ argumentos: ${JSON.stringify(args)}`);
        let retorno = metodoOriginal.apply(this, args);
        console.log(`------ função: ${JSON.stringify(retorno)}`);
    };
    return descriptor;
}
;
