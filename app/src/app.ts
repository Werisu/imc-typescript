import { ImcController } from "./controllers/imc-controller.js";

const controller = new ImcController();

const form = document.querySelector(".form");
if (form) {
    form.addEventListener('submit', event =>{
        event.preventDefault();
        controller.adiciona();
    });
}