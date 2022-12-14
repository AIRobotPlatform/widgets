
const { WebcController } = WebCardinal.controllers;

export default class ChatOptionsPopupController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(async () => await this.init(), 100)
    }
    async init() {
        document.querySelectorAll(".option-input").forEach((input, index) => {
            if (index == 0) {
                input.setAttribute("checked", "checked")
            }
            input.setAttribute("id", index);
            console.log(input.nextSibling)
            input.nextElementSibling.setAttribute("for", index);
        })

        const messagesHeight = document.querySelector(".main-body").offsetHeight;
        const height = (messagesHeight - 260) + "px";

        this.onTagClick("confirm", async () => {
            const index = parseInt(document.querySelector('input[name="option"]:checked').getAttribute("id"));
            this.model.action(index);
            document.querySelector('.chat-page').style.setProperty('--height', messagesHeight + "px")
            await document.querySelector("ion-content").scrollToBottom();
        })
        document.querySelector('.chat-page').style.setProperty('--height', height)
        await document.querySelector("ion-content").scrollToBottom();
    }
}
