import { Status } from "../enums/status.js";
import { View } from "./view.js";
export class PessoasView extends View {
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
                    <th>ESTADO</th>
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
                        <td class="bg-${item.status == Status.PESO_NORMAL ? 'success' : 'danger'}">${item.status}</td>
                    </tr>
                    `;
        }).join('')}
            </tbody>
        </table>
        `;
    }
}
