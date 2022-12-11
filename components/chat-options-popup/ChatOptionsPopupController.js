
const { WebcController } = WebCardinal.controllers;

export default class ChatOptionsPopupController extends WebcController {
    constructor(...props) {
        super(...props);
        console.log(this.model)
        setTimeout(()=>this.init(), 100)
    }
    init(){
        document.querySelectorAll(".option-input").forEach((input, index)=>{
            if(index == 0){
                input.setAttribute("checked", "checked")
            }
            input.setAttribute("id", index);
            console.log(input.nextSibling)
            input.nextElementSibling.setAttribute("for", index);
        })

        const optionsDiv = document.querySelector(".chat-options");
        const messagesHeight = document.querySelector(".main-body").offsetHeight;
        const height = (messagesHeight - optionsDiv.offsetHeight + 60) + "px";

        this.onTagClick("confirm", () => {
            const index = parseInt(document.querySelector('input[name="option"]:checked').getAttribute("id"));
            this.model.action(index);
            document.querySelector('.chat-page').style.setProperty('--height', messagesHeight + "px")
        })
        document.querySelector('.chat-page').style.setProperty('--height', height)
    }
}