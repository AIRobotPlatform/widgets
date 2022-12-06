const { WebcController } = WebCardinal.controllers;

export default class ChatMessagesController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(async () => await document.querySelector("ion-content").scrollToBottom(), 1000)
    }

}
