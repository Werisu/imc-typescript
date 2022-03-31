import { ImcController } from "./controllers/imc-controller.js";

const controller = new ImcController();

const form = document.querySelector(".form");
form.addEventListener('submit', event =>{
    event.preventDefault();
    controller.adiciona();
});