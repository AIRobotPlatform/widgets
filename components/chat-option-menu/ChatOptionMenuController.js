const { WebcController } = WebCardinal.controllers;

export default class ChatOptionMenuController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(() => this.initEventListeners(), 100)
    }
    initEventListeners() {
        const options = document.querySelectorAll(".option");
        const optionsDiv = document.querySelector(".options-container");
        const messagesHeight = document.querySelector(".main-body").offsetHeight;
        const height = (messagesHeight - optionsDiv.offsetHeight) + "px";

        options.forEach((option, index) => {
            option.onclick = () => {
                this.model.action(index);
                document.querySelector('.chat-page').style.setProperty('--height', messagesHeight + "px")
                setTimeout(() => document.querySelector("ion-content").scrollToBottom(), 100);
            };
        })
        document.querySelector('.chat-page').style.setProperty('--height', height)
    }
}