const { WebcController } = WebCardinal.controllers;

export default class RobotCardController extends WebcController {
    defaultValues = {
        background: 'url(./AIRobotWidgets/assets/card-background.jpg)',
        robotFace: './AIRobotWidgets/assets/robot-face.svg',
        robotBackground: '#6871EF',
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
            robotBackground: {
                style: `background:${this.model.robotBackground || this.defaultValues.robotBackground}`
            }
        };
        if(this.model.arrayMessage===undefined){
            console.log("Please bind the message array");
            this.model.arrayMessage=[];
        }
        if (this.model.textBackground === undefined) {
            this.model.textBackground = this.defaultValues.robotBackground;
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
