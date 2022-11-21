const { WebcController } = WebCardinal.controllers;

export default class ChatYesNoMenuController extends WebcController {
    defaultValues = {
        buttonColor: '#4CBC79'
    }
    constructor(...props) {
        super(...props);
        this.model.button = { style: `background:${this.model.background || this.defaultValues.buttonColor}` }
        setTimeout(() => this.initEventListeners(), 500);
    }
    initEventListeners() {
        document.querySelector("#yes").onclick = () => this.model.action("yes");
        document.querySelector("#no").onclick = () => this.model.action("no");
    }
}
