const { WebcController } = WebCardinal.controllers;

export default class RobotCardController extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/components/assets/card-background.jpg)',
        robotFace: './AIRobotWidgets/components/assets/robot-face.svg',
        textBackground: '#6871EF',
    }
    constructor(...props) {
        super(...props);
        this.initializeModel();
        this.initializeMessage();
        this.setEventListeners();
    }

    initializeModel() {

        this.model = {
            background: {
                style: `background:${this.model.background || this.defaultValues.background}`
            },
            robotFace: {
                src: this.model.robotFace || this.defaultValues.robotFace
            },
            textBackground: `${this.model.textBackground || this.defaultValues.textBackground}`,


        };
        if (this.model.arrayMessage === undefined) {
            console.log("Please bind the message array");
            this.model.arrayMessage = [];
        }

        if(this.model.messagesOverflow){
            document.querySelector("#messages-container").classList.add('overflow');
        }

        if(this.model.isCircleShape){
            document.querySelector("#robot-face").classList.add('circle');
        }

    }
    initializeMessage() {
        const messageContainer = this.getElementByTag("message-container");
        this.model.arrayMessage.forEach(m => {
            const message = document.createElement("div");
            message.style.background = this.model.textBackground;
            message.classList.add("message", "message-animation")
            message.innerText = m;
            messageContainer.appendChild(message)
        })
    }
    setEventListeners() {
        this.model.onChange("arrayMessage", () => {
            const messageContainer = this.getElementByTag("message-container");
            const message = document.createElement("div");
            message.style.background = this.model.textBackground;
            message.classList.add("message", "message-animation");
            message.innerText = this.model.arrayMessage[this.model.arrayMessage.length - 1]
            messageContainer.appendChild(message)
            if (this.model.arrayMessage.length > 3) {
                messageContainer.children[0].classList.remove("message-animation");
                messageContainer.children[0].classList.add("remove-message-animation");
                setTimeout(() => { messageContainer.removeChild(messageContainer.children[0]) }, 300);
            }
        })
    }
}
