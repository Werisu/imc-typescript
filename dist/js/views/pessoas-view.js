export class PessoasView {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    template(model) {
        return `
        <table class="table table-hover table-bordered">
            <thead>
                <tr>
                    <th>Nome</th>
                    <th>Peso</th>
                    <th>Altura</th>
                    <th>Data</th>
                    <th>IMC</th>
                </tr>
            </thead>
            <tbody>
                ${model.lista().map((item) => {
            return `
                    <tr>
                        <td>${item.nome}</td>
                        <td>${item.peso}</td>
                        <td>${item.altura}</td>
                        <td>${item.data.toLocaleString()}</td>
                        <td>${item.imc}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
    update(model) {
        const template = this.template(model);
        console.log(template);
        this.elemento.innerHTML = template;
    }
}
