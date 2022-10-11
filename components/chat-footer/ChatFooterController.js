const { WebcController } = WebCardinal.controllers;

export default class ChatFooterController extends WebcController {
    constructor(...props) {
        super(...props);
        setTimeout(() => { this.setNavigateTag() }, 0);
        this.sendMessage();

    }

    setNavigateTag() {
        const options = document.querySelector("#footer-options");
        Array.from(options.children).forEach(child => {
            const tagPage = child.getAttribute('data-tag');
            this.onTagClick(tagPage, () => {
                this.navigateToPageTag(tagPage);
            })
        })
    }

    sendMessage() {
        this.onTagClick("send-message", () => {
            const inputElement = this.getElementByTag('input');
            const messageToBeSend = inputElement.value;
            inputElement.value = ''
            if (messageToBeSend !== '') {
                const eventDetail = { 'message': messageToBeSend }
                this.element.dispatchEvent(new CustomEvent("messageSent", { detail: eventDetail }));
            }

        })
    }
}
