const { WebcController } = WebCardinal.controllers;

export default class ChatYesNoMenuController extends WebcController {
    defaultValues = {
        buttonColor: '#FFFFFF'
    }
    constructor(...props) {
        super(...props);
        this.model.button = { style: `background:${this.model.background || this.defaultValues.buttonColor}` }
        setTimeout(() => this.initEventListeners(), 500);
    }
    initEventListeners() {
        const optionsDiv = document.querySelector(".button-container");
        const messagesHeight = document.querySelector(".main-body").offsetHeight;
        const height = (messagesHeight - optionsDiv.offsetHeight) + "px";

        document.querySelector("#yes").onclick = () => {
            this.model.action("yes")
            document.querySelector('.chat-page').style.setProperty('--height', messagesHeight + "px")
        };
        document.querySelector("#no").onclick = () => {
            this.model.action("no");
            document.querySelector('.chat-page').style.setProperty('--height', messagesHeight + "px")
        };

        document.querySelector('.chat-page').style.setProperty('--height', height)
    }
}
