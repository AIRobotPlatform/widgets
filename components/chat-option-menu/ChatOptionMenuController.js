const { WebcController } = WebCardinal.controllers;

export default class ChatOptionMenuController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(() => this.initEventListeners(), 500)
    }
    initEventListeners() {
        const options = document.querySelectorAll(".option");
        options.forEach((option, index) => {
            option.onclick = () => this.model.action(index);
        })
    }
}